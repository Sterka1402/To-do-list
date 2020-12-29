import * as getList from './request-list';

const renderList = async (listContainer, listUrl) => {
  
  const list = await getList(listUrl) || [];

  listContainer.innerHTML = list.map((item) => `
    <li class="${item.done ? 'check-list done-list' : 'check-list'}" data-key="${item.id}" >
    <img class='remove-list' src='./src/icons/trash.svg' alt="Delete">
    ${item.text}</li>
  `).join('');
 
};

export default renderList;
