const addList = async (url, post) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(post),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (err) {
    console.log(`Error: server responded: ${err.message}`);
  }
};

const getList = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (err) {
    console.log(`Error: server responded: ${err.message}`);
  }
};

const updateList = async (url, post, id) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(post),
  };

  try {
    const response = await fetch(`${url}/${id}`, options);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (err) {
    console.log(`Error: server responded: ${err.message}`);
  }
};

const deleteList = async (url, id) => {
  const options = {
    method: 'DELETE',
  };
  try {
    const response = await fetch(`${url}/${id}`, options);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (err) {
    console.log(`Error: server responded: ${err.message}`);
  }
};

export {
  addList, getList, updateList, deleteList,
};
