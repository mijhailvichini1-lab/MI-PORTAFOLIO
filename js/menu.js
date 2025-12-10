const btnHamburguesa = document.getElementById("btn-hamburguesa");
const btnTacos = document.getElementById("btn-tacos");
const btnDesayunos = document.getElementById("btn-desayunos");
const container = document.getElementById("menu-container");

// ==== DATOS DE LOS PRODUCTOS (SIN CAMBIOS) ====

const hamburguesas = [
    {
        img: "images/images/Whopper.png",
        titulo: "Whopper Clásica",
        desc: "Carne de res a la parrilla, lechuga, tomate, cebolla, pepinillo y mayonesa.",
        precio: "Bs 35.00"
    },
    {
        img: "images/images/WhopperDoble.png",
        titulo: "Whopper Doble",
        desc: "Doble carne de res, doble queso, vegetales frescos y salsa especial.",
        precio: "Bs 45.00"
    },
    {
        img: "images/images/Rodeo.png",
        titulo: "Rodeo Burger",
        desc: "Carne de res, aros de cebolla, queso cheddar y salsa BBQ.",
        precio: "Bs 38.00"
    },
    {
        img: "images/images/Napolitana.png",
        titulo: "Burger Napolitana",
        desc: "Carne de res, queso, jamón, tomate y salsa napolitana.",
        precio: "Bs 32.00"
    },
    {
        img: "images/images/LongRodeo.png",
        titulo: "Long Rodeo",
        desc: "Pan largo, carne de res, aros de cebolla crujientes y salsa BBQ.",
        precio: "Bs 30.00"
    },
    {
        img: "images/images/KingPollo.png",
        titulo: "King Pollo",
        desc: "Pechuga de pollo crispy, lechuga, tomate y mayonesa.",
        precio: "Bs 28.00"
    },
    {
        img: "images/images/CuartoDeLibra.png",
        titulo: "Cuarto de Libra",
        desc: "Carne 1/4 libra, queso cheddar, pepinillo y kétchup.",
        precio: "Bs 40.00"
    },
    {
        img: "images/images/BaconDoble.png",
        titulo: "Bacon Doble",
        desc: "Doble carne de res, tocino crujiente, queso y salsa especial.",
        precio: "Bs 48.00"
    },
    {
        img: "images/images/b.png",
        titulo: "Burger Especial",
        desc: "Carne de res, queso, lechuga y salsa secreta de la casa.",
        precio: "Bs 29.00"
    },
    {
        img: "images/images/AmericanaDobleConQueso.png",
        titulo: "Americana Doble con Queso",
        desc: "Doble carne de res, doble queso cheddar y pan artesanal.",
        precio: "Bs 50.00"
    },
     {
        img: "images/images/food2.png",
        titulo: "Sandwich Especial",
        desc: "Jamón, queso y vegetales frescos sobre pan artesanal. Ideal para un desayuno o almuerzo ligero.",
        precio: "Bs 20.00"
    },
];

const tacos = [
    {
        img: "images/images/crunchytaco.jpg",
        titulo: "Crunchy Taco",
        desc: "Taco crujiente con carne sazonada, lechuga y queso rallado.",
        precio: "Bs 18.00"
    },
    {
        img: "images/images/tacos.jpg",
        titulo: "Taco al Pastor",
        desc: "Carne marinada al estilo pastor, piña, cebolla y cilantro fresco.",
        precio: "Bs 20.00"
    },
    {
        img: "images/images/menucompletotrestacossupreme.jpg",
        titulo: "Taco Mixto Supreme",
        desc: "Combinación de pollo, carne de res y queso fundido.",
        precio: "Bs 25.00"
    },
    {
        img: "images/images/tacosupreme.jpg",
        titulo: "Taco Supreme",
        desc: "Taco con carne, queso, vegetales y salsa especial picante.",
        precio: "Bs 22.00"
    },
    {
        img: "images/images/trestacossupreme.jpg",
        titulo: "3 Tacos Supreme",
        desc: "Tres tacos variados con carne, pollo y queso, ideal para compartir.",
        precio: "Bs 55.00"
    },
    {
        img: "images/images/softtaco.jpg",
        titulo: "Soft Taco",
        desc: "Taco suave con carne, lechuga, tomate y salsa especial.",
        precio: "Bs 19.00"
    }
];


const desayunos = [
    {
        img: "images/images/ensalada-cheff.png",
        titulo: "Ensalada Cheff",
        desc: "Lechuga, tomate, huevo, jamón y aderezo especial.",
        precio: "Bs 25.00"
    },
    {
        img: "images/images/ensaladacesar.webp",
        titulo: "Ensalada César",
        desc: "Lechuga, crutones, queso parmesano y aderezo César.",
        precio: "Bs 22.00"
    },
    {
        img: "images/images/ensaladahoneymustard.webp",
        titulo: "Ensalada Honey Mustard",
        desc: "Vegetales frescos con aderezo de miel y mostaza.",
        precio: "Bs 20.00"
    },
    {
        img: "images/images/ensaladaking.png",
        titulo: "Ensalada King",
        desc: "Lechuga, pollo a la parrilla, queso y vegetales frescos.",
        precio: "Bs 28.00"
    },
    {
        img: "images/images/ensaladavegetales.png",
        titulo: "Ensalada de Vegetales",
        desc: "Variedad de vegetales frescos con aderezo de la casa.",
        precio: "Bs 18.00"
    }
];


// ==== FUNCION PARA MOSTRAR TARJETAS (CORREGIDA) ====

function mostrarProductos(lista){
    container.innerHTML = "";

    lista.forEach(producto => {
        // 1. Limpiamos el precio para obtener solo el número.
        const precioNumerico = producto.precio.replace('Bs ', '').replace(',', '.');

        // 2. Codificamos los datos para la URL.
        const urlName = encodeURIComponent(producto.titulo);
        const urlDesc = encodeURIComponent(producto.desc);
        const urlPrice = encodeURIComponent(precioNumerico);
        const urlImg = encodeURIComponent(producto.img);

        // 3. Construimos la URL completa para el enlace de compra.
        const compraUrl = `comprar.html?name=${urlName}&desc=${urlDesc}&price=${urlPrice}&img=${urlImg}`;

        container.innerHTML += `
        <div class="card">
            <img src="${producto.img}">
            <h3>${producto.titulo}</h3>
            <p>${producto.desc}</p>

            <div class="card-footer">
                <span>${producto.precio}</span>
                <a href="${compraUrl}" class="btn">Comprar</a>
            </div>
        </div>
        `;
    });
}

// MOSTRAR HAMBURGUESAS AL INICIO
mostrarProductos(hamburguesas);

// ==== EVENTOS BOTONES (SIN CAMBIOS) ====

btnHamburguesa.addEventListener("click", () => {
    activar(btnHamburguesa);
    mostrarProductos(hamburguesas);
});

btnTacos.addEventListener("click", () => {
    activar(btnTacos);
    mostrarProductos(tacos);
});

btnDesayunos.addEventListener("click", () => {
    activar(btnDesayunos);
    mostrarProductos(desayunos);
});

// ==== FUNCION PARA ACTIVAR BOTON (SIN CAMBIOS) ====

function activar(boton){
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');
}