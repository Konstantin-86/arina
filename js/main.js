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
function findVideos() {
  let videos = document.querySelectorAll(".video");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let media = video.querySelector(".video__media");
  let button = video.querySelector(".video__button");
  let id = parseMediaURL(media);

  video.addEventListener("click", () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute("href");
  video.classList.add("video--enabled");
}

function parseMediaURL(media) {
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");

  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}

findVideos();

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