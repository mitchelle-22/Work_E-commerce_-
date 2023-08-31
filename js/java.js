let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    updateCartCount();
    alert(`${productName} added to cart!`);
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount;
}







