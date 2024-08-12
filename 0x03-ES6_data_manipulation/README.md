![image](https://github.com/user-attachments/assets/2777f31c-2758-40ea-81b6-04bab1657d49)

---

# JavaScript Array Methods and Data Structures

## Table of Contents

1. [Introduction](#introduction)
2. [Array Methods: map, filter, and reduce](#array-methods-map-filter-and-reduce)
   - [Using `map`](#using-map)
   - [Using `filter`](#using-filter)
   - [Using `reduce`](#using-reduce)
3. [Typed Arrays](#typed-arrays)
   - [What Are Typed Arrays?](#what-are-typed-arrays)
   - [Common Typed Arrays](#common-typed-arrays)
   - [Use Cases for Typed Arrays](#use-cases-for-typed-arrays)
4. [Set, Map, and Weak Link Data Structures](#set-map-and-weak-link-data-structures)
   - [Set](#set)
   - [Map](#map)
   - [WeakSet and WeakMap](#weakset-and-weakmap)
5. [Practical Examples](#practical-examples)

## Introduction

JavaScript provides powerful tools and data structures to work with arrays and collections of data. Understanding how to use methods like `map`, `filter`, and `reduce`, as well as working with typed arrays and modern data structures like `Set`, `Map`, and `WeakMap`, can significantly enhance your programming skills.

## Array Methods: map, filter, and reduce

### Using `map`

The `map` method creates a new array by applying a function to each element of an existing array.

```javascript
const numbers = [1, 2, 3, 4];
const squares = numbers.map(x => x * x);
console.log(squares); // Output: [1, 4, 9, 16]
```

- **Purpose**: Transform each element of an array based on a function.
- **Returns**: A new array of the same length.

### Using `filter`

The `filter` method creates a new array containing only the elements that pass a specified condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]
```

- **Purpose**: Select elements from an array that meet a certain condition.
- **Returns**: A new array with only the elements that pass the test.

### Using `reduce`

The `reduce` method applies a function to each element of an array, accumulating the results into a single value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, value) => total + value, 0);
console.log(sum); // Output: 10
```

- **Purpose**: Reduce an array to a single value (e.g., sum, product, concatenation).
- **Returns**: A single value.

## Typed Arrays

### What Are Typed Arrays?

Typed arrays provide a way to work with raw binary data in JavaScript. They allow you to manipulate binary data (e.g., images, audio, video) with specific data types (e.g., integers, floats).

### Common Typed Arrays

- **Int8Array**: 8-bit signed integer.
- **Uint8Array**: 8-bit unsigned integer.
- **Float32Array**: 32-bit floating-point number.
- **Uint8ClampedArray**: 8-bit unsigned integer clamped to 0-255 (useful for image processing).

### Use Cases for Typed Arrays

- **Manipulating Binary Data**: Working with files, buffers, or network protocols that require binary data manipulation.
- **Performance**: Typed arrays can be more efficient for numerical computations, such as in games or simulations.

```javascript
const buffer = new ArrayBuffer(8);
const int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // Output: 42
```

## Set, Map, and Weak Link Data Structures

### Set

A `Set` is a collection of unique values, where each value can occur only once.

```javascript
const set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Output: Set { 1, 2, 3, 4 }
```

- **Purpose**: Store unique elements and prevent duplicates.
- **Common Methods**:
  - `add(value)`: Adds a value to the set.
  - `delete(value)`: Removes a value from the set.
  - `has(value)`: Checks if a value is in the set.

### Map

A `Map` is a collection of key-value pairs, where each key is unique.

```javascript
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // Output: value1
```

- **Purpose**: Associate keys with values, similar to objects, but with better support for arbitrary keys.
- **Common Methods**:
  - `set(key, value)`: Adds or updates a key-value pair.
  - `get(key)`: Retrieves the value for a given key.
  - `delete(key)`: Removes a key-value pair.

### WeakSet and WeakMap

- **WeakSet**: Like `Set`, but allows only objects as members, and references are held weakly, meaning they can be garbage collected if no other references exist.
- **WeakMap**: Like `Map`, but only allows objects as keys, and references to the keys are held weakly.

```javascript
let obj = { key: 'value' };
const weakMap = new WeakMap();
weakMap.set(obj, 'metadata');
obj = null; // The object can be garbage collected, along with its entry in the WeakMap.
```

- **Purpose**: Manage memory efficiently when working with objects that may not need to be kept alive.
- **Use Cases**: Caching, managing metadata for objects without preventing their garbage collection.

## Practical Examples

### Example: Using `map`, `filter`, and `reduce`

Suppose you have an array of numbers, and you want to square only the even numbers and then sum them.

```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(x => x % 2 === 0) // Filter even numbers
  .map(x => x * x) // Square them
  .reduce((sum, x) => sum + x, 0); // Sum the squares

console.log(result); // Output: 20 (4 + 16)
```

### Example: Using a Set to Store Unique Values

You have a list of words and want to filter out any duplicates.

```javascript
const words = ['apple', 'banana', 'apple', 'orange'];
const uniqueWords = new Set(words);

console.log(uniqueWords); // Output: Set { 'apple', 'banana', 'orange' }
```

### Example: Using a Map to Store Key-Value Pairs

You want to store the age of different people by their names.

```javascript
const ageMap = new Map();
ageMap.set('Alice', 25);
ageMap.set('Bob', 30);

console.log(ageMap.get('Alice')); // Output: 25
```

---
