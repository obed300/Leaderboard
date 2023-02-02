import './style.css';
import Score from "./modules/class.js";
import UI from "./modules/func.js";

const form = document.querySelector('.form');
const nameinput = document.querySelector('.name-input');
const scoreinput = document.querySelector('.score-input');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = nameinput.value;
    let score = scoreinput.value;
    const scores = new Score(name,score);
    UI.libraryScores(scores);
    UI.addScore(scores);
});

refresh.addEventListener('click', (e) =>{
    e.preventDefault();
    UI.displayScores();
})

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    UI.displayScores();
});