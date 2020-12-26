import countActiveTask from './count-active-task';

function updateToggleList(listContainer, listUrl, updateList, toggleId) {
  (async () => {
    const updatePost = async (url, post, id) => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(post),
      };

      try {
        const response = await fetch(`${url}/${id}`, options);
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      } catch (err) {
        console.log(`Error: server responded: ${err.message}`);
      }
    };
    await updatePost(listUrl, updateList, toggleId);
    countActiveTask(listContainer, listUrl);
  })();
}

export default updateToggleList;
