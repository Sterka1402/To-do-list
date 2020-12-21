import renderList from './renderlist';

function countActiveTask(list, listContainer) {
  const countList = list.filter((item) => (!item.done));
  const currentDay = document.querySelector('.task-counting');
  currentDay.innerHTML = `
   <p>${(countList.length === 0) ? 'No tasks today!' : (`You have ${countList.length} tasks today!`)}</p>
  `;
  renderList(list, listContainer);
}

export default countActiveTask;
