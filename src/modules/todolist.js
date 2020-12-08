import renderList from './renderlist';
import addToList from './add-tolist';
import removeFromList from './remove-fromlist';
import toggleDone from './toggle-done';

window.addEventListener('load', () => {
  const userList = document.querySelector('.user-list');
  const addBtn = document.getElementById('add-btn');
  const list = [{ text: 'Blalala', done: false }, { text: 'bla2', done: false }];
  const addTask = document.getElementById('new-task');

  renderList(list, userList);
  addBtn.addEventListener('click', (e) => addToList(e, list, userList, addTask));
  userList.addEventListener('click', (e) => removeFromList(e, list, userList));
  userList.addEventListener('click', (e) => toggleDone(e, list, userList));
});
