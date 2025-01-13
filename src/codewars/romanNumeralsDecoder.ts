// // "MM"      -> 2000
// // "MDCLXVI" -> 1666
// // "M"       -> 1000
// // "CD"      ->  400
// // "XC"      ->   90
// // "XL"      ->   40
// // "I"       ->    1

// // ===========================
// // Symbol    Value
// // I          1
// // V          5
// // X          10
// // L          50
// // C          100
// // D          500
// // M          1,000

// // ===========================
// enum RomanNumerals {
//   I = 1,
//   V = 5,
//   X = 10,
//   L = 50,
//   C = 100,
//   D = 500,
//   M = 1000,
// }
// const solution = (roman: string): number => {
//   const sum = roman
//     .split('')
//     .map(char => {
//       return RomanNumerals[char as keyof typeof RomanNumerals]
//     })
//     .reduce((acc, cur) => acc + cur, 0)

//   console.log(sum)
//   return sum
// }

// solution('MM') // 2000
// solution('MDCLXVI') // 1666
// solution('XXI') // 21
// solution('I') // 1
// solution('IV') // 4
// solution('MMVIII') // 2008
// solution('MDCLXVI') // 1666

// function romanToInt(roman: string): number {
//   const romanMap: { [key: string]: number } = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }

//   let total = 0
//   for (let i = 0; i < roman.length; i++) {
//     const current = romanMap[roman[i]] // 1
//     const next = romanMap[roman[i + 1]] // 5

//     if (next && current < next) {
//       // 1 < 5
//       total += next - current // 5 - 1 = 4
//       i++ // skip next
//     } else {
//       // 1
//       total += current // 1
//     }
//   }

//   return total // 4
// }

// console.log(romanToInt('MM')) // 2000
// console.log(romanToInt('MDCLXVI')) // 1666
// console.log(romanToInt('XXI')) // 21
// console.log(romanToInt('I')) // 1
// console.log(romanToInt('IV')) // 4
// console.log(romanToInt('MMVIII')) // 2008
// console.log(romanToInt('MCMXC')) // 1990
