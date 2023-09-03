// document.addEventListener('DOMContentLoaded', () => {
//     const contentDiv = document.getElementById('content');

//     // Load the default page when the website loads
//     loadPage('pages/home.html');

//     // Function to load pages
//     function loadPage(pageName) {
//         fetch(pageName)
//             .then(response => response.text())
//             .then(content => {
//                 contentDiv.innerHTML = content;
//             });
//     }

//     // Event listeners for page links
//     document.getElementById('home-link').addEventListener('click', () => {
//         loadPage('pages/home.html');
//     });

//     document.getElementById('about-link').addEventListener('click', () => {
//         loadPage('pages/about.html');
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const contentDiv = document.getElementById('content');
//     const goHomeButton = document.getElementById('go-home');
//     const goAboutButton = document.getElementById('go-about');

//     // Load the default page when the website loads
//     loadPage('pages/home.html');

//     // Function to load pages
//     function loadPage(pageName) {
//         fetch(pageName)
//             .then(response => response.text())
//             .then(content => {
//                 contentDiv.innerHTML = content;
//             });
//     }

//     // Event listeners for the buttons
//     goHomeButton.addEventListener('click', () => {
//         loadPage('pages/home.html');
//     });

//     goAboutButton.addEventListener('click', () => {
//         loadPage('page/about.html');
//     });
// });




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
//Get all articles
const articles = document.querySelectorAll('.article');

// Add click event listeners to each article
articles.forEach(article => {
    article.addEventListener('click', () => {
        const articleId = article.dataset.articleId;
        alert(`Clicked on Article ${articleId}`);
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const contentDiv = document.getElementById('content');
//     const homeButton = document.getElementById('shop-now');

//     // Load the default page when the website loads
//     loadPage('pages/category.html');

//     // Function to load pages
//     function loadPage(pageName) {
//         fetch(pageName)
//             .then(response => response.text())
//             .then(content => {
//                 contentDiv.innerHTML = content;
//             });
//     }

//     // Event listeners for page links
//     document.getElementById('category-link').addEventListener('click', () => {
//         loadPage('pages/category.html');
//     });

//     document.getElementById('product-link').addEventListener('click', () => {
//         loadPage('pages/product.html');
//     });

//     // Event listener for the home button
//     homeButton.addEventListener('click', () => {
//         loadPage('pages/category.html');
//     });
// });




