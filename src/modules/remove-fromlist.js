import { getList, deleteList } from './request-list';
import renderList from './render-list';

const removeFromList = async (e, listContainer, listUrl) => {
  if ((e.target.classList.contains('remove-list')) && (e.target.tagName === 'IMG')) {
    const parentLi = e.target.closest('LI');
    const keyRemove = parentLi.dataset.key;
    let list = JSON.parse(localStorage.getItem('list')) || [];
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(keyRemove)) {
        const checkList = list[i].done;
        if (!checkList) return;
      }
    }
    await deleteList(listUrl, keyRemove);
    list = await getList(listUrl);
    localStorage.setItem('list', JSON.stringify(list));
    renderList(list, listContainer);
  }
};

export default removeFromList;
