import { getList, updateList } from './request-list';
import renderList from './render-list';
import countActiveTask from './count-active-task';

const toggleDone = async (e, listContainer, listUrl) => {
  let toggleList;
  let toggleId = 0;
  let list = await getList(listUrl) || [];

  if ((e.target.classList.contains('check-list')) && (e.target.tagName === 'LI')) {
    const itemLi = e.target;
    toggleId = itemLi.dataset.key;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(toggleId)) {
        list[i].done = !list[i].done;
        toggleList = list[i];
      }
    }
  }
  updateList(listUrl, toggleList, toggleId);
  list = await getList(listUrl);
  countActiveTask(list);
  renderList(list, listContainer);
};

export default toggleDone;
