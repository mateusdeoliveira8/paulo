const btnmobile = document.getElementById("btn-mobile");
function togglemenu(event) {
  if (event.type === "touchstart") event.preventDefaul();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
btnmobile.addEventListener("click", togglemenu);
btnmobile.addEventListener("touchstart", togglemenu);
