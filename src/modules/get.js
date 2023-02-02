export default async function getData() {
    try {
      const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/U048O1pn604XSuQgI6WO/scores/';
      const response = await fetch(requestURL);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  