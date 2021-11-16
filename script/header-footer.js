const header = document.querySelector('#menu-encabezado');
let cantidadProductos = 0;
if (JSON.parse(localStorage.getItem('cantidadProductos'))) {
    cantidadProductos = JSON.parse(localStorage.getItem('cantidadProductos'));
}
const encabezado = () => {
    const items = document.createElement('div');
    items.innerHTML = `
            <img src="images/Peliculas (1).png" alt="" class="logo">
            <div class="contenedor-menu">
                <ul class="menu">
                    <li><a href="index.html">Inicio</a></li>
                    <li class="li-carrito">
                        <a href="carrito.html"><img src="https://img.icons8.com/dotty/40/000000/shopping-cart.png" />
                            <label for="">${cantidadProductos}</label></a>
                    </li>
                </ul>
            </div>
            <hr>
            `;
    header.appendChild(items);
}

const footer = document.querySelector('#footer-principal');
const pieDePagina = () => {
    const items = document.createElement('div');
    items.innerHTML = `
             <div class="footer-copyright text-center py-3 footerCopyright">© 2021 Copyright:
                <a href="https://github.com/josealex7"> https://github.com/josealex7</a>
            </div>
            `;
    footer.appendChild(items);
}

encabezado();
pieDePagina();