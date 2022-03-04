// null, undefined, boolean, number, string, object, symbol
// undefined нужен, когда переменная не объявлена. Функции,
// которые ничего не возвращают по дефолту возвращают undefined
// null - это переменная есть, но значения нет

console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'Javascript') // "", '', ``
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('JS'))
console.log(typeof {})
console.log(typeof function() {})
console.log(typeof NaN)
console.log(typeof null)

// Приведение типов
let language  = 'Javascript'
if (language) {
    console.log('The best language is: ', language)
}
// Существуют определенные значения, которые приводятся к false
// falsy values '', 0, null, undefined, NaN, false

console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))
console.log(Boolean(0))
console.log(Boolean([]))

// Строки и числа
console.log(1 + '2') // string 12
console.log('' + 1 + 0)
console.log('' - 1 + 0) // number -1, т.к. для строк нет оператора -
console.log('8' * '3') // number, ||--||--||--||
console.log(4 + 10 + 'px') // string 14px, т.к. сначала сложил, а потом привел к строке
console.log('px' + 5 + 10) // string px510, т.к. сначала привел к строке, а потом конкатенация
// в каких-то случаях мы пытаемся привести что-то к числу, в другом случае к строке
console.log('42' - 40)
console.log('42px' - 2)
console.log(null + 2) // null при приведении его к числу будет нулем
console.log(undefined + 42) // NaN, т.к. undefined нельзя привести к числу

// == vs ===
// Двойное равно сравнивает значения, но с приведением типов
// Тройное равно сравнивает значения без приведения типов

console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log('0' == false) // true

// ==========
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false


