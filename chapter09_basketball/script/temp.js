// Scope
// Local vs. Global


// let comScore = 0;


// function onComputerShoot() {
//   console.log('함수 안', comScore);
// }

// onComputerShoot();

// console.log('함수 밖', comScore);

// 이상의 코드에서 생기는 문제점은 onComputerShoot 내에서는
// comScore라는 변수가 없음에도 불구하고 아무런 문제 없이 0란 값이 찍힙니다.

// function onComputerShoot() {
//   let comScore = 0;
  
//   console.log('함수 안', comScore);

// }

// onComputerShoot();

// console.log('함수 밖', comScore);

// 그리고 이상의 코드는 오류가 발생함을 확인할 수 있습니다.
// 함수 내에 선언된 지역 변수인 comScore를 main 단계에서 확인할 수가 없기 때문에
