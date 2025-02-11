let userInput;
let comInput;
let randomNum = Math.random();
const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

// 0이상 0.33 미만은 가위 0.33이상 0.66 미만은 바위 0.66 이상 1미만은 보로 comInput에 대입하시오.
// if(randomNum < 0.33) comInput = SCISSORS;
// else if(0.33 <= randomNum < 0.66) comInput = ROCK;
// else comInput = PAPER;


// console.log(comInput);

// // userInput = prompt('가위, 바위, 보!');

// // 입력한 값이 가위, 바위, 보 중 하나라면 통과하는데, 잘못된 철자나 묵, 찌, 빠 등이라면 
// //'가위, 바위, 보 중 하나를 입력해야 합니다!' 를 출력하는 alert이 나올 수 있도록 조건문을 작성하시오.

// if(userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER)console.log('가위, 바위, 보 중 하나를 입력해야 합니다!');
// else {
//   // 이 부분이 유효성 검사를 통과한 부분이니
//   // 나머지 정상 실행된 로직을 작성하도록 하는 편

//   if(randomNum < 0.33) comInput = SCISSORS;
//   else if(0.33 <= randomNum < 0.66) comInput = ROCK;
//   else comInput = PAPER;

//   console.log(comInput);

//   // userInput을 기준으로 작성하겠습니다.
//   if (userInput === SCISSORS){
//     // comInput 비교 
//     if(comInput === SCISSORS){
//       // 사용자가 비긴 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
//     } else if(comInput === ROCK){
//       // 사용자가 진 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
//     } else {
//       // 사용자가 이긴 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
//     }

//   } else if(userInput === ROCK) {
//     // comInput 비교 
//     if(comInput === ROCK){
//       // 사용자가 비긴 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
//     } else if(comInput === PAPER){
//       // 사용자가 진 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
//     } else {
//       // 사용자가 이긴 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
//     }

//   } else {
//     // comInput 비교 
//     if(comInput === PAPER){

//       // 사용자가 비긴 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
//     } else if(comInput === SCISSORS){
//       // 사용자가 진 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
//     } else {
//       // 사용자가 이긴 경우
//       alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
//     }
//   }
// }

// 개선안 : 상수를 활용 ctrl + h 사용하면 대치 가능하답니다.

// switch 개선 부분 
userInput = prompt('가위, 바위, 보!');

if(randomNum < 0.33) comInput = SCISSORS;
else if(0.33 <= randomNum < 0.66) comInput = ROCK;
else comInput = PAPER;

switch(userInput) {
  case SCISSORS:
    switch(comInput){
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
        break;
      case PAPER:
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
        break;
    }
    break;
  case ROCK:
    switch(comInput){
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
        break;
      case PAPER:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
        break;
      }
    break;
  case PAPER:
      switch(comInput){
        case SCISSORS:
          alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
          break;
        case ROCK:
          alert(`컴퓨터 : ${comInput} - 컴퓨터를를 이겼습니다.`);
          break;
        case PAPER:
          alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
          break;
        }
    break;  
  default:
  alert('가위, 바위, 보 중에서 선택하셔야 합니다!');

}
