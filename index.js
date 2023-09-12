// Function to display categories and products
function displayCategoriesAndProducts(data) {
    const categoriesContainer = document.getElementById('categories');

    data.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        
        
        category.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
                <p>${product.name}</p>
                <p>Price: $${product.price}</p>
               
            `;
            categoryDiv.appendChild(productDiv);
        });

        categoriesContainer.appendChild(categoryDiv);
    });
}

// Fetch data from the JSON file
fetch('./grocery_data') // Replace 'your-data.json' with the path to your JSON file
    .then(response => response.json())
    .then(data => {
        // Call the function to display data
        displayCategoriesAndProducts(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });