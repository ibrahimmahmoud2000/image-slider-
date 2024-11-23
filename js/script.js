let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slideCount = sliderImages.length;

let currantSlide = 1;
let sliderNumber = document.getElementById("slide-number");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

const paginationList = document.createElement("ul");
paginationList.id = "pagination-ul";

for (let i = 1; i <= slideCount; i++) {
  const paginationItem = document.createElement("li");
  paginationItem.dataset.index = i;
  paginationItem.textContent = i;
  paginationList.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationList);

let paginationCreateUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0 ; i < paginationBullets.length; i++) {
  paginationBullets[i].addEventListener("click", (e) => {
    currantSlide = e.target.dataset.index;
    theChecker();
  });
}
theChecker();
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  }else {
    currantSlide ++;
  theChecker();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
}else{
    currantSlide --;
  theChecker();
}
}
function theChecker() {
  sliderNumber.textContent = "slide " + currantSlide + " of " + slideCount;

  removeAllActives();

  sliderImages[currantSlide - 1].classList.add("active");

  paginationCreateUl.children[currantSlide - 1].classList.add("active");

  if (currantSlide == 1) {
    prevBtn.classList.add("disabled");
} else {
    prevBtn.classList.remove("disabled");
}
if (currantSlide == slideCount) {
    nextBtn.classList.add("disabled");
} else {
    nextBtn.classList.remove("disabled");
}
}

function removeAllActives() {
  sliderImages.forEach((image) => {
    image.classList.remove("active");
  });
  paginationBullets.forEach((bullets) => {
    bullets.classList.remove("active");
  });
}
