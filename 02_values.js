// let a = 42
// let b = a
// b++
// console.log('a', a)
// console.log('b', b)


let a = [1, 2, 3]
let b = a // в данном случае мы в б записываем не значение а, а ссылку на переменную
// let b = a.concat() - передадим значение
b.push(4) // поэтому здесь мы добавляем в оригинальный массив, и он тоже изменится

let c = [1, 2, 3, 4]

console.log('a', a) // a [ 1, 2, 3, 4 ]
console.log('b', b) // b [ 1, 2, 3, 4 ]
console.log(a === b) // true а и b одно и то же
console.log(a === c) // это разные объекты, здесь не происходит приведения типов, поэтому return false
console.log(a == c) // false
