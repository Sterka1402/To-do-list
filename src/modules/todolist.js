import addToListEnter from './add-tolist-enter';
import addToList from './add-tolist';
import removeFromList from './remove-fromlist';
import toggleDone from './toggle-done';
import showGreeting from './show-greeting';
import renderList from './render-list';
import countActiveTasks from './count-active-tasks';
import { getList } from './request-list';

window.addEventListener('load', async () => {
  const listContainer = document.querySelector('.list-container');
  const addTask = document.getElementById('new-task');
  const addBtn = document.getElementById('add-btn');
  const listUrl = 'http://localhost:3000/lists';
  const list = await getList(listUrl) || [];

  showGreeting();
  countActiveTasks(list);
  renderList(list, listContainer);

  addTask.addEventListener('keydown', (e) => addToListEnter(e, listContainer, addTask, listUrl));
  addBtn.addEventListener('click', () => addToList(listContainer, addTask, listUrl));
  listContainer.addEventListener('click', (e) => removeFromList(e, listContainer, listUrl));
  listContainer.addEventListener('click', (e) => toggleDone(e, listContainer, listUrl));
});
