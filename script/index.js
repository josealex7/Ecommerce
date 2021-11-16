let categoria;

const enviarCategoria = () => {
    localStorage.setItem("Categoria", JSON.stringify(categoria));
}


let boton1 = document.getElementById('terror');
boton1.addEventListener('click', function() {
    categoria = "Terror";
    enviarCategoria();
});

let boton2 = document.getElementById('superheroes');
boton2.addEventListener('click', function() {
    categoria = "Superheroes";
    enviarCategoria();
});

let boton3 = document.getElementById('aventura');
boton3.addEventListener('click', function() {
    categoria = "Aventura";
    enviarCategoria();
});

let boton4 = document.getElementById('fantasia');
boton4.addEventListener('click', function() {
    categoria = "Fantasia";
    enviarCategoria();
});