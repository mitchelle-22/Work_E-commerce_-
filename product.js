let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    updateCartCount();
  
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount;
}


  // Function to refresh the cart display
  function refreshCart() {
    const cartContainer = document.getElementById("cart-count");
    cartContainer.innerHTML = ""; // Clear the current cart content

    // Loop through the cart data and create elements for each item
    for (const item of cart) {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.productName} - $${item.price}`;
        cartContainer.appendChild(cartItem);
    }
}