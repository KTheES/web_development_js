let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shootLeft = 15;
let comPercent2 = 0.5;
let comPercent3 = 0.33;
// 컴퓨터만 고칠건데 코드 내에 리터럴 데이터가 있는 것은 바람직하지 않으므로 userPercent2 / 3도 정의하겠습니다.
let userPercent2 = 0.5;
let userPercent3 = 0.33;
// 여기에 리팩토링의 첫 번째 단계 함수화 진행 -> 반복되는데 짧아서 대체 가능한 애

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}


function updateComScore(score) {
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;

  comScoreElement.innerHTML = comScore;
}

function updateUserScore(score){
  let userScoreElement = document.getElementById('user-score');
  userScore += score;

  userScoreElement.innerHTML = userScore;
} // 정의해서 적용하시오.

function disableComButton(flag) {
  let computerButtons = document.getElementsByClassName('btn-computer');
  
  for(let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = flag;
  }
}

function disableUserButton(flag){
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0 ; i < userButtons.length ; i++) {
    userButtons[i].disabled = flag;
  }
}

function updateAI() {
  let difference = userScore - comScore;
if(difference > 11){
  comPercent2 = 0.7;
  comPercent3 = 0.43;
  }else if(difference >7){
  comPercent2 = 0.6;
  comPercent3 = 0.38;
  }else if(difference < -11){
  comPercent2 = 0.3;
  comPercent3 = 0.23;
  }else if(comScore < -7){
    comPercent2 = 0.4;
    comPercent3 = 0.28;
  }
}




// 기능 구현 완료 후에 리팩토링이 적용되는 부분
function onComputerShoot(){
  if(!isComputerTurn) return;
  
  updateAI();

  let shootType = Math.random() < 0.5 ? 2 : 3;

  if(shootType === 2 ) {
    if (Math.random() < 0.5) {
      showText('컴퓨터가 2점슛을 성공시켰습니다🏀 now - user');
      updateComScore(2);

    } else {
      showText('컴퓨터가 2점슛을 실패했습니다 . now - user');
    }
  } else {
    if(Math.random() < 0.33){
      showText('컴퓨터가 3점슛을 성공시켰습니다😢 now - user');
      updateComScore(3);
    }else{
      showText('컴퓨터가 3점슛을 실패했습니다. now - user');
    }
  }
  isComputerTurn = false;
  disableComButton(true);
  disableUserButton(false);

}

function onUserShoot(shootType) { 
  if(isComputerTurn) return;

  if(shootType === 2 ) {
      if (Math.random() < 0.5) {
        showText('2점슛을 성공했습니다🏀 now - computer');
        updateUserScore(2);

      } else {
        showText('2점슛을 실패했습니다. now - computer');
      }
  } else {
    if(Math.random() < 0.33){
      showText('3점슛을 성공했습니다 now - computer') ;
      updateUserScore(3);

    }else{
      showText('3점슛을 실패했습니다. now - computer');
    }
  }
  isComputerTurn = true; 
  disableComButton(false);
  disableUserButton(true);
  
  

  shootLeft --;

  let shootLeftElement = document.getElementById('shots-left')
  shootLeftElement.innerHTML = shootLeft;
  
    if(shootLeft === 0){
    if(userScore > comScore){                
      showText('이겼습니다!'); 
      alert=('이겼습니다'); 
    } else if(comScore > userScore) {
      showText('졌습니다ㅠㅠㅠ');
      alert=('졌습니다ㅠㅠㅠ');
    }else{
      showText('비겼습니다.');
      alert=('비겼습니다.');
    }
  }

}



