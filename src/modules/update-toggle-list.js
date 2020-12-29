import countActiveTask from './count-active-task';

const updateToggleList = async (listContainer, listUrl, updateList, toggleId) => {
  await updateList(listUrl, updateList, toggleId);
  countActiveTask(listContainer, listUrl);
};

export default updateToggleList;
