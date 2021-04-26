@@include('jQuery.js')
@@include('slick.js')



// JS-функция определения поддержки WebP. Если поддерживает webp, то в css добавится webp формат

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


// =========== main-slider ===============

$('.main-slider__inner').slick({
    infinite: true,
    speed: 2000,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    touchMove: false,
    swipe: true,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    // fade: true,
    dotsClass: "main-slider__numbers-container",
    prevArrow: $('.main-slider__prev'),
    nextArrow: $('.main-slider__next'),

});


// =========== goods-slider ===============
$('.goods__slider').slick({
    infinite: true,
    speed: 2000,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    touchMove: false,
    swipe: true,
    pauseOnFocus: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    dotsClass: "goods__slider__numbers-container",
    prevArrow: $('.goods__slider__prev'),
    nextArrow: $('.goods__slider__next'),

});



// ===============bread-crumbs==================


// bread-crumbs__item_active

let breadCrumbsActive = document.querySelector('.bread-crumbs__item_active');

breadCrumbsActive.onclick = (evt) => {
    evt.preventDefault();
}

