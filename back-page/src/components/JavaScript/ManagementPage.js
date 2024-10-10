export default {
    name: "ManagementPage",
    mounted() {
      document.title = "社群管理";
    },
    data() {
      return {
        tableData: [
          { id: 1, name:'中科大' , path:'https://www.facebook.com/TaichungTech/'},
          { id: 1, name:'中科大' , path:'https://www.facebook.com/TaichungTech/'},
        ]
      };
    }
  };