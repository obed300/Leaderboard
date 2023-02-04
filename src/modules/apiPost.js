export default class ScoresList {
  async addscore(names, scorevalue) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IUX7ndzEFXzLQ55FD6W4/scores', {
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