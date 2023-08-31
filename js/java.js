const products = [
    { id: 1, name: "Product A", category: "Category A", price: 10 },
    { id: 2, name: "Product B", category: "Category B", price: 15 },
    { id: 3, name: "Product C", category: "Category C", price: 20 },
   
    // Add more products
];

const cart = [];

const productsSection = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

// Display products on the page
function displayProducts() {
    productsSection.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: R${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(card);
    });
}

// Add product to the cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cart.push(selectedProduct);
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Initial setup
displayProducts();
updateCartCount();
