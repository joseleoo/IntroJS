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

### 🗺️ **Understanding the `map` Function with Your Code** 🌟

---

### **Code Breakdown**
Here's your code:

```javascript
let peliculas = [
    { idPelicula: 1, titulo: "Avatar" },
    { idPelicula: 2, titulo: "Terminator 2" },
    { idPelicula: 3, titulo: "Silent Hill" },
];

const mostrarTodas = (peliculas) => {
    peliculas.map((p) => console.log(p.idPelicula, p.titulo));
};

mostrarTodas(peliculas);
```

---

### 🟦 **What is `map`?**
- The `map` function is a **higher-order function** in JavaScript that is used to **iterate over an array**.
- It creates a **new array** by applying a callback function to each element of the original array.
- Key points:
  - It **does not mutate** the original array.
  - It is typically used to **transform or format** array data.

---

### 🟩 **What Happens in Your Code?**
1. **Array `peliculas`**:
   - This is an array of objects, where each object represents a movie with two properties: `idPelicula` and `titulo`.
   - Example:
     ```plaintext
     [
         { idPelicula: 1, titulo: "Avatar" },
         { idPelicula: 2, titulo: "Terminator 2" },
         { idPelicula: 3, titulo: "Silent Hill" }
     ]
     ```

2. **Function `mostrarTodas`**:
   - Takes the `peliculas` array as an argument.
   - Uses the `map` function to **iterate over each movie**.
   - The callback function `(p) => console.log(p.idPelicula, p.titulo)`:
     - `p` represents each movie object in the array.
     - Logs the `idPelicula` and `titulo` of each movie.

3. **Result**:
   - When `mostrarTodas(peliculas)` is called, the following is logged:
     ```plaintext
     1 Avatar
     2 Terminator 2
     3 Silent Hill
     ```

---

### 🟨 **When to Use `map`?**
- **Transform Data**: Use `map` when you need to create a new array based on some transformation of the original array.
- **Iterate with Side Effects**: While your example works, using `map` **just to log values** is not ideal. For logging or side effects, use `forEach` instead.

---

### 🟥 **Why is `map` Not Ideal Here?**
- The purpose of `map` is to **return a new array**, but in this code, the `map` result is not stored or used.
- **Better Alternative**: Use `forEach` for side effects like logging:
  ```javascript
  peliculas.forEach((p) => console.log(p.idPelicula, p.titulo));
  ```

---

### 🎨 **Enhanced Visualization** 🌈
Here’s the process illustrated step by step:

1️⃣ **Original Array**:
```javascript
[
    { idPelicula: 1, titulo: "Avatar" },
    { idPelicula: 2, titulo: "Terminator 2" },
    { idPelicula: 3, titulo: "Silent Hill" }
]
```

2️⃣ **Using `map`**:
- Iterates over each element (`p`):
  - First Iteration: `p = { idPelicula: 1, titulo: "Avatar" }`
  - Second Iteration: `p = { idPelicula: 2, titulo: "Terminator 2" }`
  - Third Iteration: `p = { idPelicula: 3, titulo: "Silent Hill" }`

3️⃣ **Console Output**:
```plaintext
1 Avatar
2 Terminator 2
3 Silent Hill
```

---

### ✅ **Key Takeaways**
- **Use `map`** when you need to transform an array and use or return the resulting array.
- For logging or other side effects, **use `forEach`**.
- Example with `map` for transformation:
  ```javascript
  const titulos = peliculas.map((p) => p.titulo);
  console.log(titulos); // ["Avatar", "Terminator 2", "Silent Hill"]
  ```

# 📚 Operador Spread en JavaScript

El **operador spread (`...`)** en JavaScript se usa para expandir elementos de un iterable (como un array u objeto) en lugares donde se esperan múltiples elementos. Su principal función es **copiar, combinar o clonar estructuras de datos de forma inmutable**, lo que es útil en la programación funcional y en la manipulación eficiente de datos.

---

## 📝 Explicación como profesor:
Imagina que tienes una lista de películas y quieres agregar una nueva sin modificar la lista original. Si modificaras la lista directamente, podrías generar problemas inesperados en el código. En su lugar, el operador spread (`...`) nos permite **crear un nuevo array** combinando los elementos del array original con la nueva película.

---

## 🔍 Ejemplo en código:
```javascript
let peliculas = [
    { idPelicula: 1, titulo: "Avatar" },
    { idPelicula: 2, titulo: "Terminator 2" },
    { idPelicula: 3, titulo: "Silent Hill" },
];

let nuevaPelicula = { idPelicula: 20, titulo: "Scarface" };

// Función para agregar una película sin modificar el array original
const agregarPelicula = () => {
    let todas = [...peliculas, nuevaPelicula]; // Se crea un nuevo array combinando ambos
    console.log(todas);
};

agregarPelicula();
# 🌐 Método `fetch()` en JavaScript

El método **`fetch()`** en JavaScript se usa para realizar **solicitudes HTTP** y obtener datos de servidores de manera asíncrona. Es una alternativa moderna a `XMLHttpRequest` y permite interactuar con **APIs** de manera sencilla.

---

## 📝 Explicación como profesor:
Imagina que quieres obtener una lista de películas desde un servidor. Antes de `fetch()`, necesitábamos código más complejo para hacer esto. Con `fetch()`, podemos **solicitar datos** de una API y procesarlos de manera eficiente usando **promesas (`.then()`) o `async/await`**.

---

## 🔍 Ejemplo en código:
```javascript
// URL de una API que devuelve una lista de películas en formato JSON
const url = "https://api.example.com/peliculas";

// Función para obtener las películas usando fetch()
const obtenerPeliculas = async () => {
    try {
        const respuesta = await fetch(url); // Realiza la solicitud HTTP
        if (!respuesta.ok) throw new Error("Error en la solicitud"); // Manejo de errores

        const peliculas = await respuesta.json(); // Convierte la respuesta a JSON
        console.log("Lista de películas:", peliculas);
    } catch (error) {
        console.error("Hubo un problema al obtener las películas:", error);
    }
};

obtenerPeliculas();```
Sure! Here's a **teacher-style explanation** in **Markdown format** to help you understand `async` and `await` using the code you shared:

---

## 🧠 **Understanding `async` and `await` in JavaScript** 🚀

---

### 📄 **Your Code Overview**

**JavaScript file (`Script.js`):**

```javascript
const getPhotos = async () => {
   await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => data.map((p) => console.log(p.id, p.title)));

   document.write("<H2>Ready</H2>");
};

getPhotos();
```

**HTML file:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro</title>
    <script type="module" src="Script.js"></script>
</head>
<body>
    <h1>Introduccion a ES6</h1>
    <h2>loading...</h2>
</body>
</html>
```

---

## ⏳ **What is `async`?**

* The keyword `async` is used to declare a function that **returns a Promise**.
* Inside an `async` function, you can use the `await` keyword.

### ✅ Benefits:

* Makes asynchronous code easier to read and write.
* Avoids deeply nested `.then()` chains (callback hell).

---

## 🕓 **What is `await`?**

* `await` pauses the **execution of the `async` function** until the **Promise resolves**.
* You can only use `await` inside an `async` function.

---

## 🔍 **How It Works in Your Code**

### Step-by-Step Breakdown:

```javascript
const getPhotos = async () => {
```

* This defines an **asynchronous function** called `getPhotos`.

---

```javascript
   await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => data.map((p) => console.log(p.id, p.title)));
```

* `fetch(...)` makes a request to a fake API that returns photo data.
* The `await` **pauses the function** until the request is complete.
* Then:

  * `.then(response => response.json())`: Converts the response into JSON.
  * `.then(data => ...)`: Iterates over the data.
  * `.map(...)`: Prints the `id` and `title` of each photo to the console.

> ⚠️ **Important Note**: Here you're using both `await` and `.then()`. This works, but it's better to stick to one style for clarity.

✅ **Better version** (fully using `await`):

```javascript
const getPhotos = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/photos');
   const data = await response.json();
   data.map((p) => console.log(p.id, p.title));

   document.write("<H2>Ready</H2>");
};
```

---

```javascript
document.write("<H2>Ready</H2>");
```

* This runs **after** all photos are logged.
* It **writes “Ready”** on the webpage, showing the task is complete.

---

## ⏱️ **Execution Order**

1. Page loads and shows `<h2>loading...</h2>`.
2. `getPhotos()` runs and fetches data asynchronously.
3. Once the data is ready:

   * The console prints many lines like: `1 Photo title`, `2 Another title`, ...
   * Then the page updates and displays `Ready`.

---

## 💡 **Summary Table**

| Concept            | Meaning                                                   |
| ------------------ | --------------------------------------------------------- |
| `async`            | Declares a function that handles asynchronous operations  |
| `await`            | Waits for a Promise to resolve inside an `async` function |
| `fetch()`          | Performs an HTTP request and returns a Promise            |
| `then()`           | Handles resolved Promises (used here after `await`)       |
| `document.write()` | Outputs to the webpage (not recommended in production)    |

---

## 🧪 **When Should You Use `async/await`?**

Use `async/await` when:

* You want cleaner, readable asynchronous code.
* You are working with Promises (like fetch, API calls).
* You want to avoid chaining many `.then()` calls.

---

## 🧼 **Clean Version (Best Practice)**

```javascript
const getPhotos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        data.forEach((p) => console.log(p.id, p.title));
        document.write("<H2>Ready</H2>");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getPhotos();
```

✅ Added `try...catch` to handle errors gracefully
✅ Used `forEach` instead of `map` because we’re not returning a new array — just logging values

---

