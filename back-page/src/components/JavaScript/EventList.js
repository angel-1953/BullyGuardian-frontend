export default {
    name: "EventList",
    mounted() {
      document.title = "事件檢視";
    },
    data() {
      return {
        tableData: [
          { caseId: 'A19530001', bullySource: '人工鑑證', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530002', bullySource: '系統爬蟲', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530003', bullySource: '系統分類', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530004', bullySource: '系統爬蟲', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530005', bullySource: '系統爬蟲', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530006', bullySource: '系統分類', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530007', bullySource: '系統爬蟲', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530008', bullySource: '系統爬蟲', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530009', bullySource: '系統爬蟲', handler: 'XXX', handleDate: '113/09/10' },
          { caseId: 'A19530010', bullySource: '系統爬蟲', handler: 'XXX', handleDate: '113/09/10' },
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