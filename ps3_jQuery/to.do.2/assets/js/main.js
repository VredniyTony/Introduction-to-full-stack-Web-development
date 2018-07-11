$(document).ready(function(){
    const page = $('html, body');
    const pageOn = function(){
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
            page.stop();
        });
    };
    const pageOff = function(){
        page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    };
    const scrollSpeed = 400;

    $('.header_link').click(function(event) {
        event.preventDefault();
        pageOn();
        const element = this.hash;
        const elementHeight = $(element).height();
        const windowHeight = $(window).height();
        if (elementHeight > windowHeight){
            page.animate({
                scrollTop: $(element).offset().top,
            }, scrollSpeed, function () {
                pageOff();
            });
        } else {
            page.animate({
                scrollTop: $(element).offset().top - windowHeight / 2 + elementHeight / 2
            }, scrollSpeed, function () {
                pageOff();
            });
        }
    });

    if ($('#to_top').length) {
        pageOn();
        const toTop = function () {
            if ($(window).scrollTop() > 10) {
                $('#to_top').addClass('show');
            } else {
                $('#to_top').removeClass('show');
            }
        };
        toTop ();
        $(window).scroll(function(){
            toTop ();
        } );
        $('#to_top').click(function(event){
            event.preventDefault ();
            page.animate({
                scrollTop: 0
            }, scrollSpeed, function () {
                pageOff();
            });
        } );
    }
});