import renderList from './renderlist';

function removeFromList(e, listContainer, listUrl) {
  if ((e.target.classList.contains('remove-list')) && (e.target.tagName === 'IMG')) {
    const parentLi = e.target.closest('LI');
    const keyRemove = parentLi.dataset.key;
    // list.splice(keyRemove, 1);
    const list = JSON.parse(localStorage.getItem('list')) || [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == keyRemove) {
        const checkList = list[i].done;
        if (!checkList) return;
      }
    }
    (async () => {
      const deletePost = async (url, keyRemove) => {
        const options = {
          method: 'DELETE',
        };
        try {
          const response = await fetch(`${url}/${keyRemove}`, options);
          if (response.status !== 200) {
            throw new Error(response.status);
          }
          return response.json();
        } catch (err) {
          console.log(`Error: server responded: ${err.message}`);
        }
      };
      await deletePost(listUrl, keyRemove);
      renderList(listContainer, listUrl);
    })();
  }
}

export default removeFromList;
