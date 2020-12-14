import renderList from './renderlist';
import renderDay from './render-day';

function addToList(e, list, userList, addTask) {
  if (addTask.value !== '') {
    const text = addTask.value;
    const item = {
      text,
      done: false,
    };
    list.push(item);
    localStorage.setItem('list', JSON.stringify(list));
    renderDay(userList);
    renderList(list, userList);
    addTask.value = '';
  }
}

export default addToList;
