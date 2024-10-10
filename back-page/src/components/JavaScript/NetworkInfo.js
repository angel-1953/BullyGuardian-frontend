export default {
    name: "NetworkInfo",
    mounted() {
      document.title = "網路資訊";
    },
    data() {
      return {
        data: [
          { id: 1, name:'教育部防制校園霸凌專區 ' , path: 'https://bully.moe.edu.tw/index', date:'2024/10/10'},
          { id: 2, name:'教育部防制校園霸凌專區 ' , path: 'https://bully.moe.edu.tw/index', date:'2024/10/10'}
        ]
      };
    }
  };