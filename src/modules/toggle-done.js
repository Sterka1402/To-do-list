import updateToggleList from './update-toggle-list';

function toggleDone(e, listContainer, listUrl) {
  let updateList;
  let toggleId = 0;
  const list = JSON.parse(localStorage.getItem('list')) || [];

  if ((e.target.classList.contains('check-list')) && (e.target.tagName === 'LI')) {
    const itemLi = e.target;
    toggleId = itemLi.dataset.key;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == toggleId) {
        list[i].done = !list[i].done;
        updateList = list[i];
        localStorage.setItem('list', JSON.stringify(list));
      }
    }
  }
  updateToggleList(listContainer, listUrl, updateList, toggleId);
}

export default toggleDone;
