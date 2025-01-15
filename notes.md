### 🟦 **Global Scope**  
- `let peliculaTitulo = "avengers"`: 🌍 This variable is declared **outside any function**, so it belongs to the **global scope**. It can be accessed and modified anywhere in the script, except when shadowed.
- `const peliculaPrecio = 20`: 🌍 This constant is also in the **global scope**, but since it's a `const`, its value **cannot be changed** after its declaration.

---

### 🟩 **Function `setTitulo`**
```javascript
function setTitulo() {
    let peliculaTitulo = "Terminator 2"; // second scope
    console.log(peliculaTitulo); // logs "Terminator 2"
}
```
- Inside this function:
  - 🟢 A **new `let` variable** `peliculaTitulo` is declared, **local to this function**.
  - This **shadows** the global `peliculaTitulo`. 🌫️ The global variable remains **untouched**.
  - `console.log(peliculaTitulo)` outputs **"Terminator 2"**, which is the value of the local variable.

---

### 🟨 **Function `setPrecio`**
```javascript
function setPrecio() {
    const peliculaPrecio = 50;
    console.log(peliculaPrecio); // logs "50"
    // peliculaPrecio = 60; // ❌ Error: cannot reassign a constant
}
```
- Inside this function:
  - 🟡 A **new `const` variable** `peliculaPrecio` is declared, **local to this function**.
  - This **shadows** the global `peliculaPrecio`. 🌫️ The global constant remains **untouched**.
  - `console.log(peliculaPrecio)` outputs **"50"**, which is the value of the local constant.
  - Reassigning `peliculaPrecio = 60` will throw an **error** ❌ because constants cannot be reassigned.

---

### 🟥 **Global Logs**
```javascript
console.log(peliculaTitulo); // logs "avengers"
console.log(peliculaPrecio); // logs 20
```
- After calling the functions:
  - 🟥 The global `peliculaTitulo` is **still "avengers"**, as it was never modified.
  - 🟥 The global `peliculaPrecio` is **still 20**, as the `const` cannot be reassigned, and the local `peliculaPrecio` in `setPrecio` does not affect it.

---

### 🔍 **Key Takeaways**  
- **Scopes matter!** Variables declared with `let` or `const` inside a function are **local** to that function and do not affect global variables with the same name. 🌐  
- **`const` values cannot be reassigned.** Attempting to do so results in an error. 🚫  
- **Shadowing** happens when a local variable **hides** a variable with the same name from an outer scope. 🌫️  

---

### 🖥️ **Output of the Code**:
```plaintext
Terminator 2
50
avengers
20
```
### 🛠️ **Concatenation Explanation with Backticks (`Template Literals`)**

In your function `mostrarPrecio`, two different methods are used to concatenate strings with a variable. Let's break it down! 😊

---

### **Method 1: Using the `+` Operator**  
```javascript
console.log("El precio es: " + peliculaPrecio);
```

- In this case:
  - The **`+` operator** is used to combine the string `"El precio es: "` with the value of the variable `peliculaPrecio`.
  - If `peliculaPrecio` contains `65`, the output will be:
    ```plaintext
    El precio es: 65
    ```

- **Limitation**: This method can become **hard to read** and **error-prone** when combining multiple variables or creating multi-line strings.

---

### **Method 2: Using Backticks and Template Literals**  
```javascript
console.log(`el precio es: ${peliculaPrecio} `);
```

- **Backticks (` `` `)**:
  - These allow you to use **template literals**, making string concatenation easier and more readable.
  - Variables or expressions are inserted directly into the string using `${}`. This is known as **interpolation**.

- In this example:
  - The **template literal** directly embeds the value of `peliculaPrecio` inside the string.
  - If `peliculaPrecio` contains `65`, the output will be:
    ```plaintext
    el precio es: 65
    ```

- **Advantages**:
  - Easier to read and maintain, especially for multi-line strings or when using many variables.
  - Supports advanced expressions directly inside the `${}`, like calculations or function calls.

---

### **Why Use Template Literals?**  

- ✅ **More Readable**: No need to manually add `+` for variables.
- ✅ **Supports Multi-line Strings**:
  ```javascript
  console.log(`El precio
  es:
  ${peliculaPrecio}`);
  ```
  Output:
  ```plaintext
  El precio
  es:
  65
  ```

- ✅ **Dynamic and Powerful**: Use expressions directly.
  ```javascript
  console.log(`El precio con descuento es: ${peliculaPrecio - 10}`);
  ```
  Output:
  ```plaintext
  El precio con descuento es: 55
  ```

---

### **Final Recommendation**
Use **backticks and template literals** for modern JavaScript development. They're cleaner, more flexible, and easier to debug. 🚀

/*
Arrow Functions in JavaScript
=============================

Arrow functions, introduced in ES6, provide a more concise syntax for writing functions. They are particularly useful for creating shorter functions and for improving the readability of your code. Below is an example of how an arrow function can be used.
*/

// Declare a variable with a value
let peliculaPrecio = 70;

// Define an arrow function
const mostrarPrecio = () => console.log(`el precio es: ${peliculaPrecio} `);

// Call the arrow function
mostrarPrecio();

/*
Explanation
-----------
1. **Declaration**:
   - The variable `peliculaPrecio` is declared globally with a value of 70.

2. **Arrow Function Syntax**:
   - `const mostrarPrecio = () => { ... }`:
     - The `()` represents the parameter list (empty here since no arguments are passed).
     - The `=>` indicates the arrow function.
     - The `console.log` statement is the body of the function.
   - Since the body contains only one statement, curly braces `{}` and the `return` keyword are omitted.

3. **Template Literals**:
   - The function uses a template literal (backticks ``) to interpolate the value of `peliculaPrecio` directly into the string.

4. **Calling the Function**:
   - The function is invoked using `mostrarPrecio()`, which outputs the string to the console.

Advantages of Arrow Functions
-----------------------------
1. **Concise Syntax**:
   - Arrow functions require fewer lines of code compared to traditional function expressions.

2. **No `this` Binding**:
   - Arrow functions do not have their own `this`. Instead, they inherit `this` from the surrounding lexical scope.

3. **Improved Readability**:
   - For simple operations, arrow functions can make the code cleaner and easier to understand.

Use Cases
---------
- Short callback functions.
- Inline functions in array methods like `map`, `filter`, or `reduce`.
- Situations where lexical scoping of `this` is desired.

Example Output
--------------
When you run the code, the following output is displayed in the console:
```plaintext
el precio es: 70 
