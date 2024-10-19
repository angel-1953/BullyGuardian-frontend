export default {
  props: ['id'], 
  data() {
    return {
      questions: []  // Used to store the fetched question data
    };
  },
  methods: {
    // Fetch the question list from the API
    async fetchQuestions() {
      const token = localStorage.getItem('token');  // Get the token
      const id = this.$route.params.id;  // Get the record ID from the URL params
      console.log(id);

      try {
        const payload = { id: 9 };  // Payload to send (with a hardcoded ID for now)
        console.log("Sending answer record ID:", payload);

        const response = await fetch('http://localhost:5280/api/front/GetOneRecord', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(9)
        });

        if (!response.ok) throw new Error('API request failed');

        const data = await response.json();
        console.log("Received data:", data);
        
        if (data.Status === 200) {
          this.questions = data.Message;  // Store the question data in the 'questions' array
        } else {
          alert('Failed to fetch data');
        }
      } catch (error) {
        console.error('API request error', error);
      }
    }
  },
  mounted() {
    this.fetchQuestions();  // Fetch questions immediately after the component is mounted
  }
};