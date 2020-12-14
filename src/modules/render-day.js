import renderList from './renderlist';

function renderDay(userList) {
  const currentDay = document.querySelector('.current-date');
  const curWeekDate = new Date().getDay();
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = new Date();
  const list = JSON.parse(localStorage.getItem('list')) || [];
  let curTask = 0;
  for (let i = 0; i < list.length; i++) {
    (!list[i].done) ? curTask++ : 0;
  }
  currentDay.innerHTML = `
  <h1>Hello!</h1>
  <p>Today is ${week[curWeekDate]}, ${day.toLocaleDateString()}.</p>
  <p>${(curTask === 0) ? 'No tasks today!' : (`You have ${curTask} tasks today!`)}</p>
  `;
  renderList(list, userList);
}

export default renderDay;
