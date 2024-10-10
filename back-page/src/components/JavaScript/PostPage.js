export default {
    name: "PostPage",
    data() {
      return {
        postDetails: {
          author: '曾小凌',
          postTime: '2024-10-10 10:30',
          content: '像你這種沒用的垃圾，活在這世界上都是浪費空氣，誰看你都覺得噁心，趕快去死吧！',
          url: 'https://www.example.com/post/12345',
          keywords: ['垃圾', '噁心', '去死']
        }
      };
    },
    mounted() {
      document.title = "事件詳細頁";
    }
  };
  