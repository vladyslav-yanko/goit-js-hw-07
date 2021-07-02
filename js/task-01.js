// Задание 1
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4




const refs = {
    ulCategories: document.getElementById('categories'),
    h2Arr: document.querySelectorAll('h2'),
    liItem: document.querySelectorAll('.item')
}
console.log(`В списке: ${refs.ulCategories.children.length} категории.`);

// --------------------------ANIMALS------------------------------------

console.log(`Категория: ${refs.h2Arr[0].textContent}`);
console.log(`Количество элементов: ${refs.liItem[0].children[1].children.length}`);

// --------------------------PRODUCTS------------------------------------

console.log(`Категория: ${refs.h2Arr[1].textContent}`);
console.log(`Количество элементов: ${refs.liItem[1].children[1].children.length}`);

// ---------------------------TECH------------------------------------

console.log(`Категория: ${refs.h2Arr[2].textContent}`);
console.log(`Количество элементов: ${refs.liItem[2].children[1].children.length}`);

