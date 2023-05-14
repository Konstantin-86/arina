const mainBtn = document.querySelector(".item-btn");
const formClose = document.querySelector(".form__close");
const body = document.querySelector("body");
const form = document.querySelector(".form");
const sucsess = document.querySelector(".sucsess");
mainBtn.addEventListener("click", () => {
  form.classList.add("active");
  body.classList.add("lock");
  mainBtn.style.display = "none";
  burger.style.display = "none";
});
formClose.addEventListener("click", () => {
  form.classList.remove("active");
  body.classList.remove("lock");
  mainBtn.style.display = "block";
  burger.style.display = "block";
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
      setTimeout(function () {
        form.classList.remove("active");
        body.classList.remove("lock");
        mainBtn.style.display = "block";
        sucsess.innerHTML = "";
        sucsess.style.display = "none";
      }, 2000);
    });
});

//////////////////////// Маска телефона

let phoneMask = IMask(document.getElementById("form__tel"), {
  mask: "+{7}(000)000-00-00",
});
////////////////




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

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
gsap.from(".aboutMe__text", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".aboutMe__text",
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

gsap.from(".aboutMe__item1", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".aboutMe__item1",
    scrub: 1,
  },
});
gsap.from(".aboutMe__item2", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".aboutMe__item2",
    scrub: 1,
  },
});
gsap.from(".aboutMe__item3", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".aboutMe__item3",
    scrub: 1,
  },
});
gsap.from(".aboutMe__item4", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".aboutMe__item4",
    scrub: 1,
  },
});
gsap.from(".swiper", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".swiper",
    scrub: 1,
  },
});
gsap.from(".price__item-1", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".price__item-1",
    scrub: 1,
  },
});
gsap.from(".price__item-2", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".price__item-2",
    scrub: 1,
  },
});
gsap.from(".price__item-3", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".price__item-3",
    scrub: 1,
  },
});
gsap.from(".price__item-4", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".price__item-4",
    scrub: 1,
  },
});
gsap.from(".price__item-5", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".price__item-5",
    scrub: 1,
  },
});
gsap.from(".covers__item-1", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".covers__item-1",
    scrub: 1,
  },
});
gsap.from(".covers__item-2", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: "center bottom",
    end: "+=50",
    trigger: ".covers__item-2",
    scrub: 1,
  },
});

const swiper = new Swiper(".swiper", {
  // effect: "cube",
  loop: true,
  autoplay: true,

  /*  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, */
});

const educationID = document.getElementById("educationID");
const diplomaID = document.getElementById("diplomaID");
const coversID = document.getElementById("coversID");
/* const repertoireID = document.getElementById("repertoireID"); */
const priceID = document.getElementById("priceID");
const aboutMeID = document.getElementById("aboutMeID");

/* const itemlLinkRepertoireID = document.querySelector(
  ".item__link-repertoireID"
); */
const itemlLinkeducationID = document.querySelector(".item__link-educationID");
const itemLinkDiplomaID = document.querySelector(".item__link-diplomaID");
const itemLinkCoversID = document.querySelector(".item__link-coversID");
const itemLinkPriceID = document.querySelector(".item__link-priceID");
const itemLinkAboutMeID = document.querySelector(".item__link-aboutMeID");

const burger = document.querySelector(".burger");
const list = document.querySelector(".list");

itemlLinkeducationID.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.remove("lock");

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#educationID", ease: "power1" },
  });
  burger.classList.remove("active");
  list.classList.remove("active");
});
itemLinkDiplomaID.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.remove("lock");

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#diplomaID", ease: "power1" },
  });
  burger.classList.remove("active");
  list.classList.remove("active");
});
itemLinkCoversID.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.remove("lock");

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#coversID", ease: "power1" },
  });
  burger.classList.remove("active");
  list.classList.remove("active");
});
/* itemlLinkRepertoireID.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.remove("lock");

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#repertoireID", ease: "power4" },
  });
  burger.classList.remove("active");
  list.classList.remove("active");
}); */
itemLinkPriceID.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.remove("lock");

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#priceID", ease: "power4" },
  });
  burger.classList.remove("active");
  list.classList.remove("active");
});
itemLinkAboutMeID.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.remove("lock");

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#aboutMeID", ease: "power4" },
  });
  burger.classList.remove("active");
  list.classList.remove("active");
});

//////////////Buger//////////
(function () {
  const burger = document.querySelector(".burger");
  const list = document.querySelector(".list");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    list.classList.toggle("active");
    body.classList.toggle("lock");
  });
})();
document.addEventListener("touchstart", (e) => {
  let target = e.target;
  let its_list = target == list || list.contains(target);
  let its_burger = target == burger;
  let list_is_active = list.classList.contains("active");

  if (!its_list && !its_burger && list_is_active) {
    burger.classList.toggle("active");
    list.classList.toggle("active");
    body.classList.toggle("lock");
  }
});
//////////////Buger//////////