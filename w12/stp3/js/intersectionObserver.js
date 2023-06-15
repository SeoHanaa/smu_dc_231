const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.75],
};

const callback = (triggers, observer) => {
  triggers.forEach((trigger) => {
    if (trigger.isIntersecting) {
      trigger.target.classList.add("triggered");
    } else {
      trigger.target.classList.remove("triggered");
    }
  });
};

const observer = new IntersectionObserver(callback, options);
// 어느정도나와야반응하럭냐=옵션 
const animTriggers = document.querySelectorAll(".animTrigger");
animTriggers.forEach((animTrigger) => {
  observer.observe(animTrigger);
  // 옵저버를 만들어서 관찰해라 하면 그 결과를 받아볼 수 있음

});
