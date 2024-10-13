export default {
  name: "VideoPage",
  data() {
    return {
      videos: [], // 空陣列，將透過API填入資料
      isLoggedIn: false, // Track login status
    };
  },
  mounted() {
    document.title = "校園凌制零-影片欣賞";
    this.handleHeaderDisplay();  // Call handleHeaderDisplay when the page is loaded
    this.fetchVideos(); // 組件載入時呼叫此方法來獲取影片資料
  },
  methods: {
    // 判斷是否有 token，並根據狀態動態切換 header
    handleHeaderDisplay() {
      const token = localStorage.getItem('token'); // 從 localStorage 中抓取 token
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');

      if (token) {
        // 已登入
        this.isLoggedIn = true;
        if (loginRegisterSection) loginRegisterSection.style.display = 'none';
        if (personalSection) personalSection.style.display = 'block';
        console.log("已登入");
      } else {
        // 未登入
        this.isLoggedIn = false;
        if (loginRegisterSection) loginRegisterSection.style.display = 'block';
        if (personalSection) personalSection.style.display = 'none';
        console.log("未登入");
      }
    },
    // 登出函數，清除 token 並更新 header 顯示狀態
    logout() {
      localStorage.removeItem('token'); // 清除 token
      this.isLoggedIn = false;
      this.handleHeaderDisplay(); // 更新 header
      console.log("已登出");
      this.$router.push('/login'); // Redirect to login page after logout
    },
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