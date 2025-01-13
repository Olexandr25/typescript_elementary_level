// let prices: number[] = [13, 24, 30]
// let fruits: string[] = ['apple', 'banana', 'cherry']

// let fruitPrices: [string, number][] = fruits.map((fruit, index) => [
//   fruit,
//   prices[index],
// ])

// console.log(fruitPrices) // [ [ 'apple', 13 ], [ 'banana', 24 ], [ 'cherry', 30 ] ]

// let mixedValues: (string | number)[] = ['apple', 13, 'banana', 24, 'cherry', 30]
// console.log(mixedValues) // [ 'apple', 13, 'banana', 24, 'cherry', 30 ]

// let temperatures: [number, string][] = [
//   [75, 'sunny'],
//   [48, 'cloudy'],
//   [62, 'rainy'],
// ]

// temperatures.forEach(([temp, forecast]) => {
//   console.log(`It's ${temp} degrees and ${forecast}`) // It's 75 degrees and sunny
// })

// const car: { brand: string; year: number } = { brand: 'Ford', year: 2000 }
// car.brand = 'Chevy'
// // car.color = 'blue' // Error: Property 'color' does not exist on type '{ brand: string; year: number; }'

// const book: { title: string; value: number } = {
//   title: 'The Great Gatsby',
//   value: 180,
// }
// const notebook: { title: string } = {
//   title: 'The Catcher in the Rye',
// }
// const pen: { title: string; value: number } = { title: 'Pen', value: 1 }

// const items: { readonly title: string; value?: number }[] = [
//   book,
//   notebook,
//   pen,
// ]

// // items[0].title = 'The Great Gatsby' // Error: Cannot assign to 'title' because it is a read-only property

// // Function type
// const fn = (str: string): string => {
//   return str.toUpperCase()
// }
// console.log(fn('hello')) // HELLO

// // Challenge of names

// const names: string[] = ['Alice', 'Bob', 'Eve']

// const checkName = (name: string): boolean => {
//   return names.includes(name)
// }

// console.log(checkName('Alice')) // true
// console.log(checkName('Charlie')) // false

// // Challenge of functions

// const processInput = (parameter: string | number): void => {
//   if (typeof parameter === 'number') {
//     console.log(parameter * 2)
//   } else if (typeof parameter === 'string') {
//     console.log(parameter.toUpperCase())
//   }
// }

// processInput(42) // 84
// processInput('hello') // HELLO

// // Functions and objects

// const createEmployee = ({
//   id,
// }: {
//   id: number
// }): { id: number; isActive: boolean } => {
//   return { id, isActive: id % 2 === 0 }
// }

// createEmployee({ id: 42 }) // { id: 42, isActive: true }
// createEmployee({ id: 43 }) // { id: 43, isActive: false }

// // Challenge

// const processData = (a: string | number, config: { reverse: boolean }) => {
//   if (typeof a === 'number') {
//     return a * a
//   } else if (typeof a === 'string') {
//     return config.reverse
//       ? a.toUpperCase().split('').reverse().join('')
//       : a.toUpperCase()
//   }
// }

// console.log(processData(42, { reverse: false })) // 1764
// console.log(processData('hello', { reverse: false })) // HELLO
// console.log(processData('hello', { reverse: true })) // OLLEH
