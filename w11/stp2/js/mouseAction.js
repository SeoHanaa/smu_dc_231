// let box = document.querySelector(".box");


// box.onclick = () => {
//     box.classList.toggle(box--selected);
// }


// let box = document.querySelector(".box");
// box.onclick = () => {
//          box.classList.toggle("box--selected");
//      }

// 쿼리셀렉터는 하나 보내줘 하면 한놈만 보내고 끝냄
// 쿼리셀렉터 all은 값을 다 데리고 와
let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
// 이걸 다 입력하는 것은 말이 안되기떄문에 forEach를 쓰면 됨
// forEach안쪽에 function넣고 
boxes.forEach(function (grass) {
grass.onclick = () => {
    grass.classList.toggle("box--selected")
};    
});
// grass 자리에 0,1,2가 한번씩 거쳐짐


// 더 단순화하면?
// boxes.forEach();이렇게 먼저 적기
boxes.forEach( (each)=> {
    each.onclick = () => {
        each.classList.toggle("box--selected")
    }
});

