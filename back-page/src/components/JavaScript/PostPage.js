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
        this.fetchPostDetails();
    },
    methods: {
        fetchPostDetails() {
            const token = localStorage.getItem('token');
            fetch('http://localhost:5280/api/Back/ShowCaseDetail?BPId=0', {
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
