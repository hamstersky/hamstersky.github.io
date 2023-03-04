const readMores = document.getElementsByClassName("read-more");
const overlays = document.getElementsByClassName("overlay");
const projects = document.querySelectorAll(".project");
const dots = document.querySelectorAll(".dot");

const toggleOverlay = () => {
  document.querySelector(".overlay.active_overlay").classList.toggle("hidden");
};

const toggleActiveOverlay = () => {
  document
    .querySelector(".overlay.active_overlay")
    .classList.remove("active_overlay");
  document
    .querySelector(".project.active > .overlay")
    .classList.add("active_overlay");
};

const getChildIndex = (node) => {
  return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
};

const showProject = (e) => {
  const currentDot = document.querySelector(".active_dot");
  currentDot.classList.remove("active_dot");
  const currentProject = document.querySelector(".project.active");
  currentProject.classList.remove("active");

  const index = getChildIndex(e.target);
  dots[index - 1].classList.add("active_dot");
  projects[index - 1].classList.add("active");
};

const nextDot = () => {
  const current = document.querySelector(".active_dot");
  current.classList.remove("active_dot");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("active_dot");
  } else {
    dots[0].classList.add("active_dot");
  }
};

const prevDot = () => {
  const current = document.querySelector(".active_dot");
  current.classList.remove("active_dot");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("active_dot");
  } else {
    dots[dots.length - 1].classList.add("active_dot");
  }
};

const nextProject = () => {
  const current = document.querySelector(".project.active");
  current.classList.remove("active");
  console.log(current);
  if (current.nextElementSibling) {
    console.log("here");
    current.nextElementSibling.classList.add("active");
  } else {
    projects[0].classList.add("active");
  }
  nextDot();
  toggleActiveOverlay();
};

const prevProject = () => {
  const current = document.querySelector(".project.active");
  current.classList.remove("active");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("active");
  } else {
    projects[projects.length - 1].classList.add("active");
  }
  prevDot();
  toggleActiveOverlay();
};

const next = document.querySelector("#next");
next.addEventListener("click", nextProject);

const prev = document.querySelector("#prev");
prev.addEventListener("click", prevProject);

document
  .querySelectorAll(".overlay")
  .forEach((overlay) => overlay.addEventListener("click", toggleOverlay));

for (let i = 0; i < readMores.length; i++) {
  readMores[i].addEventListener("click", toggleOverlay);
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", showProject);
}
