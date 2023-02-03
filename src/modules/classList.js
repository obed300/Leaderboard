export default class ScoresList {
  async addscore(names, scorevalue) {
    
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/U048O1pn604XSuQgI6WO/scores', {
      method: 'POST',
      body: JSON.stringify({
        user: names,
        score: scorevalue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await ((response) => response.json());
    await ((error) => error('Error:', error));
  }
}
