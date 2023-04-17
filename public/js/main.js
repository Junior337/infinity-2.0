
/*navbar*/
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

/*slide container 1*/
const carousel = document.querySelector("#anime-1"),

    firstImg = carousel.querySelectorAll("img")[0];

arrowIcons = document.querySelectorAll("#slide-1 i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;



const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 15;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);

    });
});

const autoSlide = () => {
    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 15;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -  positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -  positionDiff;
}

const dragStart = (e) => {
    //
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragging);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);




/*slide container 2*/
const carousel2 = document.querySelector("#anime-2"),

    firstImg2 = carousel2.querySelectorAll("img")[0];

arrowIcons2 = document.querySelectorAll("#slide-2 i");

let isDragStart2 = false, isDragging2 = false, prevPageX2, prevScrollLeft2, positionDiff2;



const showHideIcons2 = () => {
    let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth;
    arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    arrowIcons2[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg2.clientWidth + 15;
        carousel2.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons2(), 60);

    });
});

const autoSlide2 = () => {
    if (carousel2.scrollLeft == (carousel2.scrollWidth - carousel2.clientWidth)) return;

    positionDiff2 = Math.abs(positionDiff2);
    let firstImgWidth = firstImg2.clientWidth + 15;
    let valDifference = firstImgWidth - positionDiff2;

    if (carousel2.scrollLeft > prevScrollLeft2) {
        return carousel2.scrollLeft += positionDiff2 > firstImgWidth / 3 ? valDifference : -  positionDiff2;
    }
    carousel2.scrollLeft -= positionDiff2 > firstImgWidth / 3 ? valDifference : -  positionDiff2;
}

const dragStart2 = (e) => {
    //
    isDragStart2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    //
    if (!isDragStart2) return;
    e.preventDefault();
    isDragging2 = true;
    carousel2.classList.add("dragging");
    positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    showHideIcons2();
}

const dragStop2 = () => {
    isDragStart2 = false;
    carousel2.classList.remove("dragging");

    if (!isDragging2) return;
    isDragging2 = false;
    autoSlide2();
}



/*slide container 3*/
const carousel3 = document.querySelector("#anime-3"),

    firstImg3 = carousel2.querySelectorAll("img")[0];

arrowIcons3 = document.querySelectorAll("#slide-3 i");

let isDragStart3 = false, isDragging3 = false, prevPageX3, prevScrollLeft3, positionDiff3;



const showHideIcons3 = () => {
    let scrollWidth = carousel3.scrollWidth - carousel3.clientWidth;
    arrowIcons3[0].style.display = carousel3.scrollLeft == 0 ? "none" : "block";
    arrowIcons3[1].style.display = carousel3.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons3.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg3.clientWidth + 15;
        carousel3.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons3(), 60);

    });
});

