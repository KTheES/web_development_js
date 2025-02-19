/**
 * 프로그램 정의
 * 
 * 1. 할 일 추가: 로컬 스토리지에 새로운 데이터 추가
 * 2. 할 일 목록을 렌더링 : 로컬 스토리지에 저장된 데이터가 있는 경우 불러오기
 * 
 * 3. 할 일 삭제 : 로컬 스토리지에 해당 데이터 삭제
 * 
 */

// 1. 할 일 목록을 저장할 빈 배열
let todos = [];

document.addEventListener('DOMContentLoaded', () => {
  // todos 데이터를 JSON 형태로 '파싱'하고, 값이 없으면 빈 배열을 사용하도록 할 예정
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos);
})

// 2. 할 일을 추가하는 함수
function addTodo( ){
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();

  if(newTodo) {   // newTodo는 기본적으로 str -> 값이 있기만 하면 true
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    input.value= '';
  }
}
// 2에서 element가 추가되면 다시 1 파트의 addEventListener가 동작하여
// Local storage에서 해당 요소를 get 해옴.


function renderTodos(todos){
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach((todo,index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';

    // 삭제 버튼은 renderTodos()를 호출했을 때 <li>가 만들어지고, <button>이 만들어지기 떄문에 
    // 기능과 관련된 부분이 없습니다 -> 즉 renderTodos() 내부에 button 의 삭제 기능을 구현해둬야 할겁니다.

    // 물론 우리가 배운대로 외부에 구현해놓고 여기서 호출만 해도 되는데 매커니즘을 설명하기 위해 여기에 작성하겠습니다.

    deleteBtn.onclick = () => removeTodo(index);    // 버튼을 클릭하면 removeIndex() 함수를 호출하겠다
    //argument로 index를 받았습니다 -> 즉 특성 요소 하나만 삭제하는 버튼이라고 볼 수 있겠습니다.
    // deleteBtn.addEventListener('click', removeTodo(index)); 와 동의어
    // deleteBtn.addEventListener('click', function() {
    //    삭제하는 구현부; 와 같은 방식으로는 이전에 작성해왔었습니다.
    // });

    deleteBtn.classList.add('deleteBtn');

    li.appendChild(deleteBtn);    //li > button
    list.appendChild(li);         //ul > li


  });
}

// 3. 할 일을 삭제하는 함수
function removeTodo(index){
  // 배열명.splice(삭제할 요소의 인덱스넘버, 제거할 요소의 숫자);
  todos.splice(index, 1);   //버튼이 눌러진 index 넘버의 element만 삭제 -> 배열에서만 삭제
  // '배열에서만의 삭제'가 의미하는 바? -> 로컬스토리지에는 남아있다 -> 그렇다면 다시 읽어오게 된다면
  // 삭제 버튼 눌러서 배열에서 사라진 애가 어차피 다시 나옴
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}
