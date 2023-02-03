
 const postScore = async (user,score) => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/U048O1pn604XSuQgI6WO/scores/', {
        method: 'POST',
        body: JSON.stringify({
          user,
          score
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });
      const json = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
  
  export default postScore;