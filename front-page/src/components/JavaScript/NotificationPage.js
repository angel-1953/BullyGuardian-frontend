export default {
  name: "NotificationPage",
  data() {
    return {
      isLoggedIn: false, // Track login status
      postUrl: "", // 存儲 Facebook 連結
      sourceType: "", // 存儲不當來源類型
      info: "" // 存儲補充說明
    };
  },
  mounted() {
    document.title = "校園凌制零-事件通報門";
    this.handleHeaderDisplay(); // Call handleHeaderDisplay when the page is loaded
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
        if (personalSection) personalSection.style.display = 'flex';
        console.log("已登入");
      } else {
        // 未登入
        this.isLoggedIn = false;
        if (loginRegisterSection) loginRegisterSection.style.display = 'flex';
        if (personalSection) personalSection.style.display = 'none';
        console.log("未登入");
      }
    },
    // 將 sourceType 轉換為後端接受的數字值
    mapSourceType() {
      switch (this.sourceType) {
        case "個人頁面":
          return 0;
        case "社團":
          return 1;
        case "粉絲專頁":
          return 2;
        default:
          return null;
      }
    },
    // 登出函數，清除 token 並更新 header 顯示狀態
    logout() {
      localStorage.removeItem('token'); // 清除 token
      this.isLoggedIn = false;
      this.handleHeaderDisplay(); // 更新 header
      console.log("已登出");
      this.$router.push('/login'); // Redirect to login page after logout
    },
    // 送出表單到 API
    submitForm() {
      const apiUrl = "http://localhost:5280/api/Front/AddScase";
      const token = localStorage.getItem("token"); // 從 localStorage 中取得 token

      const formData = new FormData();
      formData.append("PostUrl", this.postUrl);
      formData.append("Source", this.mapSourceType()); // 使用轉換後的 Source 值
      formData.append("Info", this.info);

      // 調試：列出 formData 的所有項目
      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }

      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token
        },
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          // 抓取伺服器的錯誤信息
          return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
      })
      .then(data => {
        if (data.Status === 200) {
          alert(data.Message || "事件通報成功！");
          // 清空表單欄位
          this.postUrl = "";
          this.sourceType = "";
          this.info = "";
        } else {
          alert("事件通報失敗：" + data.Message);
        }
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        alert("事件通報過程中發生錯誤：" + error.message);
      });
    }
  }
};
