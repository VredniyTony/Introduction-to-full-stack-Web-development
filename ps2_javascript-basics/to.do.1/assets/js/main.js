function show(state, element) {
    document.getElementById(element).style.display = state;
    document.getElementById('wrap').style.display = state;
}

function clearDiv(taskForClear){
    const elem = document.getElementById(taskForClear);
    elem !== null ? (elem.remove()):(null);
}

function task1(event) {
    event.preventDefault();
    const task1Res = document.getElementById('task1result');
    clearDiv('divTask1Result');

    let sum = -1000;
    for (let i = -999; i <= 1000; i++){
        sum = sum + i;
    }

    let result = document.createElement('p');
    result.setAttribute('id', 'divTask1Result');
    task1Res.appendChild(result);
    result.innerText = `Результат: ${sum}`;
    return false;
}

function task2(event) {
    event.preventDefault();
    const task2Res = document.getElementById('task2result');
    clearDiv('divTask2Result');

    let sum = 0;
    let tempNum;
    for (let i = -1000; i <= 1000; i++) {
        tempNum = i % 10;
        if ((tempNum === 2) || (tempNum === -2) ||
            (tempNum === 3) || (tempNum === -3) ||
            (tempNum === 7) || (tempNum === -7)) {
            sum = sum + i;
        }
    }

    let result = document.createElement('p');
    result.setAttribute('id', 'divTask2Result');
    task2Res.appendChild(result);
    result.innerText = `Результат: ${sum}`;
    return false;
}

function task3(event) {
    event.preventDefault();
    const task3Res = document.getElementById('task3result');
    clearDiv('divTask3Result');

    let result = document.createElement('p');
    result.setAttribute('id', 'divTask3Result');
    task3Res.appendChild(result);

    let i = 0, star = '', tempStar = '*';
    while(i <= 50){
        star += tempStar + '<br>';
        tempStar += '*';
        i++;
    }
    result.innerHTML = star ;
    return false;
}

function task4(event) {
    event.preventDefault();
    const task4Res = document.getElementById('task4result');
    let inputSeconds = document.getElementById('task4Input').value;
    clearDiv('divTask4Result');
    let result = document.createElement('p');
    result.setAttribute('id', 'divTask4Result');
    task4Res.appendChild(result);

    const H = 3600, M = 60;
    let hours = ~~(inputSeconds / H);
    let minutes = ~~((inputSeconds - (H * hours)) / M);
    let seconds = inputSeconds - (H * hours + M * minutes);

    hours < 10 ? (hours = '0'+hours):hours;
    minutes < 10 ? (minutes = '0'+minutes):minutes;
    seconds < 10 ? (seconds = '0'+seconds):seconds;

    result.innerText = `Результат: ${hours}:${minutes}:${seconds}`;
    return false;
}

function task5(event) {
    event.preventDefault();
    const task5Res = document.getElementById('task5result');
    let inputNumber = parseFloat(document.getElementById('task5Input').value);
    clearDiv('divTask5Result');
    let result = document.createElement('p');
    result.setAttribute('id', 'divTask5Result');
    task5Res.appendChild(result);
    let text = ' ';

    let tmpNumber = inputNumber % 10;
    tmpNumber === 0 ? (text = ' лет'):(null);
    tmpNumber === 1 ? (text = ' год'):(null);
    tmpNumber > 1 && tmpNumber < 5 ? (text = ' года'):(null);
    tmpNumber > 4 && tmpNumber < 10 ? (text = ' лет'):(null);
    inputNumber > 4  && inputNumber < 20 ? (text = ' лет'):(null);
    result.innerText = `Результат: ${inputNumber} ${text}`;
    return false;
}

function task6(event) {
    event.preventDefault();
    const task6Res = document.getElementById('task6result');
    let inputFirst = document.getElementById('task6InputFirst').value;
    let inputSecond = document.getElementById('task6InputSecond').value;
    clearDiv('divTask6Result');
    let result = document.createElement('p');
    result.setAttribute('id', 'divTask6Result');
    task6Res.appendChild(result);

    let divideInputFirst = inputFirst.split('T');
    let dataFirst = divideInputFirst[0].split('-');
    let timeFirst = divideInputFirst[1].split(':');
    isNaN(parseInt(timeFirst[2])) ? (timeFirst[2] = 0):(null);
    let dt1 = new Date(dataFirst[0], dataFirst[1], dataFirst[2], timeFirst[0], timeFirst[1], timeFirst[2]);

    let divideInputSecond = inputSecond.split('T');
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

    result.innerText = `Результат: ${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    return false;
}

function task7(event) {
    event.preventDefault();
    const task7Res = document.getElementById('task7result');
    let inputDate = document.getElementById('task7Input').value;
    clearDiv('divTask7Result');
    let date = inputDate.split("-");
    let result = document.createElement('img');
    result.setAttribute('id', 'divTask7Result');
    task7Res.appendChild(result);

    date[1] = parseInt(date[1]);
    date[2] = parseInt(date[2]);

    ((date[1] ===12 && date[2]>=22) || (date[1] ===0o1 && date[2]<=20)) ?
        (result.setAttribute('src', 'assets/images/zodiac/capricorn.jpg')):(null);
    ((date[1] ===0o1 && date[2]>=21) || (date[1] ===0o2 && date[2]<=20)) ?
        (result.setAttribute('src', 'assets/images/zodiac/aquarius.jpg')):(null);
    ((date[1] ===0o2 && date[2]>=21) || (date[1] ===0o3 && date[2]<=20)) ?
        (result.setAttribute('src', 'assets/images/zodiac/fish.jpg')):(null);
    ((date[1] ===0o3 && date[2]>=21) || (date[1] ===0o4 && date[2]<=20)) ?
        (result.setAttribute('src', 'assets/images/zodiac/aries.jpg')):(null);
    ((date[1] ===0o4 && date[2]>=21) || (date[1] ===0o5 && date[2]<=20)) ?
        (result.setAttribute('src', 'assets/images/zodiac/taurus.jpg')):(null);
    ((date[1] ===0o5 && date[2]>=21) || (date[1] ===0o6 && date[2]<=21)) ?
        (result.setAttribute('src', 'assets/images/zodiac/twin.jpg')):(null);
    ((date[1] ===0o6 && date[2]>=22) || (date[1] ===0o7 && date[2]<=22)) ?
        (result.setAttribute('src', 'assets/images/zodiac/cancer.jpg')):(null);
    ((date[1] ===0o7 && date[2]>=23) || (date[1] ===8 && date[2]<=23)) ?
        (result.setAttribute('src', 'assets/images/zodiac/lion.jpg')):(null);
    ((date[1] ===8 && date[2]>=24) || (date[1] ===9 && date[2]<=23)) ?
        (result.setAttribute('src', 'assets/images/zodiac/virgo.jpg')):(null);
    ((date[1] ===9 && date[2]>=24) || (date[1] ===10 && date[2]<=23)) ?
        (result.setAttribute('src', 'assets/images/zodiac/libra.jpg')):(null);
    ((date[1] ===10 && date[2]>=24) || (date[1] ===11 && date[2]<=22)) ?
        (result.setAttribute('src', 'assets/images/zodiac/scorpio.jpg')):(null);
    ((date[1] ===11 && date[2]>=23) || (date[1] ===12 && date[2]<=21)) ?
        (result.setAttribute('src', 'assets/images/zodiac/sagittarius.jpg')):(null);
    return false;
}

function task8(event) {
    event.preventDefault();
    const task8Res = document.getElementById('task8result');
    let inputElement = document.getElementById('task8Input').value;
    clearDiv('divTask8Result');
    let result = document.createElement('p');
    result.setAttribute('id', 'divTask8Result');
    task8Res.appendChild(result);

    let size = inputElement.split("x");
    let tmpCol = 'white', tmpRow = "white";
    let chessSize = 480;

    if (parseInt(size[0]) >= parseInt(size[1])) {
        chessSize /= parseInt(size[0]);
    } else if (parseInt(size[0]) < parseInt(size[1])) {
        chessSize /= parseInt(size[1]);
    }

    for (let j = 0; j < size[1]; j++) {
        let flexDivRow = document.createElement('div');
        result.appendChild(flexDivRow);
        flexDivRow.setAttribute('class', 'flexDivRow');
        for (let i = 0; i < size[0]; i++) {
            let flexDivCol = document.createElement('div');
            flexDivRow.appendChild(flexDivCol);
            flexDivCol.setAttribute('class', 'flexDivCol');
            if (tmpCol === "white") {
                flexDivCol.setAttribute('style', 'background-color: white;');
                tmpCol = "black";
            } else {
                flexDivCol.setAttribute('style', 'background-color: black;');
                tmpCol = "white";
            }
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
    const task9Res = document.getElementById('task9result');
    let inputEntrance = document.getElementById('task9InputEntrance').value;
    let inputApartments = document.getElementById('task9InputApartments').value;
    let inputFloor = document.getElementById('task9InputFloor').value;
    let inputApartment = document.getElementById('task9InputApartment').value;
    clearDiv('divTask9Result');
    let result = document.createElement('p');
    result.setAttribute('id', 'divTask9Result');
    task9Res.appendChild(result);

    let sumApartments = inputEntrance * inputApartments * inputFloor;
    if (inputApartment > sumApartments) {
        result.innerText = "Вы живете в будке!";
        return;
    }

    let entrance = 0;
    let sumApartmentsInEntrance = inputApartments * inputFloor;
    for(let i = 1; i <= inputEntrance; i++){
        if((i-1) * sumApartmentsInEntrance < inputApartment && i * sumApartmentsInEntrance >= inputApartment){
            entrance = i;
        }
    }

    let floor = 0, tmpFloor = sumApartmentsInEntrance * (entrance - 1);
    for(let i = 1; i <= inputFloor; i++){
        if(tmpFloor < inputApartment && (+tmpFloor + +inputApartments) >= inputApartment){
            floor = i;
            break;
        } else {
            tmpFloor = +tmpFloor + +inputApartments;
        }
    }
    result.innerText = `Результат: подъезд - ${entrance}, этаж - ${floor}`;
    return false;
}

function task10(event) {
    event.preventDefault();
    const task10Res = document.getElementById('task10result');
    let inputNumber = document.getElementById('task10Input').value;
    clearDiv('divTask10Result');
    let result = document.createElement('p');
    result.setAttribute('id', 'divTask10Result');
    task10Res.appendChild(result);

    let numbers = inputNumber.split("");
    let sum = 0, i = 0;

    (numbers[0] === '-') ? (i = 1):(null);
    for(i; i < numbers.length; i++){
        (numbers[i] !== '.') ? (sum += parseInt(numbers[i])):(null);
    }
    result.innerText = `Сумма чисел = ${sum}`;
    return false;
}

function task11(event) {
    event.preventDefault();
    const task11Res = document.getElementById('task11result');
    let inputLinks = document.getElementById('task11Input');
    clearDiv('divTask11Result');
    let result = document.createElement('div');
    result.setAttribute('id', 'divTask11Result');
    task11Res.appendChild(result);

    let links = inputLinks.value
        .split(/[\s,]/)
        .filter(link => link)
        .map(link => link.replace(/https?:\/\//, ''))
        .sort()
        .reduce((ul,link)=>
            ul + `<li><a href="//${link}">${link}</a></li>`, '');
    result.innerHTML = links;
    return false;
}