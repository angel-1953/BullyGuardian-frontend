export default {
    name: "LoginPage",
    mounted() {
        document.title = "校園凌制零-登入";  // 設定登入頁面的標題
    },
    methods: {
        async login(event) {
            event.preventDefault();  // 防止表單的默認提交行為
  
            // 獲取帳號與密碼
            const account = event.target.username.value.trim();
            const password = event.target.password.value.trim();
  
            // 基本的前端驗證
            if (!account || !password) {
                alert('請輸入帳號和密碼');
                return;
            }
  
            try {
                const response = await fetch('http://localhost:5280/api/Member/Login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "Account": account,
                        "Password": password
                    })
                });
  
                const result = await response.json(); // 解析伺服器回應
  
                if (response.ok && result.Token) {
                    alert('登入成功！');
                    
                    // 保存 token 到 localStorage
                    localStorage.setItem('token', result.Token);
  
                    // 成功登入後，導向首頁
                    this.$router.push('/home');
                } else if (result.Message) {
                    alert(`登入失敗: ${result.Message}`);  // 顯示伺服器回傳的錯誤訊息
                } else {
                    alert('登入失敗，請檢查您的帳號和密碼。');
                }
            } catch (error) {
                console.error('登入過程中發生錯誤:', error);
                alert('登入過程中發生錯誤，請稍後再試。');
            }
        }
    }
  };
  