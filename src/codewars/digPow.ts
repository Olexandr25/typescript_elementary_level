const digPow = (n: number, p: number): number => {
  const arr = [...n.toString()]
    .map(Number)
    .map((item, index) => {
      return item ** (p + index)
    })
    .reduce((prev, cur) => prev + cur, 0)

  return arr % n === 0 ? arr / n : -1
}

console.log('1: ', digPow(89, 1))
console.log('2: ', digPow(92, 1))
console.log('3: ', digPow(114, 3))
// dotest(89, 1, 1)
// dotest(92, 1, -1)
// dotest(114, 3, 9)
