// ! ---------------------- Generic Types ----------------------

// let array1: string[] = ['a', 'b', 'c'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ['Apple', 'Banana', 'Cherry'];

// console.log(array1);
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];

// let mixedArray: Array<string | number | boolean> = [
//   'Apple',
//   1,
//   true,
//   'Banana',
//   2,
//   false,
// ];

// console.log(array2);
// console.log(array3);
// console.log(mixedArray);

// ! ---------------------- Generic Functions ----------------------

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(100);

// console.log(someStringValue);
// console.log(someNumberValue);

interface GenericInterface<T> {
  value: T;
  someMethod: () => T;
}

const generigString: GenericInterface<string> = {
  value: 'Hello World',
  someMethod() {
    return this.value;
  },
};

const generigNumber: GenericInterface<number> = {
  value: 100,
  someMethod() {
    return this.value;
  },
};

async function someFunc(): Promise<string> {
  return 'Hello World';
}

const someResult = someFunc();
// console.log(someResult);

// ! ---------------------- Tiny Challenge --------------------------------

createArray<string>(3, 'hello'); // ['hello', 'hello', 'hello']
createArray<number>(4, 100); // [100, 100, 100, 100]

function createArray<T>(length: number, value: T): Array<T> {
  return Array.from({ length }, () => value);
  //   return new Array(length).fill(value);
}

// ! ---------------------- Generic Two Types ----------------------

function genericFunctionTwoTypes<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}

const someStringValueTwoTypes = genericFunctionTwoTypes<string, number>(
  'Hello',
  100,
);

// console.log(someStringValueTwoTypes);

// ! ---------------------- Generic EXTENDS ----------------------

function processValue<T extends string | number>(value: T): T {
  return value;
}

processValue('Hello World');
processValue(100);
// processValue<boolean>(true); // Error

// ! ---------------------- Generic Inference ----------------------

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};

// T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.

// function printName<T extends Student>(input: T): void {
//   console.log(input.name);
// }

// printName(student);

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name);
// }

// printName(product);

// The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
// In other words, T must have at least the same properties and methods that { name: string } has.
function printName<T extends { name: string }>(input: T): void {
  //   console.log(input.name);
}

printName(student);
printName(product);
// printName(car); // Error

// ! ---------------------- Generic Default Type ----------------------

function genericFunctionDefault<T = string>(arg: T): T {
  return arg;
}

const someStringValueDefault = genericFunctionDefault('Hello World');
const someNumberValueDefault = genericFunctionDefault(100);

interface StoreData<T = string> {
  data: T[];
}

const store1: StoreData = {
  data: ['A', 'B', 'C'],
};

const store2: StoreData<number> = {
  data: [1, 2, 3],
};

const store3: StoreData<any> = {
  data: ['hello', 23],
};

// ! ---------------------- Generic Class ----------------------

class GenericClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  someMethod(): T {
    return this.value;
  }
}

const genericClassString = new GenericClass<string>('Hello World');
const genericClassNumber = new GenericClass<number>(100);

// console.log(genericClassString.someMethod());
// console.log(genericClassNumber.someMethod());

// ! ---------------------- Generic Class with Constraints ----------------------

class GenericClassWithConstraint<T extends string | number> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  someMethod(): T {
    return this.value;
  }
}

const genericClassStringConstraint = new GenericClassWithConstraint<string>(
  'Hello World',
);

const genericClassNumberConstraint = new GenericClassWithConstraint<number>(
  100,
);

// console.log(genericClassStringConstraint.someMethod());
// console.log(genericClassNumberConstraint.someMethod());

// ! ---------------------- Generic Interface --------------------------------

interface GenericInterfaceTwo<T> {
  value: T;
  someMethod: () => T;
}

const genericInterfaceString: GenericInterfaceTwo<string> = {
  value: 'Hello World',
  someMethod() {
    return this.value;
  },
};

const genericInterfaceNumber: GenericInterfaceTwo<number> = {
  value: 100,
  someMethod() {
    return this.value;
  },
};

// ! ---------------------- Generic Interface with Constraints --------------------------------

interface GenericInterfaceWithConstraint<T extends string | number> {
  value: T;
  someMethod: () => T;
}

const genericInterfaceStringConstraint: GenericInterfaceWithConstraint<string> =
  {
    value: 'Hello World',
    someMethod() {
      return this.value;
    },
  };

const genericInterfaceNumberConstraint: GenericInterfaceWithConstraint<number> =
  {
    value: 100,
    someMethod() {
      return this.value;
    },
  };

// ! ---------------------- Generic Interface with Default Type --------------------------------

interface GenericInterfaceWithDefault<T = string> {
  value: T;
  someMethod: () => T;
}

const genericInterfaceStringDefault: GenericInterfaceWithDefault = {
  value: 'Hello World',
  someMethod() {
    return this.value;
  },
};

const genericInterfaceNumberDefault: GenericInterfaceWithDefault<number> = {
  value: 100,
  someMethod() {
    return this.value;
  },
};

// ! ---------------------- Generic Type Alias --------------------------------

type GenericType<T> = {
  value: T;
  someMethod: () => T;
};

const genericTypeString: GenericType<string> = {
  value: 'Hello World',
  someMethod() {
    return this.value;
  },
};

const genericTypeNumber: GenericType<number> = {
  value: 100,
  someMethod() {
    return this.value;
  },
};
