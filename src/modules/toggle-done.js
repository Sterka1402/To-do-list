import countActiveTask from './count-active-task';

function toggleDone(e, list, listContainer) {
  if ((e.target.classList.contains('check-list')) && (e.target.tagName === 'LI')) {
    const itemLi = e.target;
    const indexLi = itemLi.dataset.key;
    list[indexLi].done = !list[indexLi].done;
    localStorage.setItem('list', JSON.stringify(list));
    countActiveTask(list, listContainer);
  }
}

export default toggleDone;
