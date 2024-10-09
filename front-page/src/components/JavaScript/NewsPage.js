export default {
    name: "NewsPage",
    mounted() {
      document.title = "校園凌制零-資訊導航室";
    },

    data() {
      return {
        tableData: [
          { id: 1, name:'教育部防制校園霸凌專區 ' , path: 'https://bully.moe.edu.tw/index'},
          
        ]
      };
    }
  };