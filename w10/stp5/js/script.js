let elem = document.getElementById("boxA");
// 겟엘리먼트아이디를 실행시켰지만 헤드쪽엔 없어서 실행이 안됨
console.log(elem);
elem.onclick = () => {
  elem.classList.toggle("box--clicked");
};