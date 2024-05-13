// click hambtn
const hambtn = document.querySelector('.hamBtn')
const navbar = document.querySelector('.navbar')
hambtn.addEventListener('click', () => {
    navbar.classList.toggle('-translate-y-4');
    navbar.classList.toggle("opacity-0")
})