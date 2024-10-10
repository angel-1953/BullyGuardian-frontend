export default {
    name: "PersonalPage",
    mounted() {
      document.title = "個人中心";
    },
    data() {
      return {
        account: 'ABCD1234',
        password: '',
        confirmPassword: '',
        email: 'ABCD1234@gmail.com',
        name: '魯小維',
        school: '國立臺中科技大學',
        grade: '高一-3',
        studentId: 's19538080',
        passwordError: ''
      };
    },
    methods: {
      checkPassword() {
        if (this.password && this.confirmPassword) {
          if (this.password !== this.confirmPassword) {
            this.passwordError = '密碼不一致';
          } else {
            this.passwordError = '';
          }
        }
      }
    }
  };