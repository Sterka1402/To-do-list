function renderList(items = [], itemsList) {
  itemsList.innerHTML = items.map((item, index) => `
     <li ${item.done ? 'class="check-list done-list"' : 'class="check-list"'} data-key="${index}" >
     <img class='remove-list' src='./src/icons/trash.svg' alt="Delete">
     ${item.text}</li>
  `).join('');
}

export default renderList;
