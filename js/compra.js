// Lógica de JavaScript para la página de compra (comprar.html)

// --- 1. Inicialización de Datos del Producto ---
// Función para obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name') || 'Producto Desconocido';
const productDesc = urlParams.get('desc') || 'Detalle no disponible.';
// Asegurar que el precio sea un número flotante
const productPrice = parseFloat(urlParams.get('price')) || 0.00; 
const productImage = urlParams.get('img') || 'images/default.png'; 

// Actualizar el contenido de la página con los datos de la URL
document.getElementById('product-name').textContent = productName;
document.getElementById('product-description').textContent = productDesc;
document.getElementById('product-price').textContent = `BS ${productPrice.toFixed(2)}`;
document.getElementById('product-image').src = productImage;


// --- 2. Control de Cantidad y Precio Total ---
const quantityInput = document.getElementById('quantity-input');
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');

/**
 * Actualiza el precio total basado en la cantidad actual.
 */
function updatePrice() {
    const quantity = parseInt(quantityInput.value);
    // Calcula el nuevo precio y lo formatea a 2 decimales
    const newPrice = (productPrice * quantity).toFixed(2); 
    document.getElementById('product-price').textContent = `BS ${newPrice}`;
}

decrementBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        updatePrice();
    }
});

incrementBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    updatePrice();
});


// --- 3. Lógica del Modal de Pago y Confirmación ---
const paymentModal = document.getElementById('payment-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const openPaymentModalBtn = document.getElementById('open-payment-modal');
const closeBtns = document.querySelectorAll('.close-btn');
const paymentForm = document.getElementById('payment-form');
const confirmationCloseBtn = document.querySelector('.confirmation-close');

// Abrir Modal de Pago al hacer click en "Proceder al Pago"
openPaymentModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    paymentModal.style.display = 'block';
});

// Cerrar Modales
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
        confirmationModal.style.display = 'none';
    });
});

confirmationCloseBtn.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
});

// Cerrar modales si se hace click fuera de ellos
window.onclick = function(event) {
    if (event.target == paymentModal) {
        paymentModal.style.display = "none";
    }
    if (event.target == confirmationModal) {
        confirmationModal.style.display = "none";
    }
}

// Simulación de Envío del Formulario de Pago
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulación de validación simple
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const cvv = document.getElementById('cvv').value;

    if (cardNumber.length < 16 || cvv.length < 3) {
        alert('Por favor, ingrese datos de pago válidos (simulados).');
        return;
    }

    // SIMULACIÓN DE PROCESO DE PAGO
    paymentModal.style.display = 'none'; // Cierra el modal de pago
    
    // Muestra el modal de confirmación
    confirmationModal.style.display = 'block';
    
    // Opcional: limpiar el formulario después de la "compra"
    paymentForm.reset();
});