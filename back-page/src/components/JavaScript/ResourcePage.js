export default {
    name: "ResourcePage",
    mounted() {
      document.title = "素養資料";
    },
    data() {
      return {
        data: [
          { id: 1, name:'書名' , author:'作者', year:'2000'},
          { id: 2, name:'書名2' , author:'作者2', year:'1999'},
        ]
      };
    }
  };