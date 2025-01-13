export function validBraces(braces: string): boolean {
  const brackets: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const stack: string[] = []

  for (let char of braces) {
    if (brackets[char]) {
      stack.push(brackets[char])
    } else {
      if (stack.pop() !== char) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log('1: ', validBraces('(){}[]'))
console.log('2: ', validBraces('([{}])'))
console.log('3: ', validBraces('(}'))
console.log('4: ', validBraces('[(])'))
console.log('5: ', validBraces('[({})](]'))
