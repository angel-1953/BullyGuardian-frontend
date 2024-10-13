export default {
  name: "WritePage",
  data() {
    return {
      questions: [],  // 問題清單初始化為空
      answers: {}  // 保存每個問題的答案
    };
  },
  mounted() {
    document.title = "校園凌制零-測驗";
    this.fetchQuestions();  // 當元件掛載時，呼叫 API 取得問題
  },
  methods: {
    async fetchQuestions() {
      const token = localStorage.getItem('token');  // 假設 token 儲存在 localStorage
      try {
        const response = await fetch('http://localhost:5280/api/front/GetQuestion', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // 將 token 放入 Authorization header 中
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('API 請求失敗');
        }

        const data = await response.json();

        if (data.Status === 200) {
          this.questions = data.Message;  // 將問題資料儲存到 questions 中
        } else {
          alert('無法取得問卷資料');
        }
      } catch (error) {
        console.error('API 請求失敗', error);
      }
    },
    async submit() {
      const token = localStorage.getItem('token');  // 取得 token
      const payload = this.questions.map((question, index) => ({
        QuestionId: question.Id,  // 假設每個問題都有唯一的 Id
        UserAnswer: this.answers[index]  // 取得對應問題的答案
      }));
    
      try {
        const response = await fetch('http://localhost:5280/api/front/AnsQuestion', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,  // 將 token 放入 Authorization header 中
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)  // 將答案轉成 JSON 字串發送
        });
    
        const result = await response.json();
    
        if (result.Status === 200) {
          // 直接顯示後端傳回的 Message
          alert(result.Message);
        } else {
          alert('提交失敗，請重試');
        }
      } catch (error) {
        console.error('提交問卷失敗', error);
        alert('提交失敗，請檢查網絡或稍後再試');
      }
    }
    
  }
};