/* (function () {
    const burger = document.querySelector('.burger');
    const list = document.querySelector('.list');
    const body = document.querySelector('body');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        list.classList.toggle('active');
        body.classList.toggle('lock');
    });
}()); */

gsap.from(".education__text", {
  scrollTrigger: ".education__text",
  x: 300,
  duration: 1,
  delay: 0.5,
  markers: true,
  opacity: 0,
});