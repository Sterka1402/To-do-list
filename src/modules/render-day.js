import renderList from './renderlist';
import countActiveTask from './count-active-task';

function renderDay() {
  const currentDay = document.querySelector('.current-date');
  const day = new Date();
  const curWeekDate = day.getDay();
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  currentDay.innerHTML = `
  <h1>Hello!</h1>
  <p>Today is ${week[curWeekDate]}, ${day.toLocaleDateString()}.</p>
  `;
   

  
}

export default renderDay;
