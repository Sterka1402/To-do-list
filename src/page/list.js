const userList = document.querySelector(".user-list");
const addTask = document.getElementById("new-task");
const addBtn = document.getElementById("add-task");

console.log(userList);

const renderItem = () => {
  console.log(addTask.value);

  const newLi = document.createElement('li');
  newLi.textContent = addTask.value;
  const spanLi = document.createElement('span');
  spanLi.textContent = 'X ';
  newLi.prepend(spanLi);
  userList.append(newLi);
  addTask.value = '';
};

addBtn.addEventListener('click', renderItem);

const removeItem = (e) => {
  console.log(e.target.tagName);
  if  (e.target.tagName === 'SPAN') {
    console.log(e.target.tagName);
    const parentLi = e.target.closest('LI');
   parentLi.remove();
  } else {
    return undefined;
  }
}

userList.addEventListener('click',removeItem);