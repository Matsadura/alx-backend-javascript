![image](https://github.com/user-attachments/assets/84a8fe5a-e96b-406b-a26d-219e2c14f014)

---

# JavaScript Classes and Metaprogramming

## Table of Contents

1. [Defining a Class](#defining-a-class)
2. [Adding Methods to a Class](#adding-methods-to-a-class)
3. [Static Methods](#static-methods)
   - [Why Use Static Methods](#why-use-static-methods)
   - [How to Add a Static Method](#how-to-add-a-static-method)
4. [Extending a Class](#extending-a-class)
5. [Metaprogramming and Symbols](#metaprogramming-and-symbols)

## Defining a Class

In JavaScript, ES6 introduced the `class` syntax as a more straightforward and clearer way to create objects and handle inheritance. A class is essentially a blueprint for creating objects with predefined properties and methods.

### Example

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

In this example, the `Person` class has a constructor method that initializes the `name` and `age` properties for any new instance of the class.

## Adding Methods to a Class

Methods in JavaScript classes are added directly within the class body. These methods are automatically added to the prototype of the class, making them available to all instances of the class.

### Example

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
```

In this example, the `greet` method is added to the `Person` class, and it can be called on any instance of `Person`.

## Static Methods

Static methods are methods that are called on the class itself, rather than on instances of the class. They are often used for utility functions that are related to the class but do not require an instance to operate.

### Why Use Static Methods

Static methods are useful for defining functions that are related to the class but do not need to access instance-specific data. For example, a `Math` class might include a static method for calculating the square root of a number.

### How to Add a Static Method

Static methods are defined using the `static` keyword before the method name.

### Example

```javascript
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 10)); // 15
```

In this example, the `add` method is a static method of the `Calculator` class, and it can be called directly on the class itself, without creating an instance.

## Extending a Class

JavaScript classes support inheritance, allowing you to create a new class that extends an existing class. This new class (the child) inherits all the properties and methods of the original class (the parent), but can also have its own additional properties and methods.

### Example

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  work() {
    return `${this.name} is working as a ${this.jobTitle}.`;
  }
}
```

In this example, `Employee` extends `Person`, so it inherits the `name` and `age` properties and the `greet` method from `Person`. The `Employee` class also has its own `work` method.

## Metaprogramming and Symbols

### Metaprogramming

Metaprogramming is a programming technique in which code can manipulate itself or other code as data. In JavaScript, metaprogramming is often done using Proxy objects, Reflect API, and Symbols.

- **Proxy**: Allows you to create an object that wraps another object, intercepting and redefining fundamental operations like property access and assignment.
  
- **Reflect**: Provides methods for interceptable JavaScript operations. It's a built-in object that simplifies creating custom behavior in conjunction with proxies.

### Symbols

Symbols are a unique and immutable data type introduced in ES6, primarily used as unique property keys. They are useful in metaprogramming, where you might want to define properties that are not easily accessible or that do not conflict with other properties.

### Example

```javascript
const uniqueKey = Symbol('key');

class MyClass {
  constructor() {
    this[uniqueKey] = 'Secret value';
  }

  getSecret() {
    return this[uniqueKey];
  }
}

const instance = new MyClass();
console.log(instance.getSecret()); // "Secret value"
```

In this example, `uniqueKey` is a Symbol, ensuring that the property defined with it is unique and cannot be accessed without the Symbol itself.

---
