
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



function getCompraUrl(producto) {
    const urlName = encodeURIComponent(producto.titulo);
    const urlDesc = encodeURIComponent(producto.desc);
    const urlPrice = encodeURIComponent(producto.precio);
    const urlImg = encodeURIComponent(producto.img);
    return `comprar.html?name=${urlName}&desc=${urlDesc}&price=${urlPrice}&img=${urlImg}`;
}




function setAllCompraLinks() {
    
    sliderProducts.forEach((producto, index) => {
        
        const boton = document.getElementById(`comprar-btn-${index}`);
        
        if (boton) {
            
            boton.href = getCompraUrl(producto);
        }
    });
}




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
    
    on: {
        init: function() {
            
            setAllCompraLinks();
        }
    }
});




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


setAllCompraLinks();