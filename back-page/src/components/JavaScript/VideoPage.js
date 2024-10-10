export default {
    name: "VideoPage",
    mounted() {
      document.title = "素養資料-影片";
    },
    data() {
      return {
        data: [
          { id: 1, VideoName:'VideoName' , VideoURL:'VideoURL', VideoTimes:'VideoTimes'},
        ]
      };
    }
  };