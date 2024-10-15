export default {
  name: "RegisterPage",
  mounted() {
    document.title = "校園凌制零-註冊";
    this.fetchSchoolList();  // 加上這行以在組件掛載時載入學校列表
  },
  data() {
    return {
        form: {
            account: '',
            password: '',
            confirmPassword: '',
            name: '',
            school: '',
            SchoolId: '',
            email: ''
        },
        schoolList: [],  // 初始化為空陣列
        filteredSchools: []  // 初始化為空陣列
    };
  },
  methods: {
    async fetchSchoolList() {
        try {
            const response = await fetch('http://localhost:5280/api/Member/GetSchoolList');
            const data = await response.json();
            if (response.ok) {
                this.schoolList = data.Message;
            } else {
                console.error('學校列表載入失敗:', data.Message);
            }
        } catch (error) {
            console.error('載入學校列表時出錯:', error);
        }
    },
    filterSchools() {
        const searchTerm = this.form.school.toLowerCase();
        this.filteredSchools = this.schoolList.filter(school =>
            school.School1.toLowerCase().includes(searchTerm)
        );
    },
    selectSchool(school) {
        this.form.school = school.School1;
        this.form.SchoolId = school.SchoolId;
        this.filteredSchools = [];
    },
    async submitForm() {
        if (this.form.password !== this.form.confirmPassword) {
            alert('密碼和確認密碼不一致！');
            return;
        }

        const formData = new FormData();
        formData.append('Account', this.form.account);
        formData.append('Password', this.form.password);
        formData.append('PasswordCheck', this.form.confirmPassword);
        formData.append('Name', this.form.name);
        formData.append('SchoolId', this.form.SchoolId);
        formData.append('Email', this.form.email);

        try {
            const response = await fetch('http://localhost:5280/api/Member/Register', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.Message);
                this.$router.push('/login');
            } else {
                alert(`註冊失敗: ${result.Message}`);
            }
        } catch (error) {
            console.error('註冊過程中出現錯誤:', error);
            alert('註冊過程中出現錯誤，請稍後再試。');
        }
    }
  }
};
