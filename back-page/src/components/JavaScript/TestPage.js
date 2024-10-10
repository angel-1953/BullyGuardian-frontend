export default {
    name: "TestPage",
    mounted() {
      document.title = "素養資料-題庫";
    },
    data() {
      return {
        data: [
          { id: 1, TestQuestion:'TestQuestion' , TsetAnswer:'TsetAnswer'},
          { id: 1, TestQuestion:'題目' , TsetAnswer:'答案'},
        ]
      };
    }
  };