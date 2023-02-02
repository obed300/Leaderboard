import postScore from "./post.js";
import getData from "./get.js";

const display = document.querySelector('.display');
export default class UI{
    static async getScorefromAPI () {
        try {
            const scores = await getData();
            return scores;
        } catch (error) {
            throw error;
        }
    }
    static async addScore  (user, score) {
        try {
            const addedScore = await postScore(user, score);
            return addedScore;
        } catch (error) {
            throw error;
        }
    }
    static libraryScores  (element) {
        let nameScore = document.createElement('div');
        nameScore.classList.add('even');
        nameScore.innerHTML = `<div class='inputs'> ${element.user} : ${element.score}</div>`;
        display.appendChild(nameScore);
    }
    static async displayScores () {
        try {
            const scores = await UI.getScorefromAPI();
            scores.forEach(element => UI.libraryScores(element));
        } catch (error) {
            throw error;
        }
    }
}
