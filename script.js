const homeBtn = document.querySelector(".nav-icon");
const toggle = document.querySelector(".nav-toggle");
const pageLinks = document.querySelectorAll(".nav-link");
const homeContactBtn = document.querySelector(".home-btn");
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelector(".nav-links");



// Functions
const updatePages = () => {
  pagesToRight = pageArr.slice(currentPage + 1);
  pagesToLeft = pageArr.slice(0, currentPage);
};

const movePages = () => {
  for (let page of pagesToRight) {
    page.style.transform = "translateX(100%)";

    page.style.display = "none";
  }
  for (let page of pagesToLeft) {
    page.style.transform = "translateX(-100%)";
    page.style.display = "none";
  }
};

const showCurrentPage = () => {

  if (
    pageArr[currentPage].className === "contact page" ||
    pageArr[currentPage].className === "home page" ||
    pageArr[currentPage].className === "projects page"
  ) {
    pageArr[currentPage].style.display = "flex";
  } else {
    pageArr[currentPage].style.display = "block";
  }
  setTimeout(() => {
    pageArr[currentPage].style.transform = "translateX(0)";
  }, 200);
};
///////////////////////////////////////////////////////////////////

let currentPage = 0;
const pageArr = [];

pages.forEach((page) => {
  pageArr.push(page);
});

let pagesToRight = pageArr.slice(currentPage + 1);
let pagesToLeft = pageArr.slice(0, currentPage);
movePages();

// Event Listeners
homeBtn.addEventListener("click", () => {
  currentPage = 0;
  updatePages();
  movePages();
  showCurrentPage();
});

homeContactBtn.addEventListener("click", () => {
  currentPage = 4;
  updatePages();
  movePages();
  showCurrentPage();
});

pageLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (navLinks.className !== "nav-links") {
      navLinks.className = "nav-links";
    }
    currentPage = idx;
    updatePages();
    movePages();
    showCurrentPage();
  });
});

toggle.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (navLinks.className === "nav-links") return;
  if (
    e.target.parentElement === toggle ||
    e.target.parentElement.parentElement === navLinks
  )
    return;
  navLinks.classList.remove("active");
});
