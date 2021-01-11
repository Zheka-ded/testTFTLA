const rightBtn = document.querySelector('.right__btn');
const nav = document.querySelector('.right__nav');

rightBtn.onclick = function() {
    rightBtn.classList.toggle('right__btn-active')
    nav.classList.toggle('right__nav-active')
}