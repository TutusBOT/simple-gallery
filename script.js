const btn = document.getElementsByClassName("btn")[0];
const more = document.getElementsByClassName("more");
console.log(more[0]);
btn.addEventListener("click", () => {
    more[0].classList.add('active')
    more[1].classList.add('active')
    more[2].classList.add('active')
    btn.style.display = "none";
})