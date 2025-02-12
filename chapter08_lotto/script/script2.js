let lottoArray2 = [];

for( let i = 0 ; i < 45 ; i++ ) {
  lottoArray2.push(i+1);
}

lottoNumbers2 = [];

for (let i = 0 ; i < 6 ; i++) {
  let index2 = Math.floor(Math.random()*lottoArray2.length);


  let num2 = lottoArray2[index2];


  lottoArray2.splice(index2, 1);

  lottoNumbers2.push(num2);
} 
// console.log(lottoNumbers);
// console.log(lottoArray); -> 이제 브라우저에 찍히도록 수정 예정

// for ( let i = 0 ; i < 6 ; i++ ) {
//   document.write(lottoNumbers[i]);
// }

// document.write()내부에는 HTML 먹일 수 있었습니다.

// Comparator 정의
// 정석 버전은 20250212.md에 있고,
// 오름차순의 경우 관례적으로 작성하는 방식
// function compare(a,b) {
//   return a - b; 
// }

// 내림차순으로 정렬하고 싶으면 compare2()를 어떻게 정의하면 될지 고려하고,
// LottoNumbers.sort(compare2);를 작성하여
// 내림차순한 상태를 브라우저에 출력하시오.
// 내림차순의 경우 관례적으로 작성하는 방식
// function compare2(a,b){
//   return b - a;
  
// }


lottoNumbers2.sort(function(a,b){
  return a - b;
})
for ( let i = 0 ; i < 6 ; i++ ) {
  document.write('<span class="ball">' + lottoNumbers2[i] + '</span>');
}


// 이제 span에 스타일을 먹일 예정입니다 -> css 폴더 생성 style.css 파일 생성




