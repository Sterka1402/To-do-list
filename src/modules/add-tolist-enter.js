import addToList from './add-tolist';

function addToListEnter(e, list, listContainer, addTask) {
  if (e.keyCode === 13) {
    addToList(e, list, listContainer, addTask);
  }
}

export default addToListEnter;
