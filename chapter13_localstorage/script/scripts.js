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
  const newTodo = input.ariaValueMax.trim();

  if(newTodo) {   // newTodo는 기본적으로 str -> 값이 있기만 하면 true
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    newTodo = "";
  }
}
// 2에서 element가 추가되면 다시 1 파트의 addEventListener가 동작하여
// Local storage에서 해당 요소를 get 해옴.

