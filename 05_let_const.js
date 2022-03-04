// // Let
// let a = 'Variable a'
// let b = 'Variable b'
// {
//   a = 'New Variable A'
//   let b = 'Local Variable B'
//   console.log('Scope A', a) // Scope A New Variable A
//   console.log('Scope B', b) // Scope B Local Variable B
// //   console.log('Scope C', c)
// //   let c = 'Something'
// }
// console.log('A:', a)
// console.log('B:', b)

// Const

const PORT = 8080
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array) // переменная const не подействовала и значения массива изменилось
// [ 'JS', 'is', 'Awesome', '!' ]
// array = '' - выдаст ошибку

const obj = {}
obj.name = 'Vladilen'
obj.age = 26

console.log(obj) // поля объекта изменились

delete obj.name

console.log(obj)