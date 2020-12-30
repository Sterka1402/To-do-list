import { addList, getList } from './request-list';
import countActiveTask from './count-active-task';
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

    countActiveTask(list);
    renderList(list, listContainer);
    addTask.value = '';
  }
};

export default addToList;
