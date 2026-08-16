/* =========================================================
   DOMIFLOW
   BASE DE DATOS DE PRODUCTOS
========================================================= */

const productos = [

    {
        id: 1,
        nombre: "Domi Burger",
        categoria: "Hamburguesas",
        tipo: "Hamburguesa",
        descripcion: "Carne, queso, lechuga, tomate y salsa especial.",
        precio: 18900,
        emoji: "🍔",
        etiqueta: "Popular",
        disponible: true
    },

    {
        id: 2,
        nombre: "Pizza Clásica",
        categoria: "Pizzas",
        tipo: "Pizza",
        descripcion: "Mozzarella, pepperoni, salsa de tomate y especias.",
        precio: 24900,
        emoji: "🍕",
        etiqueta: "Popular",
        disponible: true
    },

    {
        id: 3,
        nombre: "Combo Crispy",
        categoria: "Pollo",
        tipo: "Pollo",
        descripcion: "Pollo crujiente, papas y bebida.",
        precio: 22500,
        emoji: "🍗",
        etiqueta: "Favorito",
        disponible: true
    },

    {
        id: 4,
        nombre: "Cheesecake",
        categoria: "Postres",
        tipo: "Postre",
        descripcion: "Cheesecake cremoso con salsa de frutos rojos.",
        precio: 9900,
        emoji: "🍰",
        etiqueta: "Nuevo",
        disponible: true
    },

    {
        id: 5,
        nombre: "Papas Domi",
        categoria: "Acompañamientos",
        tipo: "Acompañamiento",
        descripcion: "Papas crujientes acompañadas de salsa especial.",
        precio: 7900,
        emoji: "🍟",
        etiqueta: "Popular",
        disponible: true
    },

    {
        id: 6,
        nombre: "Gaseosa",
        categoria: "Bebidas",
        tipo: "Bebida",
        descripcion: "Bebida fría de 400 ml.",
        precio: 4500,
        emoji: "🥤",
        etiqueta: "Clásico",
        disponible: true
    },

    {
        id: 7,
        nombre: "Pizza Familiar",
        categoria: "Pizzas",
        tipo: "Pizza",
        descripcion: "Pizza familiar con mozzarella, jamón y pepperoni.",
        precio: 38900,
        emoji: "🍕",
        etiqueta: "Oferta",
        disponible: true
    },

    {
        id: 8,
        nombre: "Brownie",
        categoria: "Postres",
        tipo: "Postre",
        descripcion: "Brownie de chocolate con centro suave.",
        precio: 6900,
        emoji: "🍫",
        etiqueta: "Nuevo",
        disponible: true
    }

];


/* =========================================================
   COMPROBACIÓN
========================================================= */

console.log("DomiFlow iniciado correctamente.");

console.log("Productos disponibles:", productos);


/* =========================================================
   FUNCIÓN PARA FORMATEAR PRECIOS
========================================================= */

function formatoPrecio(precio) {

    return new Intl.NumberFormat("es-CO", {

        style: "currency",

        currency: "COP",

        maximumFractionDigits: 0

    }).format(precio);

}


/* =========================================================
   PRUEBA DE FORMATO
========================================================= */

console.log(
    "Precio de prueba:",
    formatoPrecio(productos[0].precio)
);