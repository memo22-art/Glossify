// Function to display cart items and total price
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const productPriceDisplay = document.getElementById('productPrice');
    const deliveryFeeDisplay = document.getElementById('deliveryFee');
    const finalTotalPriceDisplay = document.getElementById('finalTotalPrice');
    
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    const deliveryFee = 50; // Delivery fee

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<h3>Your cart is empty!</h3>';
        productPriceDisplay.textContent = '0.00 EGP';
        deliveryFeeDisplay.textContent = '0.00 EGP';
        finalTotalPriceDisplay.textContent = '0.00 EGP';
        return;
    }

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItem = `
            <div class="cart-item flex justify-between mb-4">
                <img src="${item.image}" alt="${item.name}" width="50" class="mr-4">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price} EGP</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: ${item.price * item.quantity} EGP</p>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItem;
    });

    // Update the prices in the HTML
    productPriceDisplay.textContent = `${totalPrice} EGP`;
    deliveryFeeDisplay.textContent = `${deliveryFee} EGP`;
    const finalTotalPrice = totalPrice + deliveryFee;
    finalTotalPriceDisplay.textContent = `${finalTotalPrice} EGP`;
}

// Event listener for submit button
document
    .getElementById("submit-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        // Display success alert
        Swal.fire({
            title: "Success!",
            text: "Your order has been placed successfully.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#ee9cd1", // Custom button color
            backdrop: true, // Optional: add a backdrop effect
            customClass: {
                title: 'swal-title',
                content: 'swal-content'
            }
        });

        // Optionally, clear the cart after submission
        localStorage.removeItem('cart');
        displayCartItems(); // Refresh the cart display after clearing it
    });

// Call this function to initialize the cart display
displayCartItems();
