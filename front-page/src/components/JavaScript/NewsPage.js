export default {
    name: "NewsPage",
    mounted() {
      document.title = "校園凌制零-資訊導航室";
    },

    data() {
      return {
        tableData: [
          { id: 1, name:'教育部防制校園霸凌專區 ' , path: 'https://bully.moe.edu.tw/index'},
          { id: 2, name:'中小學資訊素養與認知網 ' , path: 'https://myppt.cc/zNlnaA'},
          { id: 3, name:'教育部資訊及科技教育司 ' , path: 'https://depart.moe.edu.tw/ED2700/Default.aspx'},
          { id: 4, name:'兒福聯盟 ' , path: 'https://www.children.org.tw/'},
          { id: 5, name:'iWIN網路內容防護機構 ' , path: 'https://i.win.org.tw/propaganda.php?'},
          { id: 6, name:'兒童權利公約(CRC)資訊網 ' , path: 'https://crc.sfaa.gov.tw/'},
        ]
      };
    }
  };