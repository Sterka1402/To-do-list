import addToList from './add-tolist';

function addToListEnter(e, list, userList, addTask) {
  if (e.keyCode === 13) {
    addToList(e, list, userList, addTask);
  }
}

export default addToListEnter;
