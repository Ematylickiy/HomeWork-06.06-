//TASK 1
// Даны два абзаца и две кнопки. 
// Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.
const btn1_task1 = document.querySelector('#btn_task1_text1');
const btn2_task1 = document.querySelector('#btn_task1_text2');

btn1_task1.onclick = () => {
    let text1 = 'Текст №1 выведен на экран';
    const text_1 = document.querySelector('#task_1_text_1');
    text_1.textContent = text1;
};
btn2_task1.onclick = () => {
    let text2 = 'Текст №2 выведен на экран';
    const text_2 = document.querySelector('#task_1_text_2');
    text_2.textContent = text2;
};


//TASK 2
// Дан абзац и две кнопки.
// По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.
const btn_task2_sayHi = document.querySelector('#btn_task2_sayHi');
const btn_task2_sayBye = document.querySelector('#btn_task2_sayBye');
const greeting = document.querySelector('#greeting_task2');

btn_task2_sayHi.onclick = () => greeting.textContent = 'Привет!';
btn_task2_sayBye.onclick =  () => greeting.textContent = 'Пока!';


// TASK 3
// Даны 3 абзаца с текстом.По нажатию на первый абзац запишите в его текст число 1,
// по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.
const text1 = document.querySelector('#text1_task3');
const text2 = document.querySelector('#text2_task3');
const text3 = document.querySelector('#text3_task3');

text1.onclick = () => text1.textContent = '1';
text2.onclick = () => text2.textContent = '2';
text3.onclick = () => text3.textContent = '3';



//TASK 4
// Дан абзац и кнопка.В абзаце записано какое - то число.
// По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно
const btn_task4 = document.querySelector('#squareNumber_task4');
btn_task4.onclick = () => {
    let number = document.querySelector('#number_task4');
    number.innerHTML = number.innerHTML ** 2;   
};



// TASK 5
// Дан абзац с числом и кнопка.По нажатию на кнопку прибавьте к значению абзаца
// единицу и запишите полученное число обратно.
const btn_task5 = document.querySelector('#btn_task5');
btn_task5.onclick = () => {
    let number = document.querySelector('#number_task5');
    number.innerHTML = +number.innerHTML + 1;
};



// TASK 6
// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите 
// в конец текста абзаца восклицательный знак.
const btn_task6 = document.querySelector('#btn_task6');
btn_task6.onclick = () => {
    let text = document.querySelector('#text_task6');
    text.innerHTML = text.innerHTML + '!!!';
};


//TASK 7
// Модифицируйте предыдущую задачу так, 
// чтобы восклицательный знак записывался не в конец текста, а в начало.
const btn_task7 = document.querySelector('#btn_task7');
btn_task7.onclick = () => {
    let text = document.querySelector('#text_task7');
    text.innerHTML = '!!!' + text.innerHTML; /// задача 6 и 7. Может надо было как-то прописать сложнее решение?
};


//TASK 8
// Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, 
// оберните этот текст в теги < b > и запишите новый текст обратно в абзац.
const btn_task8 = document.querySelector('#btn_task8');
btn_task8.onclick = () => {
    let b = document.createElement('b');
    b.innerHTML = document.querySelector('#text_task8').innerHTML;
    document.querySelector('#text_task8').innerHTML = null;
    document.querySelector('#text_task8').append(b);
};


//TASK 9
// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
const btn_task9 = document.querySelector('#btn_task9');
btn_task9.onclick = () => document.querySelector('#img_task9').setAttribute('width', '300px');


//TASK 10 
// Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем отредактируйте 
// текст в инпуте и еще раз нажмите на кнопку.Убедитесь в том, что выведется новый текст инпута.
const btn_task10 = document.querySelector('#btn_task10');
btn_task10.onclick = () => console.log(document.querySelector('#task10').value);



//TASK 11
// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. 
// По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
const btn_task11 = document.querySelector('#btn_task11');
btn_task11.onclick = function () {
    let inputs = document.querySelectorAll('#input');
    inputs = Array.from(inputs);
    let result = 0;
    for (let i = 0; i < inputs.length; i++){
        result += Number(inputs[i].value);
    }
    result = `Среднее арифметическое равно: ${result / inputs.length}`;
    document.querySelector('#result_task11').innerHTML = result;
}


//TASK 12
// Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста 
// содержимое ее атрибута href в круглых скобках.Сделайте так, чтобы 
// это добавление происходило лишь по первому нажатию. (Нужно использовать отвязку события)
const a_task12 = document.querySelector('#task12_a');
a_task12.addEventListener('click', addHref);
function addHref() {
    let a = document.querySelector('#task12_a').getAttribute('href');
    a_task12.innerHTML += `(${a})`;
    a_task12.removeEventListener('click', addHref);
};


//TASK 13
// Дана кнопка, значением которой служит число 1. Сделайте так, 
// чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
// После того, как значение кнопки достигнет 10 - отвяжите обработчик события, 
// чтобы кнопка больше не реагировала на нажатие.
const btn_task13 = document.querySelector('#btn_task13');
btn_task13.addEventListener('click', creatCounter);
function creatCounter() {
    if (btn_task13.innerHTML < 10) {
        btn_task13.innerHTML++;
    } else {
        btn_task13.removeEventListener('click', creatCounter);
    };
};


//TASK 14
// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
const p1_task14 = document.querySelector('#text1_task14');
const p2_task14 = document.querySelector('#text2_task14');
p1_task14.addEventListener('click', addToken1);
function addToken1 () {
    p1_task14.innerHTML += '!!!';
    p1_task14.removeEventListener('click', addToken1);
}
p2_task14.addEventListener('click', addToken2);
function addToken2 () {
    p2_task14.innerHTML += '!!!';
    p2_task14.removeEventListener('click', addToken2);
}


//TASK 15
// Дан инпут с каким-то начальным значением. Пусть пользователь меняет 
// это значение.Сделайте рядом с инпутом кнопку, по нажатию на которую 
// value инпута вернется в изначальное значение.
const btn_task15 = document.querySelector('#btn_task15');
btn_task15.onclick = () => {
    let startValue = document.querySelector('#input_task15').getAttribute('value');
    document.querySelector('#input_task15').value = startValue;
};


//TASK 16
// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество 
// кликов по ней, записывая их в какой - нибудь пользовательский атрибут.
// Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов
// по этой кнопке было сделано.
const btn_task16 = document.querySelector('#btn_task16');
btn_task16.addEventListener('click', considerNum);
btn_task16.addEventListener('dblclick', resultCounter);

function considerNum() {
    let count = document.querySelector('#btn_task16').dataset.counter;
    document.querySelector('#btn_task16').dataset.counter = ++count;
};
function resultCounter() {
    let result_task16 = document.querySelector('#result_task16');
    result_task16.innerHTML = `На кнопку нажали ${document.querySelector('#btn_task16').dataset.counter} раз `
};


//TASK 17
// Даны абзацы.Переберите их циклом и каждому абзацу в атрибут data - num запишите
// порядковый номер этого абзаца. Используйте метод setAttribute.
let arr_task17 = document.querySelector('.task17').children;
arr_task17 = Array.from(arr_task17);
for (let i = 0; i < arr_task17.length; i++){
    arr_task17[i].setAttribute('data-num', i)
};



//TASK 18
// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку 
// получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
const btn_task18 = document.querySelector('#btn_task18');
btn_task18.onclick = () => {
    let arr_task18 = document.querySelector('.inputs_task18').children;
    arr_task18 = Array.from(arr_task18);
    let result = 0;
    for (let i = 0; i < arr_task18.length; i++) {
        result += +arr_task18[i].value;
    };
    document.querySelector('#sum_task18').innerHTML = `Сумма чисел равна ${result}`;
};


//TASK 19
// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово 
// читается с начала и с конца одинаково(например, мадам).
const btn_task19 = document.querySelector('#btn_task19');
btn_task19.onclick = () => {
    let arr = document.querySelector('#input_task19').value;
    let newArr = arr.split('').reverse().join('');
    if (newArr == arr) {
        document.querySelector('#result_bulTask19').innerHTML = 'Совпадает'
    } else {
        document.querySelector('#result_bulTask19').innerHTML = 'Не совпадает'
    };
};


//TASK 20
// В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, 
// чтобы введенные страны записывались в абзац под инпутом через запятую.То есть по каждому
// нажатию Enter в абзац будут добавляться все новые и новые страны.
let country = document.querySelector('#сountry')
country.onkeyup = function (event) {
    if (event.code == 'Enter') {
        if (document.querySelector('#result_country').textContent.length == 0) {
            document.querySelector('#result_country').textContent +=country.value
        } else {
            document.querySelector('#result_country').textContent += `, ${country.value}`;
        };
    };
};


//TASK 21
// На странице есть дивы. В них есть текст. Обойдите все дивы и 
// обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10
// символов.И добавьте троеточие в конец обрезанного текста
const btn_task21 = document.querySelector('#btn_task21');
btn_task21.onclick = () => {
    let arr = document.querySelector('#div_task21').children;
    arr = Array.from(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerText.length >= 10) {
            arr[i].innerText = arr[i].innerText.slice(0, 10) + '...';
        };
    };
};


//TASK 22
// Дан инпут и кнопка. По нажатию на 
// кнопку сгенерируйте случайную строку из 8 - ми символов и запишите в инпут.
const btn_task22 = document.querySelector('#btn_task22');
btn_task22.onclick = () => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let randomText = '';
    for (let i = 0; i < 8; i++) {
        randomText += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    };
    document.querySelector('#task22').value = randomText;
};


//TASK 23
// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. 
// По нажатию на кнопку перемешайте введенные символы случайным образом
// и запишите ее обратно в инпут.
const btn_task23 = document.querySelector('#btn_task23'); /// тут конечно я намудрил, но работает, надеюсь ты разбирёшь моё решение)
btn_task23.onclick = () => {
    let text = document.querySelector('#task23').value.split('');
    let newarr = []
    while (newarr.length != text.length) {
        randomIndex = Math.floor(Math.random() * text.length);
        if (newarr.includes(text[randomIndex])) {
            continue;
        };
        newarr.push(text[randomIndex]);
    };
    document.querySelector('#task23').value = newarr.join('');
};


//TASK 24
// Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте 
// состояние чекбокса с отмеченного на неотмеченное и наоборот.
const a_task24 = document.querySelector('#chbox_task24');
a_task24.onclick = () => {
    if (document.querySelector('#input_task24').checked) {
        document.querySelector('#input_task24').checked = false;
    } else {
        document.querySelector('#input_task24').checked = true
    }
};


//TASK 25
// Дан инпут. В него вводится температура в градусах Фаренгейта. 
// Сделайте так, чтобы автоматически по мере ввода в абзац под инпутом 
// эта температура выводилась в градусах Цельсия.
let temp_task25 = document.querySelector('#input_task25');
temp_task25.onkeyup = function () {
    let fahrenheit = document.querySelector('#input_task25').value;
    let celsius = document.querySelector('#celsius');
    celsius.innerHTML = `Температура в градусах Цельсия составит: ${(fahrenheit - 32) / 1.8}`;
};



//TASK 26
// Дан инпут, кнопка и абзац. В инпут вводится число. 
// По нажатию на кнопку выведите в абзац факториал этого числа.
const btn_factorial = document.querySelector('#btn_factorial');
btn_factorial.onclick = () => {
    let number = document.querySelector('#input_task26').value;
    let sum = 1;
    for (let i = 1; i <= number; i++){
        sum *= i;
    };
    document.querySelector('#result_factorial').innerHTML = `Факториал равен ${sum}`
}