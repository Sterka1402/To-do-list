import renderList from './renderlist';

function removeFromList(e, list, listContainer) {
  if ((e.target.classList.contains('remove-list')) && (e.target.tagName === 'IMG')) {
    const parentLi = e.target.closest('LI');
    const keyRemove = parentLi.dataset.key;
    const checkList = list[keyRemove].done;

    if (!checkList) return;
    list.splice(keyRemove, 1);
    localStorage.setItem('list', JSON.stringify(list));
    renderList(list, listContainer);
  }
}

export default removeFromList;
