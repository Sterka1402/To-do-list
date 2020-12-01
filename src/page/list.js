const userList = document.querySelector(".user-list");
const addTask = document.getElementById("new-task");
const addBtn = document.getElementById("add-task");

console.log(userList);

const renderItem = () => {
  console.log(addTask.value);

  const newLi = document.createElement('li');
  newLi.textContent = addTask.value;
  userList.append(newLi);
  addTask.value = '';
};

addBtn.addEventListener('click', renderItem);

const removeItem = (e) => {
  e.target.remove('span');

//  (e.target === 'span') ? e.target.closest('li').remove : undefined;
}

userList.addEventListener('click',removeItem);