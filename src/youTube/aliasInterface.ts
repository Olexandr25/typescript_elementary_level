// Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// Now that we have our interface, we can create an object that adheres to this interface.
// This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
// Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam: (newRam: number) => number;
}

const myComputer: Computer = {
  id: 1,
  brand: 'Apple',
  ram: 16,
  storage: 512,
  upgradeRam(newRam: number) {
    return (this.ram += newRam);
  },
};

// console.log(myComputer.upgradeRam(32)) // 48

// ! ----------------------------------------------------------------
// interface Person {
//   name: string
//   getDetails: () => string
// }

// interface DogOwner {
//   dogName: string
//   getDogDetails: () => string
// }

// interface Person {
//   age: number
// }

// const person: Person = {
//   name: 'John',
//   age: 30,
//   getDetails() {
//     return `Person: ${this.name}, ${this.age}`
//   },
// }

// const dogOwner: DogOwner = {
//   dogName: 'Buddy',
//   getDogDetails() {
//     return `Dog Owner: ${this.dogName}`
//   },
// }

// interface Employee extends Person {
//   employeeId: number
// }

// const employee: Employee = {
//   employeeId: 1,
//   name: 'Jane',
//   age: 25,
//   getDetails() {
//     return `Employee: ${this.name}, ${this.age}, ${this.employeeId}`
//   },
// }

// interface Manager extends Person, DogOwner {
//   managePeople: () => void
// }

// const manager: Manager = {
//   name: 'Alice',
//   age: 35,
//   dogName: 'Max',
//   managePeople() {
//     console.log('Managing people...')
//   },
//   getDetails() {
//     return `Manager: ${this.name}, ${this.age}, ${this.dogName}`
//   },
//   getDogDetails() {
//     return `Dog Owner: ${this.dogName}`
//   }
// }

// console.log(person.getDetails()) // Person: John
// console.log(employee.getDetails()) // Employee: Jane, 25, 1
// console.log(manager.getDetails()) // Manager: Alice, 35, Max
// console.log(manager.managePeople()) // Managing people...
// console.log(manager.getDogDetails()) // Dog Owner: Max

// ! ----------------------------------------------------------------

// ## Challenge - Part 1
//
// - Define the Person interface Start by defining a Person interface with a name property of type string.
// - Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// - Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks.
// Both methods should have a return type of void.
// - Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager.
// Inside this function, generate a random number and use it to decide which type of object to return.
// If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// - Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee.
// Then, log employee to the console.

interface Person {
  name: string;
}
interface DogOwner extends Person {
  dogName: string;
}
interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();

console.log(employee);

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'John',
    };
  } else if (random < 0.66) {
    return {
      name: 'Alice',
      dogName: 'Bib',
    };
  } else {
    return {
      name: 'bob',
      managePeople() {
        console.log('manage people');
      },
      delegateTasks() {
        console.log('delegate tasks');
      },
    };
  }
}

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  // return (obj as Manager).managePeople !== undefined;
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.managePeople();
}

console.log('isManager: ', isManager(employee));
