import addToListEnter from './add-tolist-enter';
import addToList from './add-tolist';
import removeFromList from './remove-fromlist';
import toggleDone from './toggle-done';
import renderDay from './render-day';
import countActiveTask from './count-active-task';

window.addEventListener('load', () => {
  const listContainer = document.querySelector('.list-container');
  // const list = JSON.parse(localStorage.getItem('list')) || [];
  const addTask = document.getElementById('new-task');
  const addBtn = document.getElementById('add-btn');
  const listUrl = 'http://localhost:3000/posts';

  renderDay();
  countActiveTask(listContainer, listUrl);

  addTask.addEventListener('keydown', (e) => addToListEnter(e, listContainer, addTask, listUrl));
  addBtn.addEventListener('click', (e) => addToList(e, listContainer, addTask, listUrl));
  listContainer.addEventListener('click', (e) => removeFromList(e, listContainer, listUrl));
  listContainer.addEventListener('click', (e) => toggleDone(e, listContainer, listUrl));
});
