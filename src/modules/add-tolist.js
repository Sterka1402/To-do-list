import countActiveTask from './count-active-task';

function addToList(e, listContainer, addTask, listUrl) {
  (async () => {
    const addPost = async (url, post) => {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(post)
    };

    try {
      const response = await fetch(url, options);
      if(response.status !== 200) {
        throw new Error(response.status)
      }
      return response.json();
    } catch (err) {
      console.log(`Error: server responded: ${err.message}`);
    }
  };
  if (addTask.value !== '') {
    const text = addTask.value;
    const item = {
      text,
      done: false
    };
    await addPost(listUrl, item);
    // const list.push(item);
    // localStorage.setItem('list', JSON.stringify(list));

    countActiveTask(listContainer,listUrl);
    addTask.value = '';
  }
  
  })();
}

export default addToList;
