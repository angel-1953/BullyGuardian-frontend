export default {
  name: "HistoryBully",
  data() {
    return {
      data: [], // 用於存儲 API 返回的數據
    };
  },
  methods: {
    // 呼叫 API 並更新數據
    fetchHistoryReports() {
      const token = localStorage.getItem("token"); // 假設 token 在 localStorage 中

      fetch("http://localhost:5280/api/Back/ShowScase", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // 傳入 token 進行驗證
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          if (result.Status === 200) {
            this.data = result.Message || []; // 更新表格數據
            console.log(this.data)
          } else {
            console.error("Failed to fetch history reports:", result);
          }
        })
        .catch((error) => {
          console.error("Error fetching history reports:", error);
        });
    },

    // 新增的狀態更改方法
    changeStatus(ScaseId) {
      const token = localStorage.getItem("token");

      fetch(`http://localhost:5280/api/Back/ChageOneScase?scaseId=${ScaseId}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          if (result.Status === 200) {
            alert(result.Message); // 顯示成功訊息
            this.fetchHistoryReports(); // 重新載入資料
          } else {
            console.error("Failed to change status:", result);
          }
        })
        .catch((error) => {
          console.error("Error changing status:", error);
        });
    },

    // 格式化日期
    formatDate(date) {
      if (!date) return "無資料";
      const formattedDate = new Date(date).toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      return formattedDate;
    },

    // 映射來源類型
    mapSourceType(source) {
      const sourceMapping = {
        0: "個人頁面",
        1: "社團",
        2: "粉絲專頁",
      };
      return sourceMapping[source] || "未知來源";
    },

    // 映射狀態
    mapState(state) {
      const stateMapping = {
        0: "待處理",
        1: "已處理",
        2: "無效",
      };
      return stateMapping[state] || "未知狀態";
    },
  },
  mounted() {
    document.title = "歷史通報";
    this.fetchHistoryReports(); // 初始化時獲取數據
  },
};
