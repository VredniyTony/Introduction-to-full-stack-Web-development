$(document).ready(function(){
    $('.header_link').on('click', function(event) {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 400, function(){
            window.location.hash = hash;
        });
    });

    if ($('#to_top').length) {
        let toTop = function () {
            let scrollTop = $ (window).scrollTop();
            if (scrollTop > 10) {
                $('#to_top').addClass('show');
            } else {
                $('#to_top').removeClass('show');
            }
        };
        toTop ();
        $(window).on('scroll', function(){
            toTop ();
        } );
        $('#to_top').on ('click', function(event){
            event.preventDefault ();
            $('html,body').animate({
                scrollTop: 0
            }, 400);
        } );
    }
});