import { Chart } from 'chart.js/auto';

export default {
  name: 'StatisticsPage',
  data() {
    return {
      chart: null,
      stateChart: null
    };
  },
  mounted() {
    document.title = "數據統計"; // 設置頁面標題
    this.fetchDataAndRenderChart(); // 繪製折線圖
    this.fetchStateChart(); // 繪製圓餅圖
  },
  methods: {
    async fetchDataAndRenderChart() {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5280/api/Back/GetBullyingPostChart', {
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
        const response = await fetch('http://localhost:5280/api/Back/GetStateChart', {
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
