function renderDay(list) {
  const currentDay = document.querySelector('.current-date');
  const curWeekDate = new Date().getDay();
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = new Date();
  currentDay.innerHTML = `
  <h1>Hello!</h1>
  <p>Today is ${week[curWeekDate]}, ${day.toLocaleDateString()}.</p>
  <p> You have ${list.length} tasks today!</p>
  `;
}

export default renderDay;
