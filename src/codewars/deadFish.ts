const parse = (data: string): number[] => {
  let value = 0

  return [...data].reduce((acc: number[], cur) => {
    switch (cur) {
      case 'i':
        value++
        break
      case 'd':
        value--
        break
      case 's':
        value *= value
        break
      case 'o':
        acc.push(value)
        break
    }
    return acc
  }, [])
}

// parse("iiisdoso") => [8, 64]
console.log(parse('iiisdoso'))
console.log(parse('iiii'))
console.log(parse('iiisxxxdosoddd'))
