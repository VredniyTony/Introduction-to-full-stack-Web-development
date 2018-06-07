function createDropDown() {
  FRIENDS_LIST.reduce(createUser);
}

const FRIENDS_LIST = [
  {name: 'Vika', img: 'female'},
  {name: 'Nikolay', img: 'male'},
  {name: 'Sveta', img: 'female'},
  {name: 'Dmitriy', img: 'male'},
  {name: 'Anatoliy', img: 'male'},
  {name: 'Nastya', img: 'female'},
  {name: 'Max', img: 'male'}
]

$(document).ready(() => {
    $('#dropDown').click(function(){
      $('#dropDownMenu').slideDown('slow');
    });
    $('#dropDown').blur(function(){
      $('#dropDownMenu').slideUp('slow');
    });
    $('.users').click(function(){
      const text = $(this).text();
      const ico = $(this).find('img').attr('src');
      $('#dropDown').val(text);
      document.getElementById('img_header') === (null) ? createUserImg(ico) : $('#img_header').attr('src', ico);
    });
});

function filterFunction() {
    const input = document.getElementById('dropDown');
    const filter = input.value.toUpperCase();
    const div = document.getElementById('dropDownMenu');
    const button = div.getElementsByTagName('button');
    const p = div.getElementsByTagName('p');
    for (let i = 0; i < p.length; i++) {
        if (p[i].innerHTML.toUpperCase().indexOf(filter) >= 0) {
            button[i].style.display = '';
        } else {
            button[i].style.display = 'none';
        }
    }
}

function createUserImg(src) {
  const div = document.getElementById('user_img_header');
  const ico = document.createElement('img');
  ico.setAttribute('id', 'img_header');
  ico.setAttribute('src', src);
  div.appendChild(ico);
}

function createUser(total, currentValue) {
  const drop_down = document.getElementById('dropDownMenu');
  const elem = document.createElement('button');
  elem.setAttribute('class', 'users');
  drop_down.appendChild(elem);
  const user_img = document.createElement('img');
  user_img.setAttribute('class', 'user_img');
  user_img.setAttribute('src', `assets/images/${currentValue.img}.ico`);
  elem.appendChild(user_img);
  const user_name = document.createElement('p');
  user_name.setAttribute('class', 'user_name');
  user_name.innerText = currentValue.name;
  elem.appendChild(user_name);
}
