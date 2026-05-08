// 배열에서 제공되는 기본함수의 기능을 살펴봅니다.
// 배열의 추가, 삭제, 수정
// 배열의 정렬, 변환, 필터 기능
let iveMenbers = ['안유진', '가을', '레이', '리즈', '이서'];

// 원본을 변경하는 함수
// 1. 맨 뒤에 추가하기
console.log(`원본 : ${iveMenbers}`);
iveMenbers.push('장원영')
console.log(`추가 후 : ${iveMenbers}`);
// 2. 맨 앞에 추가하기
console.log(`원본 : ${iveMenbers}`);
iveMenbers.unshift('홍길동')
console.log(`추가 후 : ${iveMenbers}`);
// 맨 뒤에 삭제
iveMenbers.pop()
console.log(`맨뒤 삭제 후 : ${iveMenbers}`);
// 맨 앞 삭제
iveMenbers.shift()
console.log(`맨앞 삭제 후 : ${iveMenbers}`);
// 임의의 위치 삭제 : 색인(0 부터 시작)
iveMenbers.splice(2, 1)
console.log(`2번 인덱스 삭제 후 : ${iveMenbers}`);
// 임의의 위치에 삽입
iveMenbers.splice(3, 0, '장원영')
console.log(`3번 인덱스 추가 후 : ${iveMenbers}`);
// 정렬
iveMenbers.sort()
console.log(`정렬 : ${iveMenbers}`);
iveMenbers.reverse()
console.log(`내림차순 정렬 : ${iveMenbers}`);

// 원본을 변경하지 않는 함수
let fruits = ['사과', '딸기', '배', '포도', '바나나'];
// 1. concat 
console.log(fruits.concat('망고'))
console.log(fruits)
console.log('---------------------------------------------------')
// 2. 배열의 일부 잘라내기(slice)
console.log(fruits.slice(0, 3))
console.log(fruits)
console.log('---------------------------------------------------')
// 3. join
console.log(fruits.join('/'))
console.log(fruits)
console.log('---------------------------------------------------')

// 중요 : Spread Operator [...] : 배열 복사
let iveMenbers2 = [...iveMenbers];
console.log(iveMenbers == iveMenbers2);
// 배열의 주소를 복사해서 사용하는 것.
let iveMenbers3 = iveMenbers;
console.log(iveMenbers == iveMenbers3);
console.log("수정 전 : " + iveMenbers)
// iveMember3의 맨 앞에 'Hong' 추가
iveMenbers3.unshift('Hong')
console.log("수정 후 : " + iveMenbers)
