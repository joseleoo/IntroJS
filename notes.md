Here's an explanation of your code with **colors** and **emojis** for clarity: 🌟

---

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