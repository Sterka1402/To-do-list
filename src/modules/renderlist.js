function renderList(items = [], listContainer) {
  listContainer.innerHTML = items.map((item, index) => `
     <li class="${item.done ? 'check-list done-list' : 'check-list'}" data-key="${index}" >
     <img class='remove-list' src='./src/icons/trash.svg' alt="Delete">
     ${item.text}</li>
  `).join('');
}

export default renderList;
