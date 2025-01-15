let peliculas = [
    { idPelicula: 1, titulo: "Avatar" },
    { idPelicula: 2, titulo: "Terminator 2" },
    { idPelicula: 3, titulo: "Silent Hill" },
]

const mostrarTodas = (peliculas) => {
    peliculas.map((p) => console.log(p.idPelicula, p.titulo))
}
mostrarTodas(peliculas)
