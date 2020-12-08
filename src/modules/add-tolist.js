import renderList from './renderlist';

function addToList(e, list, userList, addTask) {
  if (addTask.value !== '') {
    const text = addTask.value;
    const item = {
      text,
      done: false,
    };
    list.push(item);
    renderList(list, userList);
    addTask.value = '';
  }
}

export default addToList;
