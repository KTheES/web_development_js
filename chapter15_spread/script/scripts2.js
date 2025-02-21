// student 배열을 선언 및 초기화
let students = [];

// 새로운 학생을 추가하는 함수
function addStudent(name, age, gender, grade){
  const newStudent = {
    id: students.length + 1,
    name,
    age,
    gender,
    grade,
  };
  
  // 원본 객체가 아닌 복사본을 배열에 추가
  students = [...students, {...newStudent}];
  console.log(`학생 추가 완료 : ${name}`);
}

// 학생 성적 업데이트
function updateGrade(studentId, newGrade){
  students = students.map(student =>
    student.id === studentId
    ? {... student, grade: newGrade} /// 해당 학생만 복사본으로 수정함.
    : student // studentID가 일치하지 않으면 수정하지 않고 그대로 유지
  );
  console.log(`ID : ${studentId} 학생 성적 업데이트 완료`);
}

// 전체 학생 목록 출력 -> call1() 유형으로 작성할 예정
function printStudents(){
  console.log("학생 목록 : ");
  // // forEach 쓰겠습니다.
  // students.forEach(student => console.log(student));

  for(let i = 0 ; i< students.length ; i++){
    console.log(students[i]);
  }

}

// 여기에 성적 우수 학생 걸러내는 필터링 적용 함수 정의 예정 -call1()
function getTopStudents() {
  const topStudents = students.filter(student => student.grade >= 80);
  console.log("우수 학생 명단") 
  // 여기에 반복문이나 혹은 forEach를 사용하면 되겠죠.

  // topStudents.forEach(toptStudent => console.log(topStudent));   // 이것도 사용 가능
  // for( let i = 0 ; i< topStudents.length ; i++){
  //   console.log(topStudents[i]);
  // }

  topStudents.forEach(student => console.log(student));
}

//이상의 getTopStudents()함수의 경우 출력 결과가 id부터 성별 및 성적까지 전부 출력되기 때문에 가독성이 좀 떨어져 보이고, 이미 printStudents()를 통해서 객체를 출력하는 .forEach()를 사용해봤기 때문에
// 실행 예
// 이름 : 김일
// 성적 : 85점
// 으로 출력하려면 어떡해야할지 고민해보겠습니다.
// 백틱 ``을 사용하셔야 하죠.
// 일반 반복문으로 작성하셔도 좋습니다.

//⬇️
function getTopStudents() {
  const topStudents = students.filter(student => student.grade >= 80);
  console.log("우수 학생 명단") ;

  // topStudents.forEach(student => console.log(`이름 : ${student.name}\n 성적: ${student.grade}점`));

  // or

  // topStudents.forEach(topStudents =>{
  //   console.log(`이름: ${topStudents.name}`);
  //   console.log(`성적: ${topStudents.grade} 점`)
  // });
}


// 객체 생성
addStudent("김일", 20 , "남", 85);
addStudent("김이", 21 , "여", 78);
addStudent("김삼", 22 , "여", 100);
addStudent("김사", 23 , "남", 55);

// 전체 학생 출력 1. 배열을 통해서.  2. 각 요소를 하나하나 풀어서 출력
console.log(students);
printStudents();

// 성적 우수 학생 필터링 함수 호출
getTopStudents();


// 성적 수정
updateGrade(2, 95);

// 성적 수정 후, 1. 배열을 통해서.   2. 각 요소를 하나하나 풀어서 출력
console.log(students);
printStudents();
// 이상의 코드에서 수정이 일어남.

// 성적 우수 학생 필터링 함수 호출
getTopStudents();



