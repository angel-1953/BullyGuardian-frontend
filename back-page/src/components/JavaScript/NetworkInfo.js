export default {
    name: "NetworkInfo",
    mounted() {
      document.title = "網路資訊";
    },
    data() {
      return {
        data: [
          { id: 1, NetName:'NetName ' , NetURL: 'NetURL', NetDate:'NetDate'},
          { id: 2, NetName:'教育部防制校園霸凌專區 ' , NetURL: 'https://bully.moe.edu.tw/index', NetDate:'2024/10/10'}
        ]
      };
    }
  };