$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        vertical: true,
        dotsClass: 'slider__dots',
    });
});


$('.news').slick({
    arrows: true,
    dots: true,
    dotsClass: 'news-dots',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    // centerMode: true,
});