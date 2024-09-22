export default {
    name: "VideoPage",
    mounted() {
      document.title = "校園凌制零-影片欣賞";
    },

    data() {
      return {
        videos: [
          { id: 1, title: '70分女孩_ep6: 沒有人是100分的', views: 1000, image: '/path/to/image1.jpg' },
          { id: 2, title: '湖中女神的困擾', views: 1199, image: '/path/to/image2.jpg' },
          { id: 3, title: '為什麼大家都知道？', views: 376, image: '/path/to/image3.jpg' },
          { id: 4, title: '請登入聊天室', views: 580, image: '/path/to/image4.jpg' },
          { id: 5, title: '我的孩子怎麼了', views: 440, image: '/path/to/image5.jpg' },
          { id: 6, title: '被偷走的那些影像', views: 2577, image: '/path/to/image6.jpg' }
        ]
      };
    }

  };

