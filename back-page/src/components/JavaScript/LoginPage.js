export default {
  name: "LoginPage",
  mounted() {
    document.title = "校園凌制零-登入";
  },
  data() {
    return {
      form: {
        account: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        // 發送 API 請求
        const response = await fetch('http://localhost:5280/api/Member/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Account: this.form.account,
            Password: this.form.password
          })
        });

        // 解析返回結果
        const result = await response.json();
        
        if (response.ok && result.Token) {
          // 登入成功
          alert('登入成功！');
          localStorage.setItem('token', result.Token);
          this.$router.push('/eventList'); // 導航至首頁或其他頁面
        } else {
          // 登入失敗，顯示錯誤訊息
          let errorMessage = result.Message || '登入失敗，請檢查您的帳號和密碼。';
          alert(`登入失敗: ${errorMessage}`);
        }
      } catch (error) {
        // 網路錯誤或其他異常
        alert('登入過程中出現錯誤，請稍後再試。');
        console.error(error);
      }
    }
  }
};