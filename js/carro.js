document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const purchaseBtn = document.getElementById('purchaseBtn');
    const termsCheckbox = document.getElementById('termsCheckbox');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCartDisplay = () => {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const row = document.createElement('tr');
            row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" style="height: 50px;"></td>
            <td>${item.name}</td>
            <td>${item.year}</td>
            <td>
                <input type="number" min="1" class="form-control quantity-input" data-index="${index}" value="${item.quantity}">
            </td>
            <td>$${item.price}</td>
            <td>$${subtotal}</td>
            <td>
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
            </td>`;
            cartItems.appendChild(row);
        });

        cartTotal.textContent = total.toFixed(2);
    };

    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            saveCart();
            updateCartDisplay();
            toastr.info('Producto eliminado del carrito');
        }
    });

    cartItems.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            const index = e.target.getAttribute('data-index');
            const newQuantity = parseInt(e.target.value, 10);
            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                saveCart();
                updateCartDisplay();
            }
        }
    });

    document.getElementById('clearCartBtn').addEventListener('click', () => {
        cart = [];
        saveCart();
        updateCartDisplay();
        toastr.warning('Carrito limpiado');
    });

    termsCheckbox.addEventListener('change', () => {
        purchaseBtn.disabled = !termsCheckbox.checked;
    });

    document.getElementById('purchaseBtn').addEventListener('click', () => {
        if (cart.length > 0 && termsCheckbox.checked) {

            Swal.fire(
                'Compra realizada!',
                'Gracias por su compra.',
                'success'
            );

            cart = [];
            saveCart();
            updateCartDisplay();
        } else {
            Swal.fire(
                'Error!',
                'El carrito está vacío.',
                'error'
            );
        }
    });

    updateCartDisplay();
});
