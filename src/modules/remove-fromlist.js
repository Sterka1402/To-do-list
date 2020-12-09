import renderList from './renderlist';

function removeFromList(e, list, userList) {
  if ((e.target.classList.contains('remove-list')) && (e.target.tagName === 'IMG')) {
    const parentLi = e.target.closest('LI');
    const keyRemove = parentLi.dataset.key;
    const checkList = list[keyRemove].done;

    if (!checkList) return;
    list.splice(keyRemove, 1);
    renderList(list, userList);
  }
}

export default removeFromList;
