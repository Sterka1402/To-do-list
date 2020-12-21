import addToListEnter from './add-tolist-enter';
import addToList from './add-tolist';
import removeFromList from './remove-fromlist';
import toggleDone from './toggle-done';
import renderDay from './render-day';
import countActiveTask from './count-active-task';

window.addEventListener('load', () => {
  const listContainer = document.querySelector('.list-container');
  const list = JSON.parse(localStorage.getItem('list')) || [];
  const addTask = document.getElementById('new-task');
  const addBtn = document.getElementById('add-btn');

  renderDay();
  countActiveTask(list, listContainer);

  addTask.addEventListener('keydown', (e) => addToListEnter(e, list, listContainer, addTask));
  addBtn.addEventListener('click', (e) => addToList(e, list, listContainer, addTask));
  listContainer.addEventListener('click', (e) => removeFromList(e, list, listContainer));
  listContainer.addEventListener('click', (e) => toggleDone(e, list, listContainer));
});
