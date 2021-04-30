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


//=========== header================


// ==========custom-lang============

let customSelect = document.querySelector('.custom-select');
let selectCurrentWrapper = document.querySelector('.custom-select__current-wrapper');
let selectCurrent = document.querySelector('.custom-select__current');
let selectOptions = document.querySelectorAll('.custom-select__option-wrapper');


selectCurrentWrapper.onclick = () => {
    customSelect.classList.toggle('custom-select_active');
}

function selectOptionClick(item) {
    item.onclick = function () {
        let optionValue = item.querySelector('.custom-select__option').textContent;
        selectCurrent.textContent = optionValue;
        customSelect.classList.remove('custom-select_active');
    };

}

for (let i = 0; i < selectOptions.length; i++) {
    selectOptionClick(selectOptions[i]);
}


// ==========select-lang============

let langSelect = document.querySelector('.lang-select');
let langSelectCurrentWrapper = document.querySelector('.lang-select__current-wrapper');
let langSelectCurrent = document.querySelector('.lang-select__current');
let langSelectOptions = document.querySelectorAll('.lang-select__option-wrapper');

langSelectCurrentWrapper.onclick = () => {
    langSelect.classList.toggle('lang-select_active');
}

function selectLangOptionClick(item) {
    item.onclick = function () {
        let optionValue = item.querySelector('.lang-select__option').innerHTML;
        langSelectCurrent.innerHTML = optionValue;
        langSelect.classList.remove('lang-select_active');
    };

}

for (let i = 0; i < langSelectOptions.length; i++) {
    selectLangOptionClick(langSelectOptions[i]);
}









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
    arrows: false,
    dots: false,
    // fade: true,
    asNavFor: '.main-slider__nav-slider-inner',
    responsive: [{
            breakpoint: 481,
            settings: {
                asNavFor: null,
                dots: true,
                arrows: true,
                prevArrow: $('.main-slider__mobile-prev'),
                nextArrow: $('.main-slider__mobile-next'),
                dotsClass: 'main-slider__dots-container',

            }
        },
    ]


});


$('.main-slider__nav-slider-inner').slick({
    infinite: true,
    speed: 2000,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    touchMove: false,
    swipe: true,
    pauseOnFocus: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    autoplay: false,
    focusOnSelect: true, // для переключения на слайд по нажатию
    prevArrow: $('.main-slider__nav-prev'),
    nextArrow: $('.main-slider__nav-next'),
    asNavFor: '.main-slider__inner',
    responsive: [{
        breakpoint: 481,
        settings: 'unslick',
    },
    ]


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
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    asNavFor: '.goods__nav-slider-inner',
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
        },
        breakpoint: 481,
        settings: {
            slidesToShow: 2,
            asNavFor: null,
            dots: true,
            arrows: true,
            prevArrow: $('.goods__mobile-prev'),
            nextArrow: $('.goods__mobile-next'),
            dotsClass: 'goods__dots-container',

        }
    },
    ]

});


$('.goods__nav-slider-inner').slick({
    infinite: true,
    speed: 2000,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    touchMove: false,
    swipe: true,
    pauseOnFocus: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: false,
    arrows: true,
    focusOnSelect: true, // для переключения на слайд по нажатию
    prevArrow: $('.goods__nav-prev'),
    nextArrow: $('.goods__nav-next'),
    asNavFor: '.goods__slider',
    responsive: [{
        breakpoint: 481,
        settings: 'unslick',
    },
    ]


});





$('.goods-catalog__nav-slider-inner').slick({
    infinite: true,
    speed: 2000,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    touchMove: false,
    swipe: true,
    pauseOnFocus: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    autoplay: false,
    focusOnSelect: true, // для переключения на слайд по нажатию
    prevArrow: $('.goods-catalog__nav-prev'),
    nextArrow: $('.goods-catalog__nav-next'),

});



// ===============bread-crumbs==================


// bread-crumbs__item_active

let breadCrumbsActive = document.querySelector('.bread-crumbs__item_active');

if (breadCrumbsActive) {
    breadCrumbsActive.onclick = (evt) => {
        evt.preventDefault();
    }

}



// =========== advantages-slider ===============

$('.advantages-slider__inner').slick({
    infinite: true,
    speed: 2000,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    touchMove: false,
    swipe: true,
    pauseOnFocus: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    asNavFor: '.advantages-slider__nav-slider-inner',

});



$('.advantages-slider__nav-slider-inner').slick({
    infinite: true,
    speed: 2000,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    touchMove: false,
    swipe: true,
    pauseOnFocus: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    focusOnSelect: true, // для переключения на слайд по нажатию
    prevArrow: $('.advantages-slider__nav-prev'),
    nextArrow: $('.advantages-slider__nav-next'),
    asNavFor: '.advantages-slider__inner',


});