function updateCartCount() {
    const cart = localStorage.getItem('cart');
    const cartItems = cart ? JSON.parse(cart) : [];
    document.getElementById('cart-item-count').textContent = `${cartItems.length} Item${cartItems.length !== 1 ? 's' : ''}`;
}
document.addEventListener('DOMContentLoaded', updateCartCount);

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('row', 'mb-4', 'd-flex', 'justify-content-between', 'align-items-center');
        
        itemElement.innerHTML = `
            <div class="col-md-2 col-lg-2 col-xl-2">
                <img src="${item.image}" class="img-fluid rounded-3" alt="${item.name}">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
                <h6 class="text-black mb-0">${item.name}</h6>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="updateQuantity(${index}, 'decrease')">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="${item.quantity}" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="updateQuantity(${index}, 'increase')">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
            <div class="col-md-3 col-lg-3 col-xl-2">
                <h6 class="mb-0" id="price-${index}">${(item.price * item.quantity).toFixed(2)}€</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-muted" onclick="removeFromCart(${index})"><i class="fas fa-times"></i></a>
            </div>
            <hr class="my-4">
        `;

        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    totalItems.textContent = cartItems.length;
    totalPriceElement.textContent = `€${totalPrice.toFixed(2)}`;
    updateCartCount();
    updateFinalTotalPrice();
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    alert("Proceeding to checkout");
    localStorage.removeItem('cart');
    loadCartItems();
    alert("Thanks For Shopping.");
    window.location.href='index.html'
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
}

function updateQuantity(index, action) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (action === 'increase') {
        cart[index].quantity += 1;
    } else if (action === 'decrease' && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
}

function updateFinalTotalPrice() {
    const totalPriceElement = document.getElementById('total-price').textContent.replace('€', '');
    const shippingCost = parseFloat(document.querySelector('select').value); 
    const finalTotal = parseFloat(totalPriceElement) + shippingCost
    document.getElementById('final-total-price').textContent = `€${finalTotal.toFixed(2)}`;
}

document.querySelector('select').addEventListener('change', updateFinalTotalPrice);

document.addEventListener('DOMContentLoaded', loadCartItems);
