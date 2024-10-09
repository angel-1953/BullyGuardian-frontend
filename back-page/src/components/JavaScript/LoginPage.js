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
      submitForm() {
        // Check if passwords match
        if (this.form.password !== this.form.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        // Submit form logic
        console.log("Form submitted", this.form);
      }
    }
  };