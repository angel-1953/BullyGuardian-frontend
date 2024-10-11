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
      filteredStatus: null,
      selectedStatus: null,
    };
  },
  computed: {
    filteredTableData() {
      if (!this.filteredStatus) {
        return this.tableData;
      }
      return this.tableData.filter((row) => row.status === this.filteredStatus);
    },
  },
  methods: {
    filterByStatus(status) {
      this.filteredStatus = status;
      this.selectedStatus = status; // 同步更新selectedStatus
    },
  },
};
