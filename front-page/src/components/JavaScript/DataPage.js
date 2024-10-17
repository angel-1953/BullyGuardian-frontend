import { Chart } from 'chart.js/auto';

export default {
  name: "DataPage",
  data() {
    return {
      isLoggedIn: false, // Track login status
    };
  },
  mounted() {
    document.title = "校園凌制零-霸凌雷達站";
    this.fetchDataAndRenderChart(); // 繪製折線圖
    this.fetchStateChart(); // 繪製圓餅圖
    this.handleHeaderDisplay();  // Call handleHeaderDisplay when the page is loaded
  },
  methods: {
    // 判斷是否有 token，並根據狀態動態切換 header
    handleHeaderDisplay() {
      const token = localStorage.getItem('token'); // 從 localStorage 中抓取 token
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');

      if (token) {
        // 已登入
        this.isLoggedIn = true;
        if (loginRegisterSection) loginRegisterSection.style.display = 'none';
        if (personalSection) personalSection.style.display = 'block';
        console.log("已登入");
      } else {
        // 未登入
        this.isLoggedIn = false;
        if (loginRegisterSection) loginRegisterSection.style.display = 'block';
        if (personalSection) personalSection.style.display = 'none';
        console.log("未登入");
      }
    },
    // 登出函數，清除 token 並更新 header 顯示狀態
    logout() {
      localStorage.removeItem('token'); // 清除 token
      this.isLoggedIn = false;
      this.handleHeaderDisplay();  // 更新 header
      console.log("已登出");
      this.$router.push('/login'); // Redirect to login page after logout
    },async fetchDataAndRenderChart() {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5280/api/Front/GetBullyingPostChart', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // 使用從 localStorage 中獲取的 token
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        
        const labels = ['第一周', '第二周', '第三周', '第四周']; // 更新為每周標籤
        const weeklyData = this.calculateWeeklyData(data.Message.Datasets[0].Data);

        this.renderChart(labels, weeklyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    // 計算每周數據
    calculateWeeklyData(dailyData) {
      const weeklyData = [];
      for (let i = 0; i < dailyData.length; i += 7) {
        const weekSum = dailyData.slice(i, i + 7).reduce((a, b) => a + b, 0);
        weeklyData.push(weekSum);
      }
      return weeklyData;
    },
    renderChart(labels, chartData) {
      const ctx = document.getElementById('bullyingChart').getContext('2d');
      if (this.chart) {
        this.chart.destroy(); // 確保圖表已被銷毀，避免重複渲染
      }
      this.chart = new Chart(ctx, {
        type: 'line',  // 折線圖
        data: {
          labels: labels,
          datasets: [
            {
              label: '每周霸凌事件數量',
              data: chartData,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '本月每周霸凌事件數量統計',
              font: {
                size: 24 // 標題字體大小
              }
            },
            legend: {
              labels: {
                font: {
                  size: 18 // 圖例字體大小
                }
              }
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: '周數',
                font: {
                  size: 18 // x軸標題字體大小
                }
              },
              ticks: {
                font: {
                  size: 16 // x軸標籤字體大小
                }
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: '霸凌數量',
                font: {
                  size: 18 // y軸標題字體大小
                }
              },
              ticks: {
                font: {
                  size: 16 // y軸標籤字體大小
                }
              }
            },
          },
        },
      });
    },

    // 新增的圓餅圖方法
    async fetchStateChart() {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5280/api/Front/GetStateChart', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // 使用從 localStorage 中獲取的 token
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();

        const labels = data.Message.Labels;
        const chartData = data.Message.Datasets[0].Data;

        this.renderStateChart(labels, chartData);
      } catch (error) {
        console.error('Error fetching state chart data:', error);
      }
    },
    renderStateChart(labels, chartData) {
      const ctx = document.getElementById('stateChart').getContext('2d');
      if (this.stateChart) {
        this.stateChart.destroy(); // 確保圖表已被銷毀，避免重複渲染
      }
      this.stateChart = new Chart(ctx, {
        type: 'pie',  // 圓餅圖
        data: {
          labels: labels,
          datasets: [
            {
              data: chartData,
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)', // 綠色 - 安全
                'rgba(255, 206, 86, 0.6)',  // 黃色 - 警示
                'rgba(255, 99, 132, 0.6)'   // 紅色 - 危險
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '本校社群紅綠燈統計',
              font: {
                size: 24 // 圓餅圖標題字體大小
              }
            },
            legend: {
              display: true,
              position: 'bottom', // 標籤移到圖下方
              labels: {
                font: {
                  size: 18 // 圖例字體大小
                },
                color: '#000', // 標籤文字顏色
                generateLabels: (chart) => {
                  const data = chart.data;
                  return data.labels.map((label, i) => ({
                    text: `${label} (${data.datasets[0].data[i]})`,
                    fillStyle: data.datasets[0].backgroundColor[i]
                  }));
                }
              }
            }
          },
        },
      });
    }
  }
};





