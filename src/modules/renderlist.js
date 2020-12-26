function renderList(listContainer, listUrl) {
  (async () => {
    const getPost = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      } catch (err) {
        console.log(`Error: server responded: ${err.message}`);
      }
    };

    const list = await getPost(listUrl) || [];

    listContainer.innerHTML = list.map((item) => `
      <li class="${item.done ? 'check-list done-list' : 'check-list'}" data-key="${item.id}" >
      <img class='remove-list' src='./src/icons/trash.svg' alt="Delete">
      ${item.text}</li>
    `).join('');

    localStorage.setItem('list', JSON.stringify(list));
  })();
}

export default renderList;
