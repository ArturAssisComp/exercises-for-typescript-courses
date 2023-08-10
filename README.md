[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->

<a id="readme-top"></a>

<br />
<div align="center">
  <h3 align="center">Typescript Learning</h3>
  <p align="center">
    This repository contains exercises and tutorials for typescript.  
    <br />
    <a href="#learning"><strong>Explore the learning section</strong></a>
    <br />
    <br />
    <a href="https://github.com/ArturAssisComp/exercises-for-typescript-courses/issues">Report Bug</a>
    <br/>
    <a href="https://github.com/ArturAssisComp/exercises-for-typescript-courses/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li>
      <a href="#learning">Learning</a>
      <ul>
	<details>
          <summary>index</summary>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#types-cheat-sheet">Types Cheat Sheet</a>
            <ul>
              <li><a href="#basic-types">Basic Types</a></li>
              <li><a href="#array-tuple">Array & Tuple</a></li>
              <li><a href="#special-types">Special Types</a></li>
              <li><a href="#advanced-types">Advanced Types</a></li>
            </ul>
          </li>
          <li><a href="#how-to-use-lite-server-to-make-the-development-easier">How to use lite-server to make the development easier</a></li>
	</details>
      </ul>
    </li>
  </ol>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Description 

This repository contains exercises and tutorials for typescript. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Requirements

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Learning 

## Overview

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Types Cheat Sheet

### Basic Types

- **Number**: For numerical values. Handles both integers and floating-point values.
  ```typescript
  let age: number = 25;
  ```

- **String**: Represents textual data, useful for names, descriptions, etc.
  ```typescript
  let name: string = "John";
  ```

- **Boolean**: Represents binary values, used for flags and checks.
  ```typescript
  let isValid: boolean = true;
  ```

### Array & Tuple

- **Array**: Collection of similar values. Ideal when the number of items can change.
  ```typescript
  let fruits: string[] = ["apple", "banana", "cherry"];
  ```

- **Tuple**: A fixed-size array with specific types. Useful for representing a set of different types of values.
  ```typescript
  let coordinates: [number, number] = [10, 20];
  ```

### Special Types

- **Any**: For unknown types. Be cautious, as this may lead to type-related errors.
  ```typescript
  let unknownValue: any = 42;  // Could be reassigned to any other type
  ```

- **Void**: Represents the absence of a value, typically used for functions that don't return anything.
  ```typescript
  function logMessage(): void {
    console.log("This function does not return anything.");
  }
  ```

- **Never**: For values that should never happen, like a function that always throws an error.
  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  ```

- **Null & Undefined**: For variables that either hold no value or are uninitialized.
  ```typescript
  let nullVar: null = null;
  let undefinedVar: undefined = undefined;
  ```

### Advanced Types
  **Object**: Represents any non-primitive type, such as arrays, functions, classes, etc.
  ```typescript
  let user: object = {
    name: "John",
    age: 25,
  };
  ```

- **Enum**: Named sets of constants.
  ```typescript
  enum Color { Red, Green, Blue }
  let c: Color = Color.Green;
  ```

- **Union Types**: Variables that can have one of several types.
  ```typescript
  let id: number | string = "12345";  // Could also be a number
  ```

- **Type Aliases**: Custom names for a type or combination of types.
  ```typescript
  type StringOrNumber = string | number;
  let value: StringOrNumber = 42;  // Could also be a string
  ```

- **String Literal Types**: String variables with a limited set of possible values.
  ```typescript
  type Direction = "left" | "right" | "up" | "down";
  let move: Direction = "left";
  ```

- **Intersection Types**: Combining multiple types into one.
  ```typescript
  type Point = { x: number; y: number };
  type Label = { label: string };
  let labeledPoint: Point & Label = { x: 10, y: 20, label: "Origin" };
  ```

- **Type Assertions**: When you know a type, but TypeScript does not.
  ```typescript
  let someValue: any = "This is a string";
  let strLength: number = (<string>someValue).length;
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How to use lite-server to make the development easier

1. Init a new npm project

```bash
npm init
```

2. Install using the following command:

```bash
npm install --save-dev lite-server
```

3. Add the following script to your package.json file:

```json
...
"scripts": {
    ...
    "start": "lite-server"
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[issues-shield]: https://img.shields.io/github/issues/ArturAssisComp/exercises-for-typescript-courses.svg?style=for-the-badge
[issues-url]: https://github.com/ArturAssisComp/exercises-for-typescript-courses/issues
[license-shield]: https://img.shields.io/github/license/ArturAssisComp/exercises-for-typescript-courses.svg?style=for-the-badge
[license-url]: https://github.com/ArturAssisComp/exercises-for-typescript-courses/blob/main/LICENSE.txt
