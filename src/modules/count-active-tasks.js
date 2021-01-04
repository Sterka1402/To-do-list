const countActiveTasks = (list) => {
  const countList = list.filter((item) => (!item.done));
  const showCount = !countList.length ? 'No tasks today!' : `You have ${countList.length} tasks today!`;

  const currentDay = document.querySelector('.task-counting');
  currentDay.innerHTML = `
    <p>${showCount}</p>
    `;
};

export default countActiveTasks;
