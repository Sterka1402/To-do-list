import addToList from './add-tolist';

function addToListEnter(e, listContainer, addTask, listUrl) {
  if (e.keyCode === 13) {
    addToList(listContainer, addTask, listUrl);
  }
}

export default addToListEnter;
