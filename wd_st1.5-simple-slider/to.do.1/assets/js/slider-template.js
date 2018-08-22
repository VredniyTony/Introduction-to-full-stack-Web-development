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

$(function () {
    const slider_previews = $('.slider-previews');
    const slider_current = $('.slider-current img');
    const images_length = IMAGES.length - 1;

    const create_slider_preview = function(){
        const list_of_li =IMAGES.reduce(function (accumulator, currentValue) {
            const new_element = `<li><img src="${API_URL}${SMALL_SIZE}${currentValue}"></li>`;
            return accumulator + new_element;
        }, "");
        slider_previews.append(list_of_li);
        slider_previews.find('li').first().addClass('current');
    };
    create_slider_preview();

    slider_previews.find('img').click(function() {
        change_slider_current($(this).parent().index());
    });

    $(document).keydown(function(event) {
        arrow_control(event);
    });

    function change_slider_current(index) {
        slider_previews.find('li').removeClass('current')
            .eq(index).addClass('current');
        slider_current.attr('src', API_URL + BIG_SIZE + IMAGES[index]);
    }

    function arrow_control(event) {
        let li_current = slider_previews.find('li.current').index();
        switch (event.which) {
            case 37: li_current === 0 ? li_current = images_length : li_current -=1; break;
            case 39: li_current === images_length ? li_current = 0 : li_current +=1
        }
        change_slider_current(li_current);
    }
});
