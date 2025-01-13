function score(dice: number[]): number {
  let result = 0
  new Set(dice).forEach(number => {
    const count = dice.filter(n => n === number).length
    if (number === 1) {
      result += (count % 3) * 100
    }
    if (number === 5) {
      result += (count % 3) * 50
    }
    if (count >= 3) {
      result += number === 1 ? 1000 : number * 100
    }
  })

  return result
}
console.log(score([1, 5, 5, 5, 5]))
// console.log(score([2, 2, 2, 3, 3]))
// console.log(score([2, 4, 4, 5, 4]))

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

// score([5, 1, 3, 4, 1])
// score([1, 1, 1, 3, 1])
// score([2, 4, 4, 5, 4])
