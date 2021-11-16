import movie from './data.js'
const card = document.querySelector('#card-movie');
const tituloCategoria = document.querySelector('#contenedor-titulo');

function loadMovie(movie) {
    let categoriaMovie = localStorage.getItem('Categoria');
    let categoria;


    card.innerHTML = "";
    movie.forEach(moviedata => {
        categoria = '"' + moviedata.categoria + '"';
        if (categoriaMovie == categoria) {
            tituloCategoria.innerHTML = "Peliculas de " + moviedata.categoria;
            idPeliculas.push(moviedata.id);
            const item = document.createElement('div');
            item.innerHTML = `
            <div class="card contenedor-carta" id="${moviedata.id}" style="width: 12rem;">
                <h5 class="card-title">${moviedata.name}</h5>
                <img src=${moviedata.image} class="card-img-top image-carta" alt="...">
                <div class="precio">
                    <h5>Precio: $ ${Intl.NumberFormat('es-DE').format(moviedata.precio)}</h5>
                </div>
                <div class="card-body ">
                    <a href="pelicula.html" class="btn btn-primary botones ${moviedata.id}">Descripción</a>
                </div>
            </div>
            `;
            card.appendChild(item);
        }

    });
    console.log(idPeliculas.length);
}

let idPeliculas = [];

loadMovie(movie);
idPeliculas.forEach(movies => {
    let boton = document.getElementById(movies);
    boton.addEventListener('click', function() {
        localStorage.setItem("idMovie", JSON.stringify(movies));
    });
})