$(document).ready(() => {
  $('#task1_button').on('click',() => {
    $('#task1_dropdown').slideToggle('slow');
    });
  $('#task2_button').on('click',() => {
    $('#task2_dropdown').slideToggle('slow');
    });
  $('#task3_button').on('click',() => {
    $('#task3_dropdown').slideToggle('slow');
    });
  $('#task4_button').on('click',() => {
    $('#task4_dropdown').slideToggle('slow');
    });
  $('#task5_button').on('click',() => {
    $('#task5_dropdown').slideToggle('slow');
    });
  $('#task6_button').on('click',() => {
    $('#task6_dropdown').slideToggle('slow');
    });
  $('#task7_button').on('click',() => {
    $('#task7_dropdown').slideToggle('slow');
    });
  $('#task8_button').on('click',() => {
    $('#task8_dropdown').slideToggle('slow');
    });
  $('#task9_button').on('click',() => {
    $('#task9_dropdown').slideToggle('slow');
    });
  $('#task10_button').on('click',() => {
    $('#task10_dropdown').slideToggle('slow');
    });
  $('#task11_button').on('click',() => {
    $('#task11_dropdown').slideToggle('slow');
  });
});

function clearDiv(taskForClear){
    const ELEM = document.getElementById(taskForClear);
    ELEM !== null ? (ELEM.remove()):(null);
}

function task1() {
    const TASK1RES = document.getElementById('task1result');
    clearDiv('divTask1Result');

    let sum = -1000;
    for (let i = -999; i <= 1000; i++){
        sum = sum + i;
    }

    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask1Result');
    TASK1RES.appendChild(RESULT);
    RESULT.innerText = `Результат: ${sum}`;
}

function task2() {
    const TASK2RES = document.getElementById('task2result');
    clearDiv('divTask2Result');

    let sum = 0;
    let tempNum;
    for (let i = -1000; i <= 1000; i++) {
        tempNum = Math.abs(i % 10);
        if ((tempNum === 2) || (tempNum === 3) || (tempNum === 7)) {
            sum = sum + i;
        }
    }

    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask2Result');
    TASK2RES.appendChild(RESULT);
    RESULT.innerText = `Результат: ${sum}`;
}

function task3() {
    const TASK3RES = document.getElementById('task3result');
    clearDiv('divTask3Result');

    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask3Result');
    TASK3RES.appendChild(RESULT);

    let i = 0, star = '', tempStar = '*';
    while(i <= 50){
        star += tempStar + '<br>';
        tempStar += '*';
        i++;
    }
    RESULT.innerHTML = star ;
}

function task4(event) {
    event.preventDefault();
    const TASK4RES = document.getElementById('task4result');
    const INPUT_SECONDS = document.getElementById('task4Input').value;
    clearDiv('divTask4Result');
    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask4Result');
    TASK4RES.appendChild(RESULT);

    const H = 3600, M = 60;
    let hours = ~~(INPUT_SECONDS / H);
    let minutes = ~~((INPUT_SECONDS - (H * hours)) / M);
    let seconds = INPUT_SECONDS - (H * hours + M * minutes);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    RESULT.innerText = `Результат: ${hours}:${minutes}:${seconds}`;
    return false;
}

function task5(event) {
    event.preventDefault();
    const TASK5RES = document.getElementById('task5result');
    const INPUT_NUMBER = parseFloat(document.getElementById('task5Input').value);
    clearDiv('divTask5Result');
    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask5Result');
    TASK5RES.appendChild(RESULT);
    let text = ' ';

    let tmpNumber = INPUT_NUMBER % 10;
    if (tmpNumber === 0 || (tmpNumber > 4 && tmpNumber < 10) || (INPUT_NUMBER > 4  && INPUT_NUMBER < 20)) {
      text = ' лет'
    } else if (tmpNumber === 1){
      text = ' год'
    } else if (tmpNumber > 1 && tmpNumber < 5){
      text = ' года'
    }

    RESULT.innerText = `Результат: ${INPUT_NUMBER} ${text}`;
    return false;
}

function task6(event) {
    event.preventDefault();
    const TASK6RES = document.getElementById('task6result');
    const INPUT_FIRST = document.getElementById('task6InputFirst').value;
    const INPUT_SECOND = document.getElementById('task6InputSecond').value;
    clearDiv('divTask6Result');
    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask6Result');
    TASK6RES.appendChild(RESULT);

    let divideInputFirst = INPUT_FIRST.split('T');
    let dataFirst = divideInputFirst[0].split('-');
    let timeFirst = divideInputFirst[1].split(':');
    isNaN(parseInt(timeFirst[2])) ? (timeFirst[2] = 0):(null);
    let dt1 = new Date(dataFirst[0], dataFirst[1], dataFirst[2], timeFirst[0], timeFirst[1], timeFirst[2]);

    let divideInputSecond = INPUT_SECOND.split('T');
    let dataSecond = divideInputSecond[0].split('-');
    let timeSecond = divideInputSecond[1].split(':');
    isNaN(parseInt(timeSecond[2])) ? (timeSecond[2] = 0):(null);
    let dt2 = new Date(dataSecond[0], dataSecond[1], dataSecond[2], timeSecond[0], timeSecond[1], timeSecond[2]);

    let diffSeconds = Math.floor(Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate(),
        dt2.getHours(), dt2.getMinutes(), dt2.getSeconds())
        - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate(),
            dt1.getHours(), dt1.getMinutes(), dt1.getSeconds()))/1000;
    diffSeconds < 0 ? (diffSeconds *= (-1)):(null);

    const SYEARS = 31536000, SMONTH = 2592000, SDAYS = 86400, SHOURS = 3600, SMINUTES = 60;
    let years = ~~(diffSeconds / SYEARS);/*31536000 sec in year*/
    let months = ~~((diffSeconds - (years * SYEARS))/SMONTH);/*2592000 sec in month*/
    let days = ~~((diffSeconds - ((years * SYEARS)+(months * SMONTH)))/SDAYS);/*86400 sec in day*/
    let hours = ~~((diffSeconds - ((years * SYEARS)+(months * SMONTH)+(days * SDAYS)))/SHOURS);/*3600 sec in hour*/
    let minutes = ~~((diffSeconds - ((years * SYEARS)+(months * SMONTH)+(days * SDAYS)+(hours * SHOURS)))/SMINUTES);/*60 sec in minutes*/
    let seconds = (diffSeconds - ((years * SYEARS)+(months * SMONTH)+(days * SDAYS)+(hours * SHOURS)+(minutes * SMINUTES)));

    RESULT.innerText = `Результат: ${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    return false;
}

function task7(event) {
    event.preventDefault();
    const TASK7RES = document.getElementById('task7result');
    const INPUT_DATE = document.getElementById('task7Input').value;
    clearDiv('divTask7Result');
    let date = INPUT_DATE.split("-");
    const RESULT = document.createElement('img');
    RESULT.setAttribute('id', 'divTask7Result');
    TASK7RES.appendChild(RESULT);

    date[1] = parseInt(date[1]);
    date[2] = parseInt(date[2]);

    if ((date[1] ===12 && date[2]>=22) || (date[1] ===1 && date[2]<=20)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/capricorn.jpg')
    } else if ((date[1] ===1 && date[2]>=21) || (date[1] ===2 && date[2]<=20)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/aquarius.jpg');
    } else if ((date[1] ===2 && date[2]>=21) || (date[1] ===3 && date[2]<=20)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/fish.jpg')
    } else if ((date[1] ===3 && date[2]>=21) || (date[1] ===4 && date[2]<=20)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/aries.jpg')
    } else if ((date[1] ===4 && date[2]>=21) || (date[1] ===5 && date[2]<=20)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/taurus.jpg')
    } else if ((date[1] ===5 && date[2]>=21) || (date[1] ===6 && date[2]<=21)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/twin.jpg')
    } else if ((date[1] ===6 && date[2]>=22) || (date[1] ===7 && date[2]<=22)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/cancer.jpg')
    } else if ((date[1] ===7 && date[2]>=23) || (date[1] ===8 && date[2]<=23)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/lion.jpg')
    } else if ((date[1] ===8 && date[2]>=24) || (date[1] ===9 && date[2]<=23)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/virgo.jpg')
    } else if ((date[1] ===9 && date[2]>=24) || (date[1] ===10 && date[2]<=23)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/libra.jpg')
    } else if ((date[1] ===10 && date[2]>=24) || (date[1] ===11 && date[2]<=22)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/scorpio.jpg')
    } else if ((date[1] ===11 && date[2]>=23) || (date[1] ===12 && date[2]<=21)) {
      RESULT.setAttribute('src', 'assets/images/zodiac/sagittarius.jpg')
    }
    return false;
}

function task8(event) {
    event.preventDefault();
    const TASK8RES = document.getElementById('task8result');
    const INPUT_ELEMENT = document.getElementById('task8Input').value;
    clearDiv('divTask8Result');
    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask8Result');
    TASK8RES.appendChild(RESULT);

    let size = INPUT_ELEMENT.split("x");
    let tmpCol = 'white', tmpRow = "white";
    let chessSize = 960;

    if (parseInt(size[0]) >= parseInt(size[1])) {
        chessSize /= parseInt(size[0]);
    } else if (parseInt(size[0]) < parseInt(size[1])) {
        chessSize /= parseInt(size[1]);
    }

    for (let j = 0; j < size[1]; j++) {
        let flexDivRow = document.createElement('div');
        RESULT.appendChild(flexDivRow);
        flexDivRow.setAttribute('class', 'flexDivRow');
        for (let i = 0; i < size[0]; i++) {
            let flexDivCol = document.createElement('div');
            flexDivRow.appendChild(flexDivCol);
            flexDivCol.setAttribute('class', 'flexDivCol');

            flexDivCol.setAttribute('style', 'background-color:' + tmpCol);
            tmpCol = (tmpCol === "white") ? 'black':'white';

            flexDivCol.style.width = chessSize + "px";
            flexDivCol.style.height = chessSize + "px";
        }
        tmpRow === "white" ? (tmpRow = "black"):(tmpRow = "white");
        tmpCol = tmpRow;
    }
    return false;
}

function task9(event) {
    event.preventDefault();
    const TASK9RES = document.getElementById('task9result');
    const INPUT_ENTRANCE = document.getElementById('task9InputEntrance').value;
    const INPUT_APARTMENTS = document.getElementById('task9InputApartments').value;
    const INPUT_FLOOR = document.getElementById('task9InputFloor').value;
    const INPUT_APARTMENT = document.getElementById('task9InputApartment').value;
    clearDiv('divTask9Result');
    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask9Result');
    TASK9RES.appendChild(RESULT);

    let sumApartments = INPUT_ENTRANCE * INPUT_APARTMENTS * INPUT_FLOOR;
    if (INPUT_APARTMENT > sumApartments) {
        RESULT.innerText = "Вы живете в будке!";
        return;
    }

    let entrance = 0;
    let sumApartmentsInEntrance = INPUT_APARTMENTS * INPUT_FLOOR;
    for(let i = 1; i <= INPUT_ENTRANCE; i++){
        if((i-1) * sumApartmentsInEntrance < INPUT_APARTMENT && i * sumApartmentsInEntrance >= INPUT_APARTMENT){
            entrance = i;
        }
    }

    let floor = 0, tmpFloor = sumApartmentsInEntrance * (entrance - 1);
    for(let i = 1; i <= INPUT_FLOOR; i++){
        if(tmpFloor < INPUT_APARTMENT && (+tmpFloor + +INPUT_APARTMENTS) >= INPUT_APARTMENT){
            floor = i;
            break;
        } else {
            tmpFloor = +tmpFloor + +INPUT_APARTMENTS;
        }
    }
    RESULT.innerText = `Результат: подъезд - ${entrance}, этаж - ${floor}`;
    return false;
}

function task10(event) {
    event.preventDefault();
    const TASK10RES = document.getElementById('task10result');
    const INPUT_NUMBER = document.getElementById('task10Input').value;
    clearDiv('divTask10Result');
    const RESULT = document.createElement('p');
    RESULT.setAttribute('id', 'divTask10Result');
    TASK10RES.appendChild(RESULT);

    let numbers = INPUT_NUMBER.split("");
    let sum = 0, i = 0;

    (numbers[0] === '-') ? (i = 1):(null);
    for(i; i < numbers.length; i++){
        (numbers[i] !== '.') ? (sum += parseInt(numbers[i])):(null);
    }
    RESULT.innerText = `Сумма чисел = ${sum}`;
    return false;
}

function task11() {
    const TASK11RES = document.getElementById('task11result');
    let inputLinks = document.getElementById('task11Input');
    clearDiv('divTask11Result');
    const RESULT = document.createElement('div');
    RESULT.setAttribute('id', 'divTask11Result');
    TASK11RES.appendChild(RESULT);

    let links = inputLinks.value
        .split(/[\s,]/)
        .filter(link => link)
        .map(link => link.replace(/https?:\/\//, ''))
        .sort()
        .reduce((ul,link)=>
            ul + `<li><a href=//${link}>${link}</a></li>`, '');
    RESULT.innerHTML = links;
}
