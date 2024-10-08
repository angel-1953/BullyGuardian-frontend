export default {
    name: "RegisterPage",
    mounted() {
      document.title = "校園凌制零-註冊";
    },
    data() {
      return {
        form: {
          account: '',
          password: '',
          confirmPassword: '',
          email: '',
          name: '',
          school: '',
          photo: null
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
      },
      handleFileUpload(event) {
        this.form.photo = event.target.files[0];
        console.log("File uploaded", this.form.photo);
      }
    }
  };

