import './style.scss';
import sendScore from './modules/sendScore.js';

const submit = document.getElementById('add');
const insertedName = document.getElementById('name');
const insertedScore = document.getElementById('number');
const parentList = document.getElementById('parent-list');
const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

const api =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

const renderScore = async () => {
  parentList.innerHTML = '';
  await fetch(api)
    .then((response) => response.json())
    .then((json) => {
      const scoreBoard = json.result;

      scoreBoard.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
    ${item.user} ➡️ ${item.score} ${' '} ✔️</br>
    `;
        parentList.appendChild(li);
      });
    });
};

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  renderScore();
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  sendScore(api, insertedName.value, insertedScore.value);
  renderScore();
  form.reset();
});
renderScore();
