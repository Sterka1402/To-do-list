import renderList from './renderlist';

function removeFromList(e,listContainer,listUrl) {
  (async () => {
      
    if ((e.target.classList.contains('remove-list')) && (e.target.tagName === 'IMG')) {
      const parentLi = e.target.closest('LI');
      const keyRemove = parentLi.dataset.key;
      const checkList = list[keyRemove].done;

      if (!checkList) return;
      // list.splice(keyRemove, 1);
      // localStorage.setItem('list', JSON.stringify(list));
      renderList(listContainer,listUrl);
  
    const deletePost = async (url, keyRemove) => {
      const options = {
        method: 'DELETE'
      };

      try {
        const response = await fetch(`${url}/${keyRemove}`, options);
        if(response.status !== 200) {
          throw new Error(response.status)
        }
        return response.json();
      } catch (err) {
        console.log(`Error: server responded: ${err.message}`);
      }
    };
    await deletePost(listUrl, keyRemove);  
    }
  })();
  
}

export default removeFromList;
