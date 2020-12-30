import { getList, deleteList } from './request-list';
import renderList from './render-list';

const removeFromList = (e, listContainer, listUrl) => {
  if ((e.target.classList.contains('remove-list')) && (e.target.tagName === 'IMG')) {
    const parentLi = e.target.closest('LI');
    const keyRemove = parentLi.dataset.key;
    // list.splice(keyRemove, 1);
    let list = getList(listUrl) || [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(keyRemove)) {
        const checkList = list[i].done;
        if (!checkList) return;
      }
    }
    deleteList(listUrl, keyRemove);
    list = getList(listUrl);
    renderList(list, listContainer);
  }
};

export default removeFromList;
