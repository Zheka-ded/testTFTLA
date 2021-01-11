
const swipSlideActive = 'swip__slide-active';
const swipSlideNext = 'swip__slide-next';
const swipSlidePrev = 'swip__slide-prev';
const swipSlideTextActive = 'swip__slide-text-active';

const body = document.querySelector('body');

const slideAll = document.querySelectorAll('.swip__slide');
const slideTextAll = document.querySelectorAll('.swip__slide-text');


const dragMe = document.querySelector('.drag-me')

slideAll[0].classList.add(swipSlidePrev)
slideAll[1].classList.add(swipSlideActive)
slideTextAll[1].classList.add(swipSlideTextActive)
slideAll[2].classList.add(swipSlideNext)

let startMove = 0;
let endMove = 0;

slideAll.forEach( function (elem) {

    elem.addEventListener('mousedown', startCoord);
    elem.addEventListener('touchstart', startTouchCoord);

    elem.addEventListener('mouseup', endCoord);
    elem.addEventListener('touchend', endTouchCoord);

    elem.addEventListener('mouseup', check);
    elem.addEventListener('touchend', check);

})

function startCoord (e) {
    startMove = e.clientX;
}

function endCoord (e) {
    endMove = e.clientX;
}

function startTouchCoord (e) {
    startMove = Math.round(e.changedTouches[0].clientX);
}

function endTouchCoord (e) {
    endMove = Math.round(e.changedTouches[0].clientX);
}

function check () {
    let res = startMove - endMove;

    if(res > 0) {
        slideNextFunk(slideTextAll, swipSlideTextActive, 1);
        slideNextFunk(slideAll, swipSlideActive, 2);
        slideNextFunk(slideAll, swipSlidePrev, 2);
        slideNextFunk(slideAll, swipSlideNext, 2);
    }
    if(res < 0) {
        slidePrevFunk(slideTextAll, swipSlideTextActive, 1);
        slidePrevFunk(slideAll, swipSlideActive, 2);
        slidePrevFunk(slideAll, swipSlidePrev, 2);
        slidePrevFunk(slideAll, swipSlideNext, 2);
    }
}

body.onmousemove = function(e){

    let xCoord = e.clientX;
    let yCoord = e.clientY;

    let imgActive = document.querySelector('.swip__slide-active')
    let imgNext = document.querySelector('.swip__slide-next')
    let imgPrev = document.querySelector('.swip__slide-prev')


    moveImg(xCoord, yCoord, imgActive, 50)
    moveImg(xCoord, yCoord, imgNext, 35)
    moveImg(xCoord, yCoord, imgPrev, 42)
    
    if(e.target.classList[2] === swipSlideActive || e.target.classList[1] === swipSlideTextActive) {

        dragMe.classList.add('drag-me-active')
        dragMe.style.left = `${xCoord + 15}px`
        dragMe.style.top = `${yCoord - 15}px`

    } else {
        dragMe.classList.remove('drag-me-active')
    } 

}

function moveImg (x, y, img, speed) {

    if(img !== img) return

    x = Math.round(x / speed)
    y = Math.round(y / speed + 5)

    if(img.children[0].classList[1] === swipSlideTextActive) {
        img.children[0].style.transform = `rotate(0deg) translate(${50 + (x/10)}%, -${50 + (y/5)}%)`
    }
    
    img.style.transform = `translate(${x}px, ${y}px)`;
    img.style.transition = `0.1s all ease`;
}

function slideNextFunk (arr, cssClass, indexCssClass) {

    for(let i = 0; i < arr.length; i++){
        
        arr[i].removeAttribute('style')

        if(arr[i].classList[indexCssClass] === cssClass) {

            arr[i].classList.remove(cssClass);
            i += 1;
    
            if(i === arr.length) i = 0;
            arr[i].classList.add(cssClass);
        }
    }
    
}

function slidePrevFunk (arr, cssClass, indexCssClass) {

    for(let i = 0; i < arr.length; i++){

        arr[i].removeAttribute('style')

        if(arr[i].classList[indexCssClass] === cssClass) {

            arr[i].classList.remove(cssClass);
            i -= 1;
    
            if(i === -1) i = arr.length - 1;
            arr[i].classList.add(cssClass);
        }
    }
    
}
const rightBtn = document.querySelector('.right__btn');
const nav = document.querySelector('.right__nav');

rightBtn.onclick = function() {
    rightBtn.classList.toggle('right__btn-active')
    nav.classList.toggle('right__nav-active')
}