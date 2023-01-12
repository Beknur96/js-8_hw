// Task 1
// На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
// Output: [3,7]

// Input: [1,7], [9,3]
// Actions:
// Output: [10, 10]

// function arraySum(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         let arr3 = (arr1[i] + arr2[i]);
//         result = [...result, arr3];

//     }
//     return result;
// }
// console.log(arraySum([1,7],[9,3]))

// Task 2
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]

// Input: [7,14]
// Output: [14,28]

// function arraySum(arr){
//     let result = [];
//     for(i = 0; i < arr.length; i++){
//         arr[i] *= 2
//         result = [...result, arr]
//     }
//     return arr
// }

// console.log(arraySum([1,2,3,4,5]));

// Task 3 -----
// Напишите функцию, которая принимает массив объектов с полем id. Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id
// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]

// Input: [{id: true}]
// Output: [true]

// const getId = (arr) => {
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         newArr = [...newArr,arr[i].id]
//     }
//     return newArr
// }
// console.log(getId([{id: 1},{id: 2},{id: 3},{id: 4}]));

// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <h1>{number}</h1>
// Input: [1,2]
// Output: ['<h1>1</h1>','<h1>2</h1>']

// Input: ['Ivan']
// Output: ['<h1>Ivan</h1>']

// const getTag = (arr) => {
//     let newArr = [];
//     for(i = 0; i < arr.length; i++){
//         let str = `<h1>${arr[i]}</h1>`
//         newArr = [...newArr,str]
//     }
//     return newArr
// }

// console.log(getTag(["ivan", 20003]));

// task 5
//Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв

// const evenLengthStrings = (arr) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length % 2 === 0){
//             newArr = [...newArr, arr[i]]
//         }
//     }
//     return newArr
// }
// console.log(evenLengthStrings(['abs', 'ab','ds','asdasdd']));

// task 6
//Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка

// const numberByTen = (arr) =>{
//     let newArr = [];

//     for(i = 0; i < arr.length; i++){
//         let num = arr[i] * 2;
//         if((num * 2) % 10 === 0){
//             newArr = [...newArr, num];
//         }
//     }
//     return newArr
// }
// console.log(numberByTen([1,2,3,7,10,5]));

// task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true

// const onlyTrue = (arr) => {
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === true){
//             result = [...result, arr[i]]
//         }
//     }
//     return result
// }
// console.log(onlyTrue([true,false,true,true,true]));

// task 8

// Напишите функцию, которая принимает массив значений в т.ч и значения undefined и возвращает массив только без значений undefined

// const undef = (arr) => {
//     let newArr = [];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] === true || arr[i] === false){
//             newArr = [...newArr,arr[i]]
//         }
//     }
//     return newArr
// }
// console.log(undef([true,false,undefined,true,true,true,undefined]));

// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15

// Input: [2, 11, 5]
// Output: 18

// const sum = (arr) => {
//     let result = [];
//     for(i =0; i < arr.length; i++){
//         result = [...result, arr[i]]
//     }
//     return result.reduce((a,b) => (a + b))
// }
// console.log(sum([1,2,3,4,5]));

// Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логического И над ними. Использовать reduce
// Логическое И - это операция &&
// Input: [true,true,true,true]
// Output: true

// Input: [true,false,true]
// Output: false

// const trueOrFalse = (arr) => {

//     return arr.reduce((acc, rec) => {return acc && rec}, true)

// }

// console.log(trueOrFalse([true,false,true]));

// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Готовим баночки и не отчаиваемся. Будет 🔥
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}

// const getObj = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         acc[`field${idx + 1}`] = rec
//         return acc
//     }, {})

// }
// console.log(getObj([true,1,'wow','you are smart, bro']));

// Task 12 ------
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// Input: { name: 'Baha', isAdmin: true }
// Actions:
// Output: { name: 'Baha' }

// Input: { isAdmin: true }
// Actions:
// Output: {}

// const newObj = (obj) => {
//   let result = Object.keys(obj);
//   for (let i = 0; i < result.length; i++) {
//     let val = obj[result[i]]
//     if (typeof val !== "string") {
//       delete obj[result[i]];
//     }
//   }
//   return obj;
// };
// console.log(newObj({ name: "Baha", isAdmin: true }));


// Task 13 ------
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false
// Input: { isAdmin: false, isBaha: true }
// Actions:
// Output: ['isAdmin']


// function getFalseKeys(obj) {
//   let result = [];
//   for (let key in obj) {
//     if (!obj[key]) {
//       result.push(key);
//     }
//   }
//   return result;
// }

// console.log(getFalseKeys({ isAdmin: false, isBaha: true }));


// Task 14
// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)
// Input: [4, 6]
// Actions:
// Output: 5

// Input: [2, 4]
// Actions:
// Output: 3

// function getAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(getAverage([4, 6]));
