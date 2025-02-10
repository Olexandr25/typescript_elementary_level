// ! --------------------------Classes----------------------------
class Book {
  public readonly title: string;
  public author: string;
  //   checkedOut: boolean = false;
  private checkedOut = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public checkOut() {
    this.checkedOut = this.toggleCheckedOut();
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOut() {
    this.checkedOut = !this.checkedOut;
    return this.checkedOut;
  }
}

const book = new Book('The Alchemist', 'Paulo Coelho');
// book.checkedOut = 'true'; // ! Error: Type 'string' is not assignable to type 'boolean'.
// book.title = 'The Alchemist'; // ! Error: Cannot assign to 'title' because it is a read-only property.

book.checkOut();
book.checkOut();
// console.log(book.isCheckedOut()); // true

// ! --------------------------Classes [Get, Set]----------------------------

class Movie {
  private _checkedOut: boolean = false;
  constructor(
    readonly title: string,
    public author: string,
    private someValue: number,
  ) {}

  public getSomeValue() {
    return this.someValue;
  }

  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkedOut(value: boolean) {
    this._checkedOut = value;
  }

  get checkOut() {
    return this._checkedOut;
  }

  public get someInfo() {
    this.checkedOut = true;
    return `Checked out: ${this._checkedOut}`;
  }
}

const movie = new Movie('The Alchemist', 'Paulo Coelho', 10);
// console.log(movie.getSomeValue()); // 10
// console.log(movie.info); // The Alchemist by Paulo Coelho

// // movie.checkedOut = true;

// console.log(movie.someInfo); // Checked out: true
// console.log(movie.checkOut); // true
// console.log(movie);

// ! --------------------------Classes [Interface]----------------------------

interface IPerson {
  name: string;
  age: number;
  speak(): void;
}

class Person implements IPerson {
  constructor(
    public name: string,
    public age: number,
  ) {}

  speak() {
    console.log('Hello');
  }
}

const person = new Person('John Doe', 30);
console.log(person);
