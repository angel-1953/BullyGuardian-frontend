export default {
    name: "PostPage",
    data() {
        return {
            postDetails: {
                author: '',
                postTime: '',
                content: '',
                url: '',
                keywords: []
            }
        };
    },
    mounted() {
        document.title = "事件詳細頁";
        const id = this.$route.params.id; // 從路由參數中獲取 account
        console.log("收到ID:", id);  // 確認是否正確抓到 id
        this.fetchPostDetails(id);  // 當頁面掛載後抓取問題資料
    },
    methods: {
        fetchPostDetails(id) {
            const payload = id;
            console.log(payload);
            const token = localStorage.getItem('token');
            fetch(`http://localhost:5280/api/Back/ShowCaseDetail?BPId=${payload}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.Status === 200) {
                    // 使用 API 返回的數據填充 postDetails
                    this.postDetails = {
                        author: data.Message.Bullyinger,
                        postTime: data.Message.PostTime,
                        content: data.Message.PostInfo,
                        url: data.Message.Posturl,
                        keywords: [data.Message.KeyWord]
                    };
                } else {
                    console.error("API returned an error:", data);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
        }
    }
};
