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
      this.showModal = true; // 打開彈跳視窗
    },
    closeModal() {
      this.showModal = false; // 關閉彈跳視窗
      this.newBook = { BookName: '', BookAuthor: '', BookYear: '' }; // 重置輸入欄位
    },
    fetchBooks() {
      const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token

      // 使用 fetch API 來進行 GET 請求
      fetch('http://localhost:5280/api/Back/GetBooks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  // 使用從 localStorage 中獲取的 token
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);  // 捕捉非 2xx 的回應
          }
          return response.json();
        })
        .then(data => {
          if (data.Status === 200) {
            this.data = data.Message; // 將 API 回傳的書籍資料存入 data
          } else {
            console.error('API returned an error:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    },
    addNewBook() {
      if (this.newBook.BookName && this.newBook.BookAuthor && this.newBook.BookYear) {
        this.data.push({
          BookName: this.newBook.BookName,
          Author: this.newBook.BookAuthor,
          PublicDate: `${this.newBook.BookYear}-01-01`
        });
        this.closeModal(); // 新增後關閉彈跳視窗
      }
    },
    deleteBook(BookId) {
      const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token

      // 發送 DELETE 請求刪除書籍
      fetch(`http://localhost:5280/api/Back/DeleteOneBook?BookId=${BookId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,  // 使用 token
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
            this.data = this.data.filter(book => book.BookId !== BookId); // 從列表中移除已刪除的書籍
          } else {
            console.error('API returned an error:', data);
          }
        })
        .catch(error => {
          console.error('Error deleting book:', error);
        });
    }
  }
};