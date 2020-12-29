import * as addList from './request-list';
import countActiveTask from './count-active-task';
import renderList from './renderlist';

const addToList = async (e, listContainer, addTask, listUrl) => {
  
  if (addTask.value !== '') {
    const text = addTask.value;
    const newList = {
      text,
      done: false,
    };

    await addList(listUrl, newList);
    countActiveTask(listContainer, listUrl);
    renderList(listContainer, listUrl);
    addTask.value = '';
  }

};

export default addToList;
