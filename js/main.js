//////////////Buger//////////
(function () {
  const burger = document.querySelector(".burger");
  const itemLink = document.querySelector(".item__link");
  const list = document.querySelector(".list");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    list.classList.toggle("active");
    body.classList.toggle("lock");
  });
})();
//////////////Buger//////////
const mainBtn = document.querySelector(".item-btn");
const formClose = document.querySelector(".form__close");
const body = document.querySelector("body");
const form = document.querySelector(".form");
const sucsess = document.querySelector(".sucsess");
mainBtn.addEventListener("click", () => {
  form.classList.add("active");
  body.classList.add("lock");
  mainBtn.style.display = "none";
});
formClose.addEventListener("click", () => {
  form.classList.remove("active");
  body.classList.remove("lock");
  mainBtn.style.display = "block";
});

const TOKEN = "6093158422:AAHT2xcxBLxjA5A74y1ryIg5wPCyHq5W9Is";
const ChatID = "-1001928993703";
const URI_API = `https://api.telegram.org/bot6093158422:AAHT2xcxBLxjA5A74y1ryIg5wPCyHq5W9Is/sendMessage`;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b>заявка с сайта</b>\n`;
  message += `<b>отправитель:</b> ${this.name.value}\n`;
  message += `<b>телефон:</b> ${this.tel.value}\n`;
  message += `<b>информация:</b> ${this.text.value}`;
  console.log(message);
  axios
    .post(URI_API, {
      chat_id: ChatID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.tel.value = "";
      this.text.value = "";
      sucsess.style.display = "block";
      sucsess.innerHTML = "Спасибо, я вам перезвоню!";
      /* setTimeout(function () {
        form.classList.remove("active");
        body.classList.remove("lock");
        mainBtn.style.display = "block";
        sucsess.innerHTML = "";
      }, 2000); */
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".main-title", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
});
gsap.from(".main__subtitle", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.5,
});
gsap.from(".menu", {
  opacity: 0,
  duration: 1,
  width: 0,
  delay: 0.5,
});
gsap.from(".item-btn", {
  opacity: 0,
  duration: 1,
  width: 0,
  delay: 1.5,
});
gsap.from(".item-btn__text", {
  opacity: 0,
  duration: 1,
  delay: 2.5,
});
gsap.from(".list__item", {
  opacity: 0,
  duration: 0.8,
  delay: 2,
  y: -40,
});
gsap.from(".item-1", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".item-1",
    scrub: 1,
  },
});

gsap.from(".item-11", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".item-11",
    scrub: 1,
  },
});
gsap.from(".item-2", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".item-2",
    scrub: 1,
  },
});
gsap.from(".item-22", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".item-22",
    scrub: 1,
  },
});
gsap.from(".item-3", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".item-3",
    scrub: 1,
  },
});
gsap.from(".item-33", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".item-33",
    scrub: 1,
  },
});

const swiper = new Swiper(".swiper", {
  effect: "flip",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///////////popup
// const div = document.querySelector(".item-btn");
// console.log(div);
// div.addEventListener("click", function () {
//   div.classList.add("active");
//   div.style.width = "300" + "px";
// });
// const closeBtn = document.querySelector(".form__close");
// closeBtn.addEventListener("click", function () {
//   console.log(closeBtn);
//   div.classList.remove("active");
// });

// const container = document.querySelector(".container");
// container.addEventListener("click", function () {
//   list.classList.remove("active");
//   console.log(555);
// });