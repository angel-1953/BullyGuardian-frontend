export default {
    name: "ContentBook",
    mounted() {
      document.title = "校園凌制零-指定書籍";
    },

    data() {
      return {
        tableData: [
          { id: 1, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 2, book:'情緒解鎖： ' , writer: '馬克．布雷克特' , date: '2020/04/01'  },
          { id: 3, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 4, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 5, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 6, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 7, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 8, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 9, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 10, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  }
        ]
      };
    }
  };