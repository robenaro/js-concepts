console.log(sum(1, 41))
function sum (a, b) {
    return a + b
}
// JS при интерпретации файла, перемещает определения вещей
// в самое начало. В данном случае, это функция
var i // default value - undefined
console.log(i) // undefined
i = 42
console.log(i) // 42
// console.log(num) // RefError: Cannot access 'num' before initialization
// const num = 42 // because of const. the same shit whis the let
// console.log(num)

// Function Expressioin && Function Declaration
// console.log(square(25))
// function square(num) { // Declaration
//     return num ** 2
// }
const square = function (num) { // Expression
    return num ** 2
} // Если мы создаем функции так, то сможем использовать их только после того
// как они были определены
console.log(square(25))
