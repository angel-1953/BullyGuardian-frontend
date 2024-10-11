export default {
  name: "VideoPage",
  mounted() {
    document.title = "素養資料-影片";
  },
  data() {
    return {
      data: [
        { id: 1, VideoName: 'VideoName', VideoURL: 'VideoURL', VideoTimes: 'VideoTimes' }
      ],
      showModal: false, // 控制彈跳視窗顯示的布林值
      newVideo: { VideoName: '', VideoURL: '', VideoTimes: '' } // 新影片的初始化
    };
  },
  methods: {
    openModal() {
      this.showModal = true; // 開啟彈跳視窗
    },
    closeModal() {
      this.showModal = false; // 關閉彈跳視窗
      this.newVideo = { VideoName: '', VideoURL: '', VideoTimes: '' }; // 重置表單欄位
    },
    addNewVideo() {
      // 新增影片到資料中
      this.data.push({ ...this.newVideo });
      this.closeModal(); // 新增後關閉彈跳視窗
    }
  }
};
