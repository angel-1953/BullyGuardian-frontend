export default {
  name: "VideoPage",
  data() {
    return {
      videos: [] // 空陣列，將透過API填入資料
    };
  },
  mounted() {
    document.title = "校園凌制零-影片欣賞";
    this.fetchVideos(); // 組件載入時呼叫此方法來獲取影片資料
  },
  methods: {
    // Fetch the video list from the API
    async fetchVideos() {
      const token = localStorage.getItem('token');
      const apiUrl = 'http://localhost:5280/api/Front/GetVideoList'; // 影片的API URL

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          this.videos = data.Message;
          
          // Fetch video images
          this.videos.forEach((video, index) => {
            this.fetchImage(video.ImgInnerUrl, index);
          });
        } else {
          console.error('獲取影片列表失敗:', response.statusText);
        }
      } catch (error) {
        console.error('獲取影片列表時發生錯誤:', error);
      }
    },
    // Fetch image for the videos
    async fetchImage(relativeUrl, index) {
      const token = localStorage.getItem('token');
      const apiUrl = `http://localhost:5280${relativeUrl}`;
    
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          this.videos[index].imgSrc = imageUrl;
        } else {
          console.error('獲取圖片失敗:', response.statusText);
        }
      } catch (error) {
        console.error('獲取圖片時發生錯誤:', error);
      }
    },
    // Handle video click and trigger API
    async handleVideoClick(videoId, videoLink) {
      const apiUrl = `http://localhost:5280/api/Front/AddVideoClick?VideoId=${videoId}`;
      const token = localStorage.getItem('token');

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          console.log('點擊次數增加成功');
        } else {
          console.error('增加點擊次數失敗:', response.statusText);
        }
      } catch (error) {
        console.error('增加點擊次數時發生錯誤:', error);
      }

      // Open video link in new tab
      window.open(videoLink, '_blank');
    }
  }
};