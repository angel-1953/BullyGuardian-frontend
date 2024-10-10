export default {
  name: "ManagementPage",
  mounted() {
    document.title = "社群管理";  // 設定頁面標題
  },
  data() {
    return {
      tableData: [
        { ClubName: 'ClubName', ClubURL: 'ClubURL' },
        { ClubName: '社團二', ClubURL: 'https://www.facebook.com/group2' },
      ],
      showModal: false,  // 控制彈跳視窗的顯示狀態
      newEntry: {        // 用來儲存新增社團的資料
        name: '',
        path: ''
      }
    };
  },
  methods: {
    openModal() {
      this.showModal = true;  // 顯示彈跳視窗
    },
    closeModal() {
      this.showModal = false; // 關閉彈跳視窗
      this.newEntry = { name: '', path: '' }; // 重置輸入框的資料
    },
    addNewEntry() {
      if (this.newEntry.name && this.newEntry.path) {  // 確認輸入框有資料
        this.tableData.push({ ...this.newEntry });  // 添加新社團資料
        this.closeModal(); // 添加完畢後關閉彈跳視窗
      } else {
        alert("請填寫完整的社團名稱與Facebook連結");
      }
    },
    deleteRow(index) {
      this.tableData.splice(index, 1);  // 刪除對應行
    }
  }
};
