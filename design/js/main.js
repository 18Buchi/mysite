"use strict";
{
  const images = [
    "img/sample0.png",
    "img/sample1.png",
    "img/sample2.png",
    "img/sample3.png",
    "img/sample4.png",
    "img/sample5.png",
    "img/sample6.png",
    "img/sample7.png",
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById("main");
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;

    const li = document.createElement("li");

    if (index === currentIndex) {
      li.classList.add("current");
    }
    li.addEventListener("click", () => {
      mainImage.src = image;
      const thumbnailes = document.querySelectorAll(".thumbnailes > li");
      thumbnailes[currentIndex].classList.remove("current");
      currentIndex = index;
      thumbnailes[currentIndex].classList.add("current");
    });
    li.appendChild(img);
    document.querySelector(".thumbnailes").appendChild(li);
  });
  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll(".thumbnailes > li")[target].click();
  });

  const prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll(".thumbnailes > li")[target].click();
  });

  let timeOutId;

  function playSlideshow() {
    timeOutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  let isPlaying = false;

  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = "pause";
    } else {
      clearTimeout(timeOutId);
      play.textContent = "Slideshow";
    }
    isPlaying = !isPlaying;
    console.log(isPlaying);
  });

}

