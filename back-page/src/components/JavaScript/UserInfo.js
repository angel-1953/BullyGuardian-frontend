export default {
  name: "UserInfo",
  mounted() {
    document.title = "使用者資訊";
  },
  data() {
    return {
      tableData: [
        { Id: '1', UserName: '曾小凌', UserSchool:'00國中', UserClass: '國一5', status: '危險' },
        { Id: '2', UserName: '李明', UserSchool:'00國中',UserClass: '國一5', status: '安全' },
        { Id: '3', UserName: '王小華', UserSchool:'00國中',UserClass: '國一5', status: '警示' },
        { Id: '4', UserName: '張三', UserSchool:'00國中',UserClass: '國一5', status: '危險' },
        { Id: '5', UserName: '李四', UserSchool:'00國中',UserClass: '國一5', status: '安全' },
      ],
      filteredStatus: null, // 追蹤當前篩選的狀態
    };
  },
  computed: {
    filteredTableData() {
      if (!this.filteredStatus) {
        return this.tableData; // 若沒有篩選狀態，顯示所有資料
      }
      return this.tableData.filter((row) => row.status === this.filteredStatus); // 根據狀態篩選資料
    },
  },
  methods: {
    filterByStatus(status) {
      this.filteredStatus = status; // 更新篩選狀態
    },
  },
};
