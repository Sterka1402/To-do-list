const userList = document.querySelector('.user-list');
const addTask = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const list = [];

function addToList(e) {
  if (addTask.value !== '') {
  let id = 0;
  const text = addTask.value;
  const item = {
    id,
    text,
    done: false,
  };
  id++;
  list.push(item);
  renderList(list,userList);
  addTask.value = '';
  }
  return
}

console.log(list);

function renderList (items = [], itemsList) {
  itemsList.innerHTML = items.map((item, index) => {
    console.log(index);
    return `
      <li id="${index}"/>
        ${item.text}
      </li>
    `;
  }).join('');
}
addBtn.addEventListener('click',addToList);

console.log(list);

// addBtn.addEventListener('click', renderItem);

// const removeItem = (e) => {
//   console.log(e.target.tagName);
//   if  (e.target.done === 'SPAN') {
//     console.log(e.target.tagName);
//     const parentLi = e.target.closest('LI');
//    parentLi.remove();
//   } else {
//     return undefined;
//   }
// }

// userList.addEventListener('click',removeItem);

