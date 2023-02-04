import ScoresList from './apiPost.js';

export const score = new ScoresList();

const createScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IUX7ndzEFXzLQ55FD6W4/scores');
  const data = await response.json();
  const listSection = document.querySelector('.results');
  listSection.innerHTML = '';
  if (data.result.length > 0) {
    listSection.style.display = 'block';
    const listContainer = document.createElement('ul');
    listContainer.className = 'allscores';
    for (const scores of data.result) {
      const list = document.createElement('li');
      list.className = 'scoreItem';
      const descrpt = document.createElement('p');
      descrpt.textContent = `${scores.user}: ${scores.score}`;
      list.appendChild(descrpt);
      listContainer.append(list);
    }
    listSection.appendChild(listContainer);
  }
};


const refresh = document.getElementById('refresh');
refresh.addEventListener('click', createScore);

export default createScore;