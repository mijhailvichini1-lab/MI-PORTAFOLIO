// ==== 1. DATOS DE LOS PRODUCTOS DEL SLIDER ====
const sliderProducts = [
    {
        titulo: "Burger Especial",
        desc: "Carne de res a la parrilla, lechuga, tomate, cebolla, pepinillo y mayonesa. El clásico que nunca pasa de moda.",
        precio: "29.00",
        img: "images/images/b.png"
    },
    {
        titulo: "Sandwich Especial",
        desc: "Jamón, queso y vegetales frescos sobre pan artesanal. Ideal para un desayuno o almuerzo ligero.",
        precio: "25.00",
        img: "images/images/food2.png"
    },
    {
        titulo: "Bacon Doble",
        desc: "Doble carne de res, tocino crujiente, queso y salsa especial.",
        precio: "48.00",
        img: "images/images/BaconDoble.png"
    }
];

// ==== 2. FUNCIÓN PARA GENERAR LA URL DE COMPRA ====

function getCompraUrl(producto) {
    const urlName = encodeURIComponent(producto.titulo);
    const urlDesc = encodeURIComponent(producto.desc);
    const urlPrice = encodeURIComponent(producto.precio);
    const urlImg = encodeURIComponent(producto.img);
    return `comprar.html?name=${urlName}&desc=${urlDesc}&price=${urlPrice}&img=${urlImg}`;
}


// ==== 3. FUNCIÓN PRINCIPAL PARA ASIGNAR ENLACES A TODOS LOS BOTONES ====

function setAllCompraLinks() {
    // Iteramos sobre el arreglo de productos
    sliderProducts.forEach((producto, index) => {
        // Buscamos el botón con el ID correspondiente al índice (comprar-btn-0, comprar-btn-1, etc.)
        const boton = document.getElementById(`comprar-btn-${index}`);
        
        if (boton) {
            // Generamos la URL y la asignamos directamente al atributo href
            boton.href = getCompraUrl(producto);
        }
    });
}


// ==== 4. INICIALIZACIÓN DEL SWIPER 1 (Simplificado) ====

var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Eliminamos el evento 'slideChange' porque los enlaces ya están listos
    on: {
        init: function() {
            // Llamamos a la función al inicio para establecer todos los enlaces
            setAllCompraLinks();
        }
    }
});


// ==== 5. INICIALIZACIÓN DEL SWIPER 2 y LÓGICA DE PESTAÑAS (Sin cambios) ====

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
    },
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        // La lógica de update aquí puede necesitar correcciones si no funciona
        // let id = input.ariaValueMax; 
        // let thisSwiper = document.getElementById('swiper' + id);
        // if (thisSwiper && thisSwiper.swiper) {
        //     thisSwiper.swiper.update();
        // }
    });
});

// Llamamos a la función de asignación de enlaces por si el evento 'init' del swiper no se dispara
setAllCompraLinks();