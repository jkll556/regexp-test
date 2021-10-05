let str = `
010-1234-5567
thes@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
동해물과 백두산이
abbcccddddeeeee
` 

// const regexp = new RegExp('the', 'gi')
// console.log(str.match(regexp));

//gi는 대소문자 구분 없이 찾고 g는 구분

// const regexp = /fox/gi
// console.log(regexp.test(str)); //true

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA')); //fox가 AAA로 대체됨

// const regexp = /the/g
// console.log(str.match(regexp))
// console.log(str.match(/\.$/gi))

// console.log(
//   str.match(/d$/g)  //한 줄의 끝부분이 알파벳 d면 찾아진다
// )

// console.log(
//   str.match(/./g)  //하나의 특정한 글자 지칭
// )

// console.log(
//   str.match(/h..p/g)  //http잘 찾음
// )

// console.log(
//   str.match(/fox|dog/g)  // |또는 이라는 뜻 fox와 dog찾기 g안쓰면 fox만 출력됨
// )

// console.log(
//   str.match(/d{2}/)  //d두번 반복되는 부분 찾기
// )

// console.log(
//   str.match(/d{2,3}/g)  //2이상 3개이하
// )

// console.log(
//   str.match(/[가-힣]{1,}/g)  //모든 한글의 1개 이상 찾겠다
// )


// console.log(
//   str.match(/\w/g)  //
// )

// console.log(
//   str.match(/\b/g)  //
// )

// console.log(
//   str.match(/\s/g)  //
// )
console.log(
  str.match(/.{1,}(?=@)/g)  
)