import { getList, updateList } from './request-list';
import renderList from './renderlist';
import countActiveTask from './count-active-task';

const toggleDone = (e, listContainer, listUrl) => {
  
  let toggleList;
  let toggleId = 0;
  const list = getList(listUrl) || [];

  if ((e.target.classList.contains('check-list')) && (e.target.tagName === 'LI')) {
    const itemLi = e.target;
    toggleId = itemLi.dataset.key;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === String(toggleId)) {
        list[i].done = !list[i].done;
        toggleList = list[i];
      }
    }
  }

  updateList(listUrl, toggleList, toggleId);
  countActiveTask(listContainer, listUrl);
  renderList(listContainer, listUrl);

};

export default toggleDone;
