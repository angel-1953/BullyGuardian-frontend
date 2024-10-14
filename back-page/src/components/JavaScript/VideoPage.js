export default {
  name: "VideoPage",
  mounted() {
    document.title = "素養資料-影片";
    this.fetchVideoData(); // Fetch data when component is mounted
  },
  data() {
    return {
      data: [], // Holds the fetched video data
      showModal: false, // Controls modal visibility for adding new video
      showImageModal: false, // Controls modal visibility for image preview
      previewImgUrl: "", // Holds the image URL for preview
      newVideo: { VideoName: "", VideoLink1: "", ImgInnerUrl: "", LinkClick: 0 } // Initializes new video fields
    };
  },
  methods: {deleteVideo(videoId) {
    const apiUrl = `http://localhost:5280/api/Back/DeleteOneVideo?VideoId=${videoId}`;
    
    fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response => response.json())
    .then(result => {
      if (result.Status === 200) {
        alert(result.Message); // Display success message
        this.fetchVideoData(); // Refresh video list
      } else {
        alert("刪除失敗: " + result.Message); // Handle delete failure
      }
    })
    .catch(error => {
      console.error("Error deleting video:", error);
      alert("刪除影片過程中發生錯誤，請稍後再試。");
    });
  },
    // Fetch video data from the API
    fetchVideoData() {
      fetch("http://localhost:5280/api/Back/GetAllVideo", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.Status === 200) {
            this.data = data.Message;
          }
        })
        .catch(error => console.error("Error fetching video data:", error));
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.newVideo = { VideoName: "", VideoLink1: "", ImgInnerUrl: "", LinkClick: 0 }; // Reset the form fields
    },
    addNewVideo() {
      // Create a FormData object to handle file and text data
      const formData = new FormData();
      formData.append("VideoName", this.newVideo.VideoName);  // Add video name
      formData.append("VideoLink1", this.newVideo.VideoLink1); // Add video URL
      formData.append("VideoPhoto", this.$refs.videoImage.files[0]); // Add the image file

      // Send the POST request to the API to add a new video
      fetch("http://localhost:5280/api/Back/AddOneVideo", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token") // Add token to the request header
        },
        body: formData
      })
        .then(response => response.json())
        .then(result => {
          if (result.Status === 200) {
            alert(result.Message); // Show success message
            this.fetchVideoData();  // Refresh the video list after adding
            this.closeModal();      // Close the modal after success
          } else {
            alert("新增失敗: " + result.Message);  // Handle API error
          }
        })
        .catch(error => {
          console.error("Error adding new video:", error);
          alert("新增影片過程中發生錯誤，請稍後再試。");
        });
    },
    // Show the image preview modal
    previewImage(videoId) {
      const apiUrl = `http://localhost:5280/api/Back/${videoId}/GetVideoImg`; // Use video ID to get the image
    
      fetch(apiUrl, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token") // Add token to the request header
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch the image');
        }
        return response.blob();
      })
      .then(imageBlob => {
        this.previewImgUrl = URL.createObjectURL(imageBlob); // Convert the blob to an image URL
        this.showImageModal = true; // Show the modal with the image
      })
      .catch(error => {
        console.error("Error fetching image:", error);
        alert("封面圖片加載失敗，請稍後再試。");
      });
    },
    closeImageModal() {
      this.showImageModal = false;
      this.previewImgUrl = "";
    }
  },
  
};