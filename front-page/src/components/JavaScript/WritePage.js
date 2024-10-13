export default {
  name: "WritePage",
  data() {
    return {
      questions: [],  // 問題清單初始化為空
      answers: {},     // 保存每個問題的答案
      isLoggedIn: false, // Track login status
    };
  },
  mounted() {
    document.title = "校園凌制零-測驗";
    this.handleHeaderDisplay();  // 呼叫方法來處理 header 顯示
    this.fetchQuestions();  // 呼叫方法來取得問題
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
      this.handleHeaderDisplay(); // 更新 header
      console.log("已登出");
      this.$router.push('/login'); // Redirect to login page after logout
    },
    // 取得問題清單
    async fetchQuestions() {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5280/api/front/GetQuestion', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // 將 token 放入 Authorization header 中
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('API 請求失敗');
        }

        const data = await response.json();

        if (data.Status === 200) {
          this.questions = data.Message; // 將問題資料儲存到 questions 中
        } else {
          alert('無法取得問卷資料');
        }
      } catch (error) {
        console.error('API 請求失敗', error);
      }
    },
    // 提交答案
    async submit() {
      const token = localStorage.getItem('token');
      const payload = this.questions.map((question, index) => ({
        QuestionId: question.Id, // 每個問題的唯一 ID
        UserAnswer: this.answers[index], // 每個問題的答案
      }));

      try {
        const response = await fetch('http://localhost:5280/api/front/AnsQuestion', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`, // 將 token 放入 Authorization header 中
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload), // 將答案轉成 JSON 字串發送
        });

        const result = await response.json();

        if (result.Status === 200) {
          alert(result.Message); // 顯示後端傳回的 Message
        } else {
          alert('提交失敗，請重試');
        }
      } catch (error) {
        console.error('提交問卷失敗', error);
        alert('提交失敗，請檢查網絡或稍後再試');
      }
    },
  },
};