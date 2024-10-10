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
    },
    methods: {
        openModal() {
          this.showModal = true; // Open modal
        },
        closeModal() {
          this.showModal = false; // Close modal
          this.newBook = { BookName: '', BookAuthor: '', BookYear: '' }; // Reset form fields
        },
        addNewBook() {
          // Add the new book to the table data
          this.data.push({ ...this.newBook });
          this.closeModal(); // Close modal after adding
        }
      }
    };