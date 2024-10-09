export default {
    name: "BookPage",
    mounted() {
      document.title = "校園凌制零-好書推薦";
    },

    data() {
      return {
        tableData: [
          { id: 1, book:'改變情緒的姿勢： ' , writer: '楠戶太臣' , date: '2020/02/04'  },
          { id: 2, book:'情緒解鎖： ' , writer: '馬克．布雷克特' , date: '2020/04/01'  },
          { id: 3, book:'好好鬧情緒： ' , writer: '竹慶本樂仁波切' , date: '2023/06/28'  },
          { id: 4, book:'壓力與情緒管理自助手冊 ' , writer: '邱美華' , date: '2020/02/06'  },
          { id: 5, book:'整理情緒背包 ' , writer: '薇薇安‧狄特瑪 ' , date: '2020/02/25'  },
          { id: 6, book:'好好生氣，不懊悔的技術：' , writer: '安藤俊介' , date: '2021/10/27'  },
          { id: 7, book:'怨念的毒情緒 使你傷更重： ' , writer: '杉山崇 ' , date: '2022/01/05'  },
          { id: 8, book:'告別隱形傷痕：' , writer: '孫廷沇' , date: '2023/07/28'  },
          { id: 9, book:'親愛的, 那不是你的錯：' , writer: '瑪麗安．羅哈斯' , date: '2023/03/10'  },
          { id: 10, book:'情緒平復練習：' , writer: '賽斯．吉爾罕' , date: '2021/03/12'  }
        ]
      };
    }
  };