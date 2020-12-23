import countActiveTask from './count-active-task';

function toggleDone(e, listContainer,listUrl) {
  (async () => {
    const getPost = async (url) => {
      try {
        const response = await fetch(url);
        if(response.status !== 200) {
          throw new Error(response.status)
        }
        return response.json();
      } catch (err) {
        console.log(`Error: server responded: ${err.message}`);
      }
    };
  
    const list = await getPost(listUrl) || [];
      
    // console.log(list);
    if ((e.target.classList.contains('check-list')) && (e.target.tagName === 'LI')) {
            const itemLi = e.target;
            const indexLi = itemLi.dataset.key;
            list[indexLi].done = !list[indexLi].done;
    console.log(list[indexLi].done);
    }  
  // })();
  // console.log(list);

  // (async (list) => {  
    const updatePost = async (url, post, id) => {
        const options = {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify(post)
        };

        try {
          const response = await fetch(`${url}/${id}`, options);
          if(response.status !== 200) {
            throw new Error(response.status)
          }
          return response.json();
        } catch (err) {
          console.log(`Error: server responded: ${err.message}`);
        }
      };
      
     
      //  localStorage.setItem('list', JSON.stringify(list));
       
        // console.log(list[indexLi]);
        
      
      // const updatedList = list[indexLi];
      
        await updatePost(listUrl, list[indexLi], indexLi);
        
      
      countActiveTask(listContainer,listUrl);
  })();
 
  
}

export default toggleDone;
