// document.getElementById("box2");
// // 텍스트 넣을 거라 따음표가 들어감 / 대소문자 구별

// console.log(document.getElementById("box2");)
// // 개발자도구-콘솔탭에서 확인 가능

let box = document.getElementById("box2");
console.log(box);
// box.onclick = function(){
//     sdfsdf
// }

box.onclick = () => {
         box.classList.toggle("box--selected")
     }
// onclick = () => {}
// 클래스를 붙였다뗐다가가능하다
