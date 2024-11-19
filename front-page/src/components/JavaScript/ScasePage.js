export default {
  name: "scasePage",
  data() {
    return {
      tableData: [] // 儲存 API 回傳的事件紀錄
    };
  },
  mounted() {
    document.title = "個人中心-歷史通報紀錄";
    this.fetchScaseData(); // 加載頁面時請求 API
  },
  methods: {
    async fetchScaseData() {
      const token = localStorage.getItem("token"); // 假設 token 已存於 localStorage
      if (!token) {
        console.error("缺少 Token，請先登入。");
        return;
      }

      try {
        const response = await fetch("http://localhost:5280/api/Back/ShowScase", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data.Status === 200) {
            this.tableData = data.Message; // 將 API 回傳的資料賦值給 tableData
          } else {
            console.error("無法取得資料:", data.Message);
          }
        } else {
          console.error("伺服器回傳錯誤");
        }
      } catch (error) {
        console.error("請求失敗", error);
      }
    },
    // 格式化日期
    formatDate(dateString) {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      return new Date(dateString).toLocaleString('zh-TW', options);
    }
    ,
    // 映射不當來源類型
    mapSourceType(source) {
      switch (source) {
        case 0: return "個人頁面";
        case 1: return "社團";
        case 2: return "粉絲專頁";
        default: return "未知";
      }
    },
    // 映射處理狀態
    mapState(state) {
      return state === 1 ? "已處理" : "未處理";
    }
  }
};