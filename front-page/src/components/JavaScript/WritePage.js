export default {
  name: "WritePage",
  data() {
    return {
      questions: [], // 儲存問題資料
      answers: {},   // 使用者回答
      isLoggedIn: false,
    };
  },
  mounted() {
    document.title = "校園凌制零-測驗";
    this.handleHeaderDisplay();
    this.fetchQuestions();
  },
  methods: {
    handleHeaderDisplay() {
      const token = localStorage.getItem("token");
      const loginRegisterSection = document.querySelector(".login_register");
      const personalSection = document.querySelector(".personal");

      this.isLoggedIn = !!token; // 確認登入狀態

      if (this.isLoggedIn) {
        loginRegisterSection.style.display = "none";
        personalSection.style.display = "flex";
        console.log("已登入");
      } else {
        loginRegisterSection.style.display = "flex";
        personalSection.style.display = "none";
        console.log("未登入");
      }
    },
    async fetchQuestions() {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:5280/api/front/GetQuestion", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("取得問卷失敗");
        const data = await response.json();

        if (data.Status === 200) {
          this.questions = data.Message;
        } else {
          alert("無法取得問卷資料");
        }
      } catch (error) {
        console.error("取得問卷失敗:", error);
      }
    },
    async submit() {
      const token = localStorage.getItem("token");
      const payload = this.questions.map((question, index) => ({
        QuestionId: question.QuestionId,
        UserAnswer: this.answers[index] || "",
      }));

      try {
        const response = await fetch("http://localhost:5280/api/front/AnsQuestion", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("提交問卷失敗");
        const result = await response.json();

        if (result.Status === 200) {
          const userConfirmed = window.confirm(result.Message);
          if (userConfirmed) {
            this.$router.push("/test");
          }
        } else {
          alert("提交失敗，請重試");
        }
      } catch (error) {
        console.error("提交問卷失敗:", error);
        const retry = window.confirm("提交失敗，是否重試？");
        if (retry) {
          this.submit(); // 重新呼叫提交函數
        }
      }
    },
  },
};
