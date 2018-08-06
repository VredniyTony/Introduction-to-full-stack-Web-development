const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
    '?image=1080',
    '?image=1079',
    '?image=1069',
    '?image=1063',
    '?image=1050',
    '?image=1039'
];

$(document).ready(function() {

    const slider_previews = $('.slider-previews');
    const slider_current = $('.slider-current img');

    IMAGES.map(function (total, currentValue) {
        slider_previews.append($("<li>")
            .append($('<img>')
                .attr('src', API_URL + SMALL_SIZE + IMAGES[currentValue])
                .data('index', currentValue)));
    });

    $('.slider-previews li').first().addClass("current");

    $('.slider-previews li img').click(function () {
        const link_index = $(this).data('index');
        slider_current.attr('src', API_URL + BIG_SIZE + IMAGES[link_index]);
        $(this).attr('src');
        $('.slider-previews li').removeClass("current");
        $('.slider-previews li:eq(link_index)').addClass("current");
    })

});

