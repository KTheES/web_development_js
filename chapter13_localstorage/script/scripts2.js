let todos = [];

document.addEventListener('DOMContentLoaded', () => {

  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos);
})

function addTodo(){
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();

  if(newTodo) {   
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    input.value= '';
  }
}

function renderTodos(todos){
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach((todo,index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';

    deleteBtn.onclick = () => removeTodo(index);

    deleteBtn.classList.add('deleteBtn');

    li.appendChild(deleteBtn);   
    list.appendChild(li);        


  });
}

function removeTodo(index){
  todos.splice(index, 1);   

  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}
