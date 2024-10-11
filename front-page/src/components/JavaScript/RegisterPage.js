export default {
  name: "RegisterPage",
  data() {
    return {
      formData: {
        Account: "",
        Password: "",
        PasswordCheck: "",
        Name: "",
        Email: "",
        School: "",
        Class: "",
        StudentId: "",
        FBurl: ""
      },
      errorMsg: "",
      successMsg: ""
    };
  },
  methods: {
    async registerMember() {
      // 表單資料校驗
      if (this.formData.Password !== this.formData.PasswordCheck) {
        this.errorMsg = "密碼與密碼確認不一致";
        return;
      }

      // 構建 FormData
      const data = new FormData();
      data.append("IsTeacher", "0"); // 假設註冊者為學生
      data.append("Account", this.formData.Account);
      data.append("Password", this.formData.Password);
      data.append("PasswordCheck", this.formData.PasswordCheck);
      data.append("Name", this.formData.Name);
      data.append("Email", this.formData.Email);
      data.append("SchoolId", this.formData.School); // 需要替換為學校ID
      data.append("Class", this.formData.Class);
      data.append("StudentId", this.formData.StudentId);
      data.append("FBurl", this.formData.FBurl);

      try {
        const response = await fetch('http://localhost:5280/api/Member/Register', {
          method: 'POST',
          body: data,
        });

        const result = await response.json();
        if (response.status === 200 && result.Status === 200) {
          this.successMsg = result.Message || "註冊成功！";
          this.errorMsg = "";
        } else {
          this.errorMsg = result.Message || "註冊失敗，請重試。";
        }
      } catch (error) {
        this.errorMsg = "系統發生錯誤，請稍後再試。";
      }
    }
  },
  mounted() {
    document.title = "校園凌制零-註冊";
  }
};
