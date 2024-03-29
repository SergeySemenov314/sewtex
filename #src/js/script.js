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

let customSelects = document.querySelectorAll('.custom-select');

for (let i = 0; i < customSelects.length; i++) {
    customSelectClick(customSelects[i]);
}

function customSelectClick(select) {
    select.onclick = function () {
        select.classList.toggle('custom-select_active');
    }

    let selectCurrentWrapper = select.querySelector('.custom-select__current-wrapper');
    let selectCurrent = select.querySelector('.custom-select__current');
    let selectOptions = select.querySelectorAll('.custom-select__option-wrapper');


  

    function selectOptionClick(item) {
        item.onclick = function (select) {
            let optionValue = item.querySelector('.custom-select__option').textContent;
            selectCurrent.textContent = optionValue;
        };

    }

    for (let i = 0; i < selectOptions.length; i++) {
        selectOptionClick(selectOptions[i], select);
    }
}




// ==========select-lang============

let langSelects = document.querySelectorAll('.lang-select');

for (let i = 0; i < langSelects.length; i++) {
    langSelectClick(langSelects[i]);
}



function langSelectClick(select) {
    let langSelectCurrentWrapper = select.querySelector('.lang-select__current-wrapper');
    let langSelectCurrent = select.querySelector('.lang-select__current');
    let langSelectOptions = select.querySelectorAll('.lang-select__option-wrapper');
    
    langSelectCurrentWrapper.onclick = () => {
        select.classList.toggle('lang-select_active');
    }
    
    function selectLangOptionClick(item) {
        item.onclick = function () {
            let optionValue = item.querySelector('.lang-select__option').innerHTML;
            langSelectCurrent.innerHTML = optionValue;
            select.classList.remove('lang-select_active');
        };
    
    }
    
    for (let i = 0; i < langSelectOptions.length; i++) {
        selectLangOptionClick(langSelectOptions[i]);
    }
    
}





// menu mobile header


const menuToggles = document.querySelectorAll('.menu-burger__switcher');

const menuLayout = document.querySelector('.header__mobile-menu-layout');


const mobileMenu = document.querySelector('.header__mobile-menu');

const menuNavLinks = mobileMenu.querySelectorAll('.header__nav-link');

function menuToggleClick(toggle) {
    toggle.onclick = function () {
        menuLayout.classList.toggle('header__mobile-menu-layout_active');
        mobileMenu.classList.toggle('header__mobile-menu_active');
    }
}

for (let i = 0; i < menuToggles.length; i++) {
    menuToggleClick(menuToggles[i]);
}


function menuNavClick(linkElem) {
    linkElem.onclick = function () {
        menuLayout.classList.toggle('header__mobile-menu-layout_active');
        mobileMenu.classList.toggle('header__mobile-menu_active');
        

    };

}

for (let i = 0; i < menuNavLinks.length; i++) {
    menuNavClick(menuNavLinks[i]);
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
    }, ]


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
    }, ]


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
    }, ]

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
    autoplay: true,
    arrows: true,
    focusOnSelect: true, // для переключения на слайд по нажатию
    prevArrow: $('.goods__nav-prev'),
    nextArrow: $('.goods__nav-next'),
    asNavFor: '.goods__slider',
    responsive: [{
        breakpoint: 481,
        settings: 'unslick',
    }, ]


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


// ==================mobile-filters=======================

const btnOpen = document.querySelector('.goods-catalog__filter-btn');
const filterLayout = document.querySelector('.filter-mobile-layout');
const filterMobile = document.querySelector('.filter-mobile');
const filterCross = document.querySelector('.filter-mobile__cross');

if(btnOpen && filterCross) {
    btnOpen.onclick = function() {
        filterLayout.classList.add('filter-mobile-layout_active');
        filterMobile.classList.add('filter-mobile_active');
    }
    
    filterCross.onclick = function() {
        filterLayout.classList.remove('filter-mobile-layout_active');
        filterMobile.classList.remove('filter-mobile_active');
    }

}






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
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    asNavFor: '.advantages-slider__nav-slider-inner',
    responsive: [{
        breakpoint: 481,
        settings: 'unslick',
    }, ]

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
    responsive: [{
        breakpoint: 481,
        settings: 'unslick',
    }, ]


});

if (window.matchMedia("(max-width: 480px)").matches) {

    let advantagesSlider = document.querySelector('.advantages-slider__inner');
    let slidesAdvantages = document.querySelectorAll('.advantages-slider-slide');

    let firstSlides = [slidesAdvantages[0], slidesAdvantages[1]];

    advantagesSlider.innerHTML = "";

    for (let slide of firstSlides) {
        advantagesSlider.append(slide);
    }

}