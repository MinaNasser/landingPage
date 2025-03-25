 // Initialize Swiper for each service section
 const swiperConfigs = [
    { el: '.tiktok-swiper', name: 'tiktok' },
    { el: '.twitter-swiper', name: 'twitter' },
    { el: '.instagram-swiper', name: 'instagram' },
    { el: '.youtube-swiper', name: 'youtube' },
    { el: '.google-maps-swiper', name: 'google-maps' },
    // { el: '.swiper-container', name: 'swiper-slide' },
];

swiperConfigs.forEach(config => {
    new Swiper(config.el, {
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: `${config.el} .swiper-pagination`,
            clickable: true
        },
        navigation: {
            nextEl: `${config.el} .swiper-button-next`,
            prevEl: `${config.el} .swiper-button-prev`,
        },
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        },
    });
});
const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,  // يظهر 3 تقييمات في نفس الوقت
    spaceBetween: .5,  // المسافة بين التقييمات
    centeredSlides: true,  // يجعل العنصر النشط في المنتصف
    loop: true,
    autoplay: {
        delay: 3000,  // مدة عرض كل تقييم قبل الانتقال
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




