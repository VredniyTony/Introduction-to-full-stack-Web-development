$(document).ready(function() {
    const FRIENDS_LIST = [
        {name: 'Vika', img: 'female'},
        {name: 'Nikolay', img: 'male'},
        {name: 'Sveta', img: 'female'},
        {name: 'Dmitriy', img: 'male'},
        {name: 'Anatoliy', img: 'male'},
        {name: 'Nastya', img: 'female'},
        {name: 'Max', img: 'male'}
    ];

    const dropDownHeader = $('#dropDownHeader');
    const dropDownMenu = $('#dropDownMenu');

    const createUser = function (total, currentValue) {
        $('<button></button>').appendTo(dropDownMenu)
            .attr('class', 'userButton')
            .append($('<img>')
                .attr('class', 'userImg')
                .attr('src', `assets/images/${currentValue.img}.ico`))
            .append($('<p></p>')
                .attr('class', 'userName')
                .text(currentValue.name));
    };

    const createDropDown = function (){
        FRIENDS_LIST.reduce(createUser);
    };
    createDropDown();

    dropDownHeader.click(function () {
        dropDownMenu.slideToggle('400', function () {
            dropDownMenu.clearQueue();
        })
    });

    dropDownHeader.blur(function () {
        dropDownMenu.slideUp('400')
    });

    $('.userButton').click(function () {
        const userImageHeader = $('#userImgHeader');
        const ico = $(this).find('img').attr('src');
        const text = $(this).find('p').text();
        userImageHeader.length ?
            (userImageHeader.attr('src', `${ico}`))
            : ($('<img>').appendTo($('#dropDownHeaderImg'))
                .attr('id', 'userImgHeader')
                .attr('src', `${ico}`));

        $('#dropDownText').text(text);

        dropDownMenu.slideUp('400', function () {
            dropDownMenu.clearQueue();
        })
    });
});