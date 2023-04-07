// На основе статей:
// https://www.techiedelight.com/ru/create-array-from-1-n-javascript/
// https://www.techiedelight.com/ru/declare-and-initialize-arrays-javascript/

// Сгенерировать массив из N количества неопределенных (undefined) элементов
// РЕЗУЛЬТАТ БУДЕТ [undefined, undefined, undefined, ...]

// КОЛИЧЕСТВО ЭЛЕМЕНТОВ
const NUMBER_OF_ELEMENTS = 20;

// КОРОТКОЕ НАЗВАНИЕ КОЛИЧЕСТВА ЭЛЕМЕНТОВ - N
const N = NUMBER_OF_ELEMENTS;

// СПОСОБ 1
const array1 = Array(N);

// СПОСОБ 2
const array2 = Array.from(Array(N));

// СПОСОБ 2 a
const array2a = Array.from(Array(N), (item, index) => undefined);

// СПОСОБ 2 b
const array2b = Array.from({ length: N }, (item, index) => undefined);

// Способ 2 с
const array2с = Array(N).map((item, index) => undefined);

// Cпособ 3
const array3 = [];

for (let i = 0; i < N; i++) {
  array3.push(undefined);
}

// Сгенерировать массив из N элементов и наполнить их чем то

// Что то - например объект или строка или цифра (что угодно)
// Для примера возьмем объект
// РЕЗУЛЬТАТ БУДЕТ [Object, Object, Object, ...]

// ПРИМЕР ОБЪЕКТА
const EXAMPLE_OBJECT = {
  name: "Имя",
  surname: "Фамилия",
};

// СПОСОБ 1
const objectsArray1 = Array(N).fill(EXAMPLE_OBJECT);

// СПОСОБ 2
const objectsArray2 = Array.from(Array(N), (item, index) => EXAMPLE_OBJECT);

// СПОСОБ 3
const objectsArray3 = Array(N).map((item, index) => EXAMPLE_OBJECT);

// Cпособ 4
const objectsArray4 = [];

for (let i = 0; i < N; i++) {
  objectsArray4.push(EXAMPLE_OBJECT);
}
