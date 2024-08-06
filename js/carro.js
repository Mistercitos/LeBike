document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const clearCartBtn = document.getElementById('clearCartBtn');
    const purchaseBtn = document.getElementById('purchaseBtn');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const cartCount = document.getElementById('cart-count');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para mostrar los productos en el carrito
    const displayCartItems = () => {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" class="img-fluid" style="max-width: 100px;"></td>
                <td>${item.name}</td>
                <td>${item.year}</td>
                <td>
                    <input type="number" class="form-control quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                </td>
                <td>USD ${item.price}</td>
                <td>USD ${subtotal}</td>
                <td>
                    <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Eliminar</button>
                </td>
            `;
            cartItems.appendChild(row);
        });

        cartTotal.textContent = total.toFixed(2);
        updateCartCount();
    };

    // Función para actualizar la cuenta del carrito
    const updateCartCount = () => {
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    // Evento para cambiar la cantidad de un producto
    cartItems.addEventListener('change', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            const index = e.target.getAttribute('data-index');
            const newQuantity = parseInt(e.target.value);

            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCartItems();
            } else {
                toastr.error('La cantidad debe ser mayor que cero.');
            }
        }
    });

    // Evento para eliminar un producto del carrito
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
            toastr.success('Producto eliminado del carrito.');
        }
    });

    // Evento para limpiar el carrito
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        toastr.success('Carrito limpiado.');
    });

    // Evento para comprar
    purchaseBtn.addEventListener('click', () => {
        if (termsCheckbox.checked) {
            Swal.fire(
                'Compra exitosa',
                '¡Gracias por su compra!',
                'success'
            );
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
        } else {
            toastr.error('Debe aceptar los términos y condiciones para comprar.');
        }
    });

    // Habilitar el botón de compra solo si se aceptan los términos
    termsCheckbox.addEventListener('change', () => {
        purchaseBtn.disabled = !termsCheckbox.checked;
    });

    // Cargar los productos del carrito al iniciar
    displayCartItems();
});
