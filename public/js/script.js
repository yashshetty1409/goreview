const open = document.getElementById("sign_in");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("active");
});

close.addEventListener("click", () => {
    container.classList.remove("active");
});
const open1 = document.getElementById("sign_up");
const close1 = document.getElementById("close1");
const container1 = document.getElementById("container1");
open1.addEventListener("click", () => {
    container1.classList.add("active");
});

close1.addEventListener("click", () => {
    container1.classList.remove("active");
});
