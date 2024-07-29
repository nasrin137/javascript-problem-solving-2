// 1
const person = {
    name:'nasrin akter',
    age:30,
}

const{name,age} = person;

console.log(name,age);


// 3
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  
  const result = new Rectangle(3, 10);
  console.log(`The area of the rectangle is ${result.calculateArea()}`);

// 4
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter for fullName
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter for fullName
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  
  const person1 = new Person('nasrin', 'akter');
  
  console.log(person1.fullName); 
  
  person1.fullName = 'nasrin akter';
  
  console.log(person1.firstName); 
  console.log(person1.lastName);  
  console.log(person1.fullName);  


//   5
  const Circle = class {
    constructor(radius) {
      this.radius = radius;
    }
  
    // calculate the circumference
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  const myCircleResult = new Circle(3);
  
  console.log(`The circumference of the circle is ${myCircleResult.calculateCircumference()}`); 


// 6
const propName1 = 'name';
const propName2 = 'age';
const propName3 = 'occupation';

const newPerson = {
  [propName1]: 'nasrin akter',
  [propName2]: 30,
  [propName3]: ' Developer'
};

console.log(newPerson); 
console.log(newPerson.name);
console.log(newPerson.age);  
console.log(newPerson.occupation); 

  
// 7
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); 
      this.breed = breed;
    }
  
    
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  }
  const myDog = new Dog('doggy', 'malay dog');
  
  console.log(myDog.name); 
  console.log(myDog.breed); 
  
  myDog.makeSound(); 

// 9
  class MathUtil {
    static square(number) {
      return number * number;
    }
  }
  const num = 7;
  console.log(`The square of ${num} is ${MathUtil.square(num)}`); 
  
  
// 10
const uniqueKey = Symbol('uniqueKey');

const obj = {
  [uniqueKey]: 'This is a unique value'
};


console.log(obj[uniqueKey]); 
console.log(Object.hasOwn(obj, uniqueKey)); 
console.log(obj['uniqueKey']); 
console.log(Object.getOwnPropertySymbols(obj)); 

   