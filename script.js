// Initialize the cart from localStorage or start with an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update the cart icon count
function updateCartCount() {
    const cartCount = document.querySelector('.icon-cart span');
    cartCount.textContent = cart.length;
}

// Function to add item to the cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }
    updateCartCount();
    saveCart();  // Save the updated cart to localStorage
}

// Function to display the cart items (for cart.html page)
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    // If cart is empty, display a message
    if (cart.length === 0) {
        cartContainer.innerHTML = '<h2 class="empty-cart">Your cart is empty!</h2>';
        return; // Exit early if the cart is empty
    }

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItem = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p>Price: ${item.price} EGP</p>
                <p>Quantity: 
                    <button onclick="decreaseQuantity('${item.name}')">-</button>
                    ${item.quantity}
                    <button onclick="increaseQuantity('${item.name}')">+</button>
                </p>
                <p>Total: ${item.price * item.quantity} EGP</p>
            </div>
        `;
        cartContainer.innerHTML += cartItem;
    });

    const totalDisplay = `
        <h2 class="total-price">Total Price: ${totalPrice} EGP</h2>
    `;
    cartContainer.innerHTML += totalDisplay;
}

// Function to increase item quantity
function increaseQuantity(itemName) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity += 1;
        saveCart();  // Save changes to localStorage
        displayCartItems();
    }
}

// Function to decrease item quantity
function decreaseQuantity(itemName) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(cartItem => cartItem.name !== itemName);
    }
    saveCart();  // Save changes to localStorage
    displayCartItems();
    updateCartCount();
}

// Function to add event listeners for adding items to the cart
function addEventListenersForAddingItems() {
    document.querySelectorAll('.cart a').forEach((cartButton) => {
        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            const itemElement = e.target.closest('.item');
            const name = itemElement.querySelector('h1').textContent;
            const price = parseInt(itemElement.querySelector('h2').textContent);
            const image = itemElement.querySelector('img').src;

            const item = { name, price, image };
            addToCart(item);
        });
    });
}

// Call this function if you are on the product page
addEventListenersForAddingItems();

// Initialize the cart count and display cart items when the page loads
updateCartCount();
displayCartItems();
