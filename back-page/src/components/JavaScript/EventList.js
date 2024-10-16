export default {
  name: "EventList",
  mounted() {
      document.title = "事件檢視";
      this.fetchEvents();
  },
  data() {
      return {
        username: '',
        tableData: []  // 將資料初始化為空陣列
      };
  },
  methods: {
      fetchEvents() {
          const token = localStorage.getItem('token');
          fetch('http://localhost:5280/api/Back/ShowCase', {
              method: 'GET',
              headers: {
                  'Authorization': `Bearer ${token}`  // 將這裡的 YOUR_TOKEN_HERE 替換為實際的 Token
              }
          })
          .then(response => response.json())
          .then(data => {
              if (data.Status === 200) {
                  // 格式化資料結構，以便在表格中顯示
                  this.tableData = data.Message.map((event) => ({
                      caseId: event.BPId,
                      date: event.PostTime,
                      account: event.Bullyinger,
                      path: event.Posturl
                  }));
              } else {
                  console.error("API returned an error:", data);
              }
          })
          .catch(error => console.error("Error fetching data:", error));
      },
      viewDetails(row) {
          alert(`Viewing details for case: ${row.caseId}`);
      },
      notify(row) {
          alert(`Sending notification for case: ${row.caseId}`);
      },
      deleteCase(row) {
          alert(`Deleting case: ${row.caseId}`);
      }
  }
};
