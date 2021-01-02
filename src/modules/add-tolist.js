import { addList, getList } from './request-list';
import countActiveTasks from './count-active-tasks';
import renderList from './render-list';

const addToList = async (listContainer, addTask, listUrl) => {
  if (addTask.value !== '') {
    const text = addTask.value;
    const newList = {
      text,
      done: false,
    };

    await addList(listUrl, newList);
    const list = await getList(listUrl) || [];
    // console.log(JSON.stringify(list));
    localStorage.setItem('list', JSON.stringify(list));
    countActiveTasks(list);
    renderList(list, listContainer);
    addTask.value = '';
  }
};

export default addToList;
