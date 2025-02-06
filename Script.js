let peliculas = [
    { idPelicula: 1, titulo: "Avatar" },
    { idPelicula: 2, titulo: "Terminator 2" },
    { idPelicula: 3, titulo: "Silent Hill" },
]

let nuevaPelicula = { idPelicula: 20, titulo: "Scarface" };
const agregarPelicula = () => {
    let todas = [...peliculas, nuevaPelicula];
    console.log(todas);
};

agregarPelicula();