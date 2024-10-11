export default {
  name: "ResourcePage",
  mounted() {
    document.title = "素養資料";
  },
  data() {
    return {
      data: [
        { id: 1, BookName: '書名1', BookAuthor: '作者1', BookYear: 2020 },
        { id: 2, BookName: '書名2', BookAuthor: '作者2', BookYear: 1999 }
      ],
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
    addNewBook() {
      // 將新書加入到資料列表中
      if (this.newBook.BookName && this.newBook.BookAuthor && this.newBook.BookYear) {
        this.data.push({
          id: this.data.length + 1,
          BookName: this.newBook.BookName,
          BookAuthor: this.newBook.BookAuthor,
          BookYear: this.newBook.BookYear
        });
        this.closeModal(); // 新增後關閉彈跳視窗
      }
    }
  }
};
