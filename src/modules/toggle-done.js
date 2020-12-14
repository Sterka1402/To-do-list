import renderDay from './render-day';
import renderList from './renderlist';

function toggleDone(e, list, userList) {
  if ((e.target.classList.contains('check-list')) && (e.target.tagName === 'LI')) {
    const itemLi = e.target;
    const indexLi = itemLi.dataset.key;
    list[indexLi].done = !list[indexLi].done;
    localStorage.setItem('list', JSON.stringify(list));
    renderDay(userList);
    renderList(list, userList);
  }
}

export default toggleDone;
