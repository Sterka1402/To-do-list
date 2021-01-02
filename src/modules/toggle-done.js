import { getList, updateList } from './request-list';
import renderList from './render-list';
import countActiveTasks from './count-active-tasks';

const toggleDone = async (e, listContainer, listUrl) => {
  if ((e.target.classList.contains('check-list')) && (e.target.tagName === 'LI')) {
    let toggleList;
    let toggleId = 0;
    let list = JSON.parse(localStorage.getItem('list')) || [];
    console.log(list);
    const itemLi = e.target;
    toggleId = itemLi.dataset.key;

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(toggleId)) {
        list[i].done = !list[i].done;
        toggleList = list[i];
      }
    }
    await updateList(listUrl, toggleList, toggleId);
    list = await getList(listUrl);
    localStorage.setItem('list', JSON.stringify(list));
    countActiveTasks(list);
    renderList(list, listContainer);
  }
};

export default toggleDone;
