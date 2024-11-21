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
        BookYear: '',
        ISBN:''
      }
    };
  },
  methods: {
    openModal() {
      this.showModal = true; // Open the modal
    },
    closeModal() {
      this.showModal = false; // Close the modal
      this.newBook = { BookName: '', BookAuthor: '', BookYear: '' , ISBN: ''}; // Reset input fields
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
      const token = localStorage.getItem('token'); // 從 localStorage 獲取 token
    
      // 驗證必填字段是否完整
      if (this.newBook.BookName && this.newBook.BookAuthor && this.newBook.PublicDate && this.newBook.ISBN) {
        // 創建 FormData 對象
        const formData = new FormData();
        formData.append('BookName', this.newBook.BookName);
        formData.append('Author', this.newBook.BookAuthor);
        formData.append('PublicDate', this.newBook.PublicDate); // 保持原格式，後端應能處理 YYYY-MM-DD
        formData.append('ISBN', this.newBook.ISBN);
    
        // 發送 POST 請求
        fetch('http://localhost:5280/api/Back/UploadBooks', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}` // 不要設置 Content-Type，瀏覽器會自動添加正確的邊界
          },
          body: formData // 傳遞 FormData 對象
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (data.Status === 200) {
            this.data.push({ 
              BookName: this.newBook.BookName,
              Author: this.newBook.BookAuthor,
              PublicDate: this.newBook.PublicDate,
              ISBN: this.newBook.ISBN,
            });
            this.closeModal(); // 關閉模態框
          } else {
            console.error('Error uploading book:', data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      } else {
        console.error('Missing required fields');
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