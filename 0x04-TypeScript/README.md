![image](https://github.com/user-attachments/assets/5dadf7cd-2805-4627-8397-0924033260ab)

---

# TypeScript Guide: Core Concepts and Advanced Features

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Types in TypeScript](#basic-types-in-typescript)
3. [Interfaces, Classes, and Functions](#interfaces-classes-and-functions)
   - [Defining Interfaces](#defining-interfaces)
   - [Creating Classes](#creating-classes)
   - [Functions in TypeScript](#functions-in-typescript)
4. [Working with the DOM and TypeScript](#working-with-the-dom-and-typescript)
5. [Generic Types](#generic-types)
6. [Namespaces](#namespaces)
   - [Using Namespaces](#using-namespaces)
   - [Merging Declarations](#merging-declarations)
   - [Using Ambient Namespaces](#using-ambient-namespaces)
7. [Basic Nominal Typing with TypeScript](#basic-nominal-typing-with-typescript)

## Introduction

TypeScript is a strongly typed superset of JavaScript that adds static typing to the language. This guide covers essential TypeScript concepts, including types, interfaces, classes, functions, and more advanced features like generics, namespaces, and nominal typing.

## Basic Types in TypeScript

TypeScript introduces a variety of basic types that provide better code safety and clarity.

- **`number`**: Represents all numeric values.
  ```typescript
  let age: number = 25;
  ```

- **`string`**: Represents text data.
  ```typescript
  let name: string = "Alice";
  ```

- **`boolean`**: Represents true/false values.
  ```typescript
  let isStudent: boolean = true;
  ```

- **`array`**: Represents a collection of values of a specific type.
  ```typescript
  let scores: number[] = [90, 85, 88];
  ```

- **`tuple`**: Represents an array with a fixed number of elements and types.
  ```typescript
  let person: [string, number] = ["Alice", 25];
  ```

- **`enum`**: Represents a collection of related values.
  ```typescript
  enum Direction { Up, Down, Left, Right }
  let move: Direction = Direction.Up;
  ```

- **`any`**: Represents any type. Use sparingly, as it disables type checking.
  ```typescript
  let something: any = "Hello";
  ```

- **`void`**: Represents the absence of a value, typically used for functions that do not return a value.
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```

- **`undefined` and `null`**: Represent undefined and null values, respectively.
  ```typescript
  let u: undefined = undefined;
  let n: null = null;
  ```

## Interfaces, Classes, and Functions

### Defining Interfaces

Interfaces define the structure of an object, specifying the types of its properties.

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}

let alice: Person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("Hello, I'm Alice.");
  }
};
```

### Creating Classes

Classes in TypeScript provide a blueprint for creating objects with specific properties and methods.

```typescript
class Student implements Person {
  name: string;
  age: number;
  studentId: number;

  constructor(name: string, age: number, studentId: number) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
  }

  greet(): void {
    console.log(`Hello, I'm ${this.name}, and my ID is ${this.studentId}.`);
  }
}

const student = new Student("Alice", 25, 12345);
student.greet(); // Output: Hello, I'm Alice, and my ID is 12345.
```

### Functions in TypeScript

Functions can be typed by specifying the types of their parameters and return value.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const sum: number = add(2, 3); // Output: 5
```

TypeScript also supports optional and default parameters.

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

## Working with the DOM and TypeScript

TypeScript provides strong typing when interacting with the Document Object Model (DOM).

```typescript
const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
}
```

TypeScript helps prevent common errors, such as accessing a DOM element that may not exist.

## Generic Types

Generics allow you to create components that work with a variety of types while still maintaining type safety.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("Hello");
const output2 = identity<number>(42);
```

Generics are commonly used with arrays, functions, and classes to create flexible, reusable components.

## Namespaces

### Using Namespaces

Namespaces are a way to organize and encapsulate code in TypeScript. They are particularly useful for avoiding name collisions in large projects.

```typescript
namespace MathOperations {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

const sum = MathOperations.add(10, 5); // Output: 15
```

### Merging Declarations

Declaration merging allows multiple declarations of the same entity (e.g., interfaces, namespaces) to be combined.

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

const box: Box = { height: 10, width: 20, scale: 1.5 };
```

### Using Ambient Namespaces

Ambient namespaces are used to describe the shape of external libraries that do not have TypeScript definitions.

```typescript
declare namespace MyLibrary {
  function doSomething(): void;
}

MyLibrary.doSomething();
```

You can import an external JavaScript library and use it in TypeScript by declaring its types in an ambient namespace.

## Basic Nominal Typing with TypeScript

Nominal typing is a type system where compatibility between types is determined by explicit declarations rather than just their structure (as in structural typing).

TypeScript is structurally typed by default, but you can implement basic nominal typing by using `branded types`.

```typescript
type UserId = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}

function getUserById(id: UserId) {
  // Logic to retrieve user by ID
}

const userId = createUserId("abc123");
getUserById(userId); // Correct
getUserById("abc123"); // Error: Argument of type 'string' is not assignable to parameter of type 'UserId'.
```

In this example, `UserId` is a branded type that prevents a plain string from being used in its place, enforcing a form of nominal typing.

---
