import renderList from './renderlist';
import renderDay from './render-day';
import countActiveTask from './count-active-task';

function addToList(e, list, listContainer, addTask) {
  if (addTask.value !== '') {
    const text = addTask.value;
    const item = {
      text,
      done: false,
    };
    list.push(item);
    localStorage.setItem('list', JSON.stringify(list));
    
    countActiveTask(list, listContainer);
    addTask.value = '';
  }
}

export default addToList;
