let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    minValue = minValue || 0;
    maxValue = maxValue || 100;
    minValue = (minValue < 0) ? 0 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;
const phraseRandom = Math.round( Math.random());
const answerPhrase = (phraseRandom === 1) ?
    `Да это легко! Ты загадал ${answerNumber }?` :
    `Может быть это число ${answerNumber }?`;
answerField.innerText = answerPhrase;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    minValue = minValue || 0;
    maxValue = maxValue || 100;
    minValue = (minValue < 0) ? 0 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;
    const phraseRandom = Math.round( Math.random());
    const answerPhrase = (phraseRandom === 1) ?
    `Да это легко! Ты загадал ${answerNumber }?` :
    `Может быть это число ${answerNumber }?`;
    answerField.innerText = answerPhrase;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        const phraseRandom = Math.round( Math.random());
        const answerPhrase = (phraseRandom === 1) ?
           `Я угадал\n\u{1F913}` :
           `Я всегда угадываю\n\u{1F60E}`;
           `Кто молодец? Я молодец\n\u{1F917}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})
  
