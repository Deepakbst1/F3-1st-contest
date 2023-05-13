const button = document.querySelector('button');
const postsHead = document.getElementById('posts-head');
const postsBody = document.getElementById('posts-body');


function PromiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
          const posts = data.posts;

          postsHead.innerHTML = `
      <tr>
         <th>Id.</th>
         <th>Title</th>      
         <th>User Id.</th>
         <th>Body</th>
      </tr>
    `;

          posts.forEach((postsObj) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                     <td>${postsObj.id}</td>
                     <td>${postsObj.title}</td>
                     <td>${postsObj.userId}</td>
                     <td>${postsObj.body}</td>
                  `;
            postsBody.appendChild(tr);
          })

          resolve(true);
        })
        .catch(error => { console.log(error); });
    }, 1000);
  });
}


const productsHead = document.getElementById('products-head');
const productsBody = document.getElementById('products-body');


function PromiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
          const products = data.products; // will store array of api in products array

          productsHead.innerHTML = `
       <tr>
         <th>Id.</th>
         <th>Title</th>
         <th>Price</th>
         <th>Description</th>
      </tr>
    `;

          products.forEach((productsObj) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${productsObj.id}</td>
              <td>${productsObj.title}</td>
              <td>${productsObj.price}</td>
              <td>${productsObj.description}</td>
            `;
            productsBody.appendChild(tr);
          })

          resolve(true);
        })
        .catch(error => { console.log(error); });
    }, 2000);
  });
}




const todoHead = document.getElementById('todos-head');
const todoBody = document.getElementById('todos-body');


function PromiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
fetch('https://dummyjson.com/todos')
  .then(response => response.json())

  .then(data => {
    const todos = data.todos;
    todoHead.innerHTML = `
      <tr>
        <th>Id.</th>
        <th>Todo</th>
        <th>Completed</th>
        <th>User Id.</th>
      </tr>
    `;

    todos.forEach((todoObj) => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${todoObj.id}</td>
        <td>${todoObj.todo}</td>
        <td>${todoObj.completed}</td>
        <td>${todoObj.userId}</td>
      `;
      todoBody.appendChild(tr);
    })
    resolve(true);
  })
  .catch(error => { console.log(error); });
}, 3000);
});
}


button.addEventListener('click', () => {
  PromiseAPI1()
    .then(result => {
      if (result) {
        return PromiseAPI2();
      }
    })
    .then(result => {
      if (result) {
        return PromiseAPI3();
      }
    })
    .catch(error => console.log(error));
});