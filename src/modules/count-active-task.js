import renderList from './renderlist';

function countActiveTask(listContainer, listUrl) {
  (async () => {
    const getPost = async (url) => {
      try {
        const response = await fetch(url);
        if(response.status !== 200) {
          throw new Error(response.status)
        }
        return response.json();
      } catch (err) {
        console.log(`Error: server responded: ${err.message}`);
      }
    };
  
    const list = await getPost(listUrl) || [];

  const countList = list.filter((item) => (!item.done));
  const currentDay = document.querySelector('.task-counting');
  currentDay.innerHTML = `
   <p>${(countList.length === 0) ? 'No tasks today!' : (`You have ${countList.length} tasks today!`)}</p>
  `;
  renderList(listContainer,listUrl);
  })();
}

export default countActiveTask;
