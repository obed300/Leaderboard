const display = document.querySelector('.display');

export default class UI{
    static getScorefromStorage () {
        let store;
        if(localStorage.getItem('scores') === null){
            store = [];
        }else{
            store = JSON.parse(localStorage.getItem('scores'));
        }
        return store;
    }
    static addScore  (elements){
        const scoreList = UI.getScorefromStorage();
        scoreList.push(elements);
        localStorage.setItem('scores', JSON.stringify(scoreList));
    }
    static libraryScores  (element) {
        let nameScore = document.createElement('div');
        nameScore.classList.add('even');
        nameScore.innerHTML = `<div class='inputs'> ${element.name} : ${element.score}</div>`;
        display.appendChild(nameScore);
    }
    static displayScores () {
        const scoreList = UI.getScorefromStorage();
        scoreList.forEach(element => UI.libraryScores(element));
    }
}
