export default {
  name: "ResourcePage",
  mounted() {
    document.title = "素養資料";
    this.fetchBooks(); // 請求 API 來獲取書籍資料
  },
  data() {
    return {
      data: [],
      showModal: false, // 控制彈跳視窗顯示與否
      newBook: {
        BookName: '',
        BookAuthor: '',
        BookYear: ''
      }
    };
  },
  methods: {
    openModal() {
      this.showModal = true; // Open the modal
    },
    closeModal() {
      this.showModal = false; // Close the modal
      this.newBook = { BookName: '', BookAuthor: '', BookYear: '' }; // Reset input fields
    },
    fetchBooks() {
      const token = localStorage.getItem('token'); // Read token from localStorage
  
      // Use fetch API to make a GET request
      fetch('http://localhost:5280/api/Back/GetBooks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  // Use token from localStorage
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);  // Handle non-2xx responses
        }
        return response.json();
      })
      .then(data => {
        if (data.Status === 200) {
          this.data = data.Message; // Store the books data
        } else {
          console.error('API returned an error:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
    },
    
    addNewBook() {
      const token = localStorage.getItem('token'); // Get token from localStorage
    
      if (this.newBook.BookName && this.newBook.BookAuthor && this.newBook.PublicDate) {
        // 先將輸入的日期轉換為 JavaScript Date 對象
        const formattedDate = new Date(this.newBook.PublicDate).toISOString().split('T')[0]; // 格式化為 YYYY-MM-DD
    
        // 構建發送給後端的書籍資料
        const bookData = {
          BookName: this.newBook.BookName,
          Author: this.newBook.BookAuthor,
          PublicDate: formattedDate // 傳遞格式化後的日期
        };
    
        fetch('http://localhost:5280/api/Back/UploadBooks', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (data.Status === 200) {
            this.data.push(bookData);
            this.closeModal();
          } else {
            console.error('Error uploading book:', data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    },
    
    
    
    deleteBook(BookId) {
      const token = localStorage.getItem('token'); // Get token from localStorage
  
      // Send a DELETE request to remove the book
      fetch(`http://localhost:5280/api/Back/DeleteOneBook?BookId=${BookId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,  // Include token in Authorization header
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.Status === 200) {
          // Remove the deleted book from the list
          this.data = this.data.filter(book => book.BookId !== BookId);
        } else {
          console.error('Error deleting book:', data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
  
};