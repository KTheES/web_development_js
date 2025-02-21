// let boardInputDatas = {
//   id: 0,
//   title: '메모 제목',
//   content: '메모 내용',
//   writer: '작성자',
// };
// // 비어있는 배열 생성
// let boardDatas = [];
// boardDatas.push(boardInputDatas);
// console.log(boardDatas);

// // 객체의 title value값 수정
// boardInputDatas.title = '제목을 수정합니다.';

// // 배열을 확인
// console.log(boardDatas);

// let boardInputDatas = {
//   id: 0,
//   title: '메모 제목',
//   content: '메모 내용',
//   writer: '작성자',
// };
// // 비어있는 배열 생성
// let boardDatas = [];
// // 이 부분이 아까 예시와 다릅니다.
// boardDatas.push({...boardInputDatas}); // push가 일어난 시점의 키값(프로퍼티)을 그대로 유지

// // 객체의 title value값 수정
// boardInputDatas.title = '스프레드 적용 후 제목 수정';

// boardDatas.push({...boardInputDatas});

// // 배열을 확인
// console.log(boardDatas);
// console.log(boardInputDatas);

let nestedObject = {
  id: 1,
  data: {
    title: '메모 제목',
  }
};

let copy = { ...nestedObject };
// copy된 부분의 속성 값을 변경했습니다.
copy.data.title = "수정됨";

// 원본이 변경되었는지를 확인하는겁니다.
console.log(nestedObject.data.title); // 수정됨 (원본이 전부 바뀌었습니다.)