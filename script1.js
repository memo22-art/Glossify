/*feedBack*/
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
  
    // Create review element
    const review = document.createElement('div');
    review.classList.add('review');
  
    // Add review content
    review.innerHTML = `
      <h4>${name} <span class="rating">(${rating} Stars)</span></h4>
      <p>${comment}</p>
    `;
  
    // Append review to reviews display
    document.getElementById('reviews').appendChild(review);
  
    // Clear form
    document.getElementById('reviewForm').reset();
  });


//------------------Inner Cart-------------------------------


// // Initialize the cart from localStorage or start with an empty array
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // Function to save the cart to localStorage
// function saveCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Function to update the cart icon count
// function updateCartCount() {
//     const cartCount = document.querySelector('.icon-cart span');
//     cartCount.textContent = cart.length;
// }

// // Function to add item to the cart
// function addToCart(item) {
//     const existingItem = cart.find(cartItem => cartItem.name === item.name);
//     if (existingItem) {
//         existingItem.quantity += item.quantity; // Add the quantity from the input
//     } else {
//         cart.push({...item, quantity: item.quantity}); // Use the input quantity
//     }
//     updateCartCount();
//     saveCart();  // Save the updated cart to localStorage
// }

// // Function to display the cart items (for cart.html page)
// function displayCartItems() {
//     const cartContainer = document.querySelector('.cart-container');
//     cartContainer.innerHTML = '';
//     let totalPrice = 0;

//     // If cart is empty, display a message
//     if (cart.length === 0) {
//         cartContainer.innerHTML = '<h2 class="empty-cart">Your cart is empty!</h2>';
//         return; // Exit early if the cart is empty
//     }

//     cart.forEach(item => {
//         totalPrice += item.price * item.quantity;
//         const cartItem = `
//             <div class="cart-item">
//                 <img src="${item.image}" alt="${item.name}" />
//                 <h3>${item.name}</h3>
//                 <p>Price: ${item.price} EGP</p>
//                 <p>Quantity: 
//                     <button onclick="decreaseQuantity('${item.name}')">-</button>
//                     ${item.quantity}
//                     <button onclick="increaseQuantity('${item.name}')">+</button>
//                 </p>
//                 <p>Total: ${item.price * item.quantity} EGP</p>
//             </div>
//         `;
//         cartContainer.innerHTML += cartItem;
//     });

//     const totalDisplay = `
//         <h2 class="total-price">Total Price: ${totalPrice} EGP</h2>
//     `;
//     cartContainer.innerHTML += totalDisplay;
// }

// // Function to increase item quantity
// function increaseQuantity(itemName) {
//     const item = cart.find(cartItem => cartItem.name === itemName);
//     if (item) {
//         item.quantity += 1;
//         saveCart();  // Save changes to localStorage
//         displayCartItems();
//     }
// }

// // Function to decrease item quantity
// function decreaseQuantity(itemName) {
//     const item = cart.find(cartItem => cartItem.name === itemName);
//     if (item && item.quantity > 1) {
//         item.quantity -= 1;
//     } else {
//         cart = cart.filter(cartItem => cartItem.name !== itemName);
//     }
//     saveCart();  // Save changes to localStorage
//     displayCartItems();
//     updateCartCount();
// }

// // Event listener for the Add to Cart button on the product detail page
// const addToCartButton = document.querySelector('.cart-btn');
// if (addToCartButton) {
//     addToCartButton.addEventListener('click', (e) => {
//         e.preventDefault(); // Prevent default link behavior
//         const itemName = document.querySelector('.item-name').textContent; // Get item name
//         const itemPrice = parseInt(document.querySelector('.price').textContent.split(' ')[0]); // Get item price
//         const itemImage = document.querySelector('.p-img img').src; // Get item image
//         const itemQuantity = parseInt(document.querySelector('.quantity input').value) || 1; // Get input quantity

//         const item = { name: itemName, price: itemPrice, image: itemImage, quantity: itemQuantity };
//         addToCart(item);
//     });
// }

// // Initialize the cart count when the page loads
// updateCartCount();
// displayCartItems();

// script.js

// script.js

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton = document.getElementById("addToCartButton");

  addToCartButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default anchor click behavior

    // Get product details
    const productName = document.querySelector(".item-name").innerText;
    const productPrice = document.querySelector(".price").innerText.split(" ")[0]; // Get price without EGP
    const productQuantity = document.querySelector("input[type='number']").value;
    const productImage = document.querySelector(".p-img img").src; // Get image source

    // Create product object
    const product = {
      name: productName,
      price: parseFloat(productPrice),
      quantity: parseInt(productQuantity),
      image: productImage, // Include image in the product object
    };

    // Get cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      cart[existingProductIndex].quantity += product.quantity;
    } else {
      // If it doesn't exist, add it to the cart
      cart.push(product);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

updateCartCount();


//----------------------------------
// When the checkout button is clicked
document.querySelector('.checkout-button').addEventListener('click', function() {
  // Get the total price from your cart
  let totalPrice = document.querySelector('.total-price').textContent;
  
  // Remove any currency symbols and convert to a number
  totalPrice = parseFloat(totalPrice.replace(/[^0-9.-]+/g,""));

  // Store the total price in localStorage
  localStorage.setItem('TotalPrice', totalPrice);

  // Navigate to the checkout page
  window.location.href = 'checkout.html';
});
