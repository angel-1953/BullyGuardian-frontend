export default {
    name: "TestPage",
    mounted() {
      document.title = "校園凌制零-實力測驗";
    },

    data() {
      return {
        tableData: [
          { id: '01', questions: '10/13', date: '113/09/10' },
          { id: '02', questions: '10/13', date: '113/09/10' },
          { id: '03', questions: '10/13', date: '113/09/10' },
          { id: '04', questions: '10/13', date: '113/09/10' },
          { id: '05', questions: '10/13', date: '113/09/10' },
          { id: '06', questions: '10/13', date: '113/09/10' }
        ]
      };
    }
    
  };

