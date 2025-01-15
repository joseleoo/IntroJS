let peliculaTitulo = "avengers" //global scope
const peliculaPrecio=20
function setTitulo() {
    let peliculaTitulo = "Terminator 2" //second scope
    console.log(peliculaTitulo)//second scope
}
function setPrecio() {
    const peliculaPrecio = 50
    console.log(peliculaPrecio)
    // peliculaPrecio = 60 //unable to change
}
setTitulo();
setPrecio();
console.log(peliculaTitulo)//global scope
console.log(peliculaPrecio)


