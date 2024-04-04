import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000 
    });
});