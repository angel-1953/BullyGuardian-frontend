export default {
  name: "LoginPage",
  mounted() {
      document.title = "校園凌制零-登入";
  },
  methods: {
      async login(event) {
          event.preventDefault(); // Prevent form from submitting normally

          const account = event.target.username.value;
          const password = event.target.password.value;

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

              const result = await response.json();

              if (response.ok) {
                  alert(`登入成功！`);
                  // Save the token for further authenticated requests
                  localStorage.setItem('token', result.Token);

                  // Redirect to the homepage
                  this.$router.push('/home');
              } else {
                  alert(`登入失敗: ${result.Message}`);
              }
          } catch (error) {
              console.error('Error during login:', error);
              alert('登入過程中發生錯誤，請稍後再試。');
          }
      }
  }
};
