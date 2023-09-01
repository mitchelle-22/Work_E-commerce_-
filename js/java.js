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

const articles = document.querySelectorAll('.article');

// Add click event listeners to each article
articles.forEach(article => {
    article.addEventListener('click', () => {
        const articleId = article.dataset.articleId;
        alert(`Clicked on Article ${articleId}`);
    });
});






