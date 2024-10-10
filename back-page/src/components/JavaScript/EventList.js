export default {
    name: "EventList",
    mounted() {
      document.title = "事件檢視";
    },
    data() {
      return {
        tableData: [
          { caseId: 'A19530001', date: '113/09/10', account:'曾小凌' ,path:'https://www.facebook.com/TaichungTech/' },
          { caseId: 'A19530001', date: '113/09/10', account:'曾小凌' ,path:'https://www.facebook.com/TaichungTech/' },

        ],
      };
    },
    methods: {
      viewDetails(row) {
        alert(`Viewing details for case: ${row.caseId}`);
      },
      notify(row) {
        alert(`Sending notification for case: ${row.caseId}`);
      },
      deleteCase(row) {
        alert(`Deleting case: ${row.caseId}`);
      },
    },
  };