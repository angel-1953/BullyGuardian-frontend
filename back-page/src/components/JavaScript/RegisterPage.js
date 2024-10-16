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
        schoolList: [],
        filteredSchools: [] ,
        errorMsg: "",
        successMsg: ""

    };
  },
  methods: {
    async fetchSchoolList() {
        try {
            // 同時請求兩個 API，並使用 Promise.all 等待它們完成
            const [schoolResponse, midSchoolResponse] = await Promise.all([
                fetch('http://localhost:5280/api/Member/GetSchoolList'),
                fetch('http://localhost:5280/api/Member/GetMidSchoolList')
            ]);
    
            // 將兩個 API 的結果解析為 JSON
            const schoolData = await schoolResponse.json();
            const midSchoolData = await midSchoolResponse.json();
  
            // 檢查兩個 API 返回的狀態，並合併數據
            if (schoolData.Status === 200 && midSchoolData.Status === 200) {
                // 合併學校列表
                this.schoolList = [...schoolData.Message, ...midSchoolData.Message];
            } else {
                console.error('Failed to fetch school list:', schoolData.Message || midSchoolData.Message);
            }
            } catch (error) {
            console.error('Error fetching school list:', error);
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
  }
};
