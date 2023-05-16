import './style.scss';
import addScore from './modules/addScore.js';

const submit = document.getElementById('add');
const insertedName = document.getElementById('name');
const insertedScore = document.getElementById('number');
const parentList = document.getElementById('parent-list');
const form = document.getElementById('form');

let scoreBoard = [];

const renderScore = () => {
  parentList.innerHTML = '';
  scoreBoard.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <li>${item.name} ➡️ ${item.score} ${' '} ✔️</li></br>
    `;
    parentList.appendChild(li);
  });
};

renderScore();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  scoreBoard = addScore(insertedName.value, insertedScore.value, scoreBoard);
  renderScore();
  form.reset();
});
