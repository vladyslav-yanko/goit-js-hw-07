// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>



let counterValue = document.getElementById('value');
const incr = document.querySelector('button[data-action="increment"]');
const decr = document.querySelector('button[data-action="decrement"]');

let valueValue = (counterValue.textContent);
incr.addEventListener('click', () => {
    ++valueValue;
    return counterValue.textContent = valueValue;
});

decr.addEventListener('click', () => {
    --valueValue;
    return counterValue.textContent = valueValue;
});