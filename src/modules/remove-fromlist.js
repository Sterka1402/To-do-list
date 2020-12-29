import {getList, deleteList} from './request-list';
import renderList from './renderlist';

const removeFromList = (e, listContainer, listUrl) => {
  
  if ((e.target.classList.contains('remove-list')) && (e.target.tagName === 'IMG')) {
    const parentLi = e.target.closest('LI');
    const keyRemove = parentLi.dataset.key;
    // list.splice(keyRemove, 1);
    const list = getList(listUrl) || [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === String(keyRemove)) {
        const checkList = list[i].done;
        if (!checkList) return;
      }
    }

    deleteList(listUrl, keyRemove);
    renderList(listContainer, listUrl);
  }

};

export default removeFromList;
