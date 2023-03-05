const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  sidebar.classList.add("open");
  close.classList.remove("hidden");
  menu.classList.add("hidden");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("open");
  close.classList.add("hidden");
  menu.classList.remove("hidden");
});
