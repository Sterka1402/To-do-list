import * as getList from './request-list';

const countActiveTask = async (listContainer, listUrl) => {
 
  const list = await getList(listUrl) || [];
  const countList = list.filter((item) => (!item.done));
  const showCount = ((countList.length === 0) ? 'No tasks today!' : (`You have ${countList.length} tasks today!`));

  const currentDay = document.querySelector('.task-counting');
  currentDay.innerHTML = `
    <p>${showCount}</p>
    `;
  
};

export default countActiveTask;
