// إعدادات خاصة لكل Swiper حسب القسم
const swiperConfigs = [
    { el: '.tiktok-swiper', name: 'tiktok', effect: 'creative' },
    { el: '.twitter-swiper', name: 'twitter', effect: 'creative' },
    { el: '.instagram-swiper', name: 'instagram', effect: 'creative' },
    { el: '.youtube-swiper', name: 'youtube', effect: 'creative' },
    { el: '.google-maps-swiper', name: 'google-maps', effect: 'creative' },
    { el: '.testimonials-swiper', name: 'testimonials', effect: 'slide' }, // هنا جعلنا تأثير التقييمات عادي بدون creative
];

// تهيئة جميع Swiper بناءً على الإعدادات
swiperConfigs.forEach(config => {
    new Swiper(config.el, {
        slidesPerView: 1,  // عدد الشرائح الظاهرة في كل مرة
        spaceBetween: 10,  // المسافة بين الشرائح
        centeredSlides: true,  // جعل العنصر النشط في المنتصف
        loop: true,
        autoplay: {
            delay: 3000,  // مدة عرض كل تقييم قبل الانتقال
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
        effect: config.effect, // تعيين التأثير بناءً على نوع الـ Swiper
        creativeEffect: config.effect === 'creative' ? { // إذا كان Creative فقط، طبّق هذه الإعدادات
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        } : {}, // إذا لم يكن Creative، لا تطبق أي تأثير خاص
    });
});
