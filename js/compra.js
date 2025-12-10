



const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name') || 'Producto Desconocido';
const productDesc = urlParams.get('desc') || 'Detalle no disponible.';

const productPrice = parseFloat(urlParams.get('price')) || 0.00; 
const productImage = urlParams.get('img') || 'images/default.png'; 


document.getElementById('product-name').textContent = productName;
document.getElementById('product-description').textContent = productDesc;
document.getElementById('product-price').textContent = `BS ${productPrice.toFixed(2)}`;
document.getElementById('product-image').src = productImage;



const quantityInput = document.getElementById('quantity-input');
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');


function updatePrice() {
    const quantity = parseInt(quantityInput.value);

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



const paymentModal = document.getElementById('payment-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const openPaymentModalBtn = document.getElementById('open-payment-modal');
const closeBtns = document.querySelectorAll('.close-btn');
const paymentForm = document.getElementById('payment-form');
const confirmationCloseBtn = document.querySelector('.confirmation-close');


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


window.onclick = function(event) {
    if (event.target == paymentModal) {
        paymentModal.style.display = "none";
    }
    if (event.target == confirmationModal) {
        confirmationModal.style.display = "none";
    }
}


paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const cvv = document.getElementById('cvv').value;

    if (cardNumber.length < 16 || cvv.length < 3) {
        alert('Por favor, ingrese datos de pago válidos (simulados).');
        return;
    }


    paymentModal.style.display = 'none'; 
    
   
    confirmationModal.style.display = 'block';
    
 
    paymentForm.reset();
});