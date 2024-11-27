export default {
  name: "NetworkInfo",
  mounted() {
    document.title = "網路資訊";
    this.fetchData(); // 網頁載入時請求 API
  },
  data() {
    return {
      data: [], // 存放 API 返回的資料
    };
  },
  methods: {
    fetchData() {
      const token = localStorage.getItem("token"); // 從 localStorage 取出 token
      fetch("http://localhost:5280/api/Back/GetExtLink", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 加上身份驗證的 Bearer Token
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.Message) {
            // 處理 LinkTime 格式，移除時分秒
            this.data = data.Message.map((item) => ({
              ...item,
              LinkTime: item.LinkTime.split("T")[0], // 僅保留日期部分
            }));
          } else {
            console.error("無法取得資料");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
