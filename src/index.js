import _ from 'lodash';
import './style.css';
import UI from './modules/func.js';
import Score from './modules/class.js';

const form = document.querySelector('.form');
const nameinput = document.querySelector('.name-input');
const scoreinput = document.querySelector('.score-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = nameinput.value;
    let score = scoreinput.value;
    const scores = new Score(name,score);
    UI.libraryScores(scores);
    UI.addScore(scores);
});

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    UI.displayScores();
});
