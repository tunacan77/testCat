var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        576: {  //螢幕寬度大於等於576
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {  //螢幕寬度大於等於992 
            slidesPerView: 3,
            spaceBetween: 30
        },
        1280: {  //螢幕寬度大於等於1280
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
