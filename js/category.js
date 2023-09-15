function displayCategoriesAndProducts(data) {
    const categoriesContainer = document.getElementById('categories');

    data.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `<h2>${category.name}</h2>`;
        
        category.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
            <div class="pro"> 
            <img src="${product.image}" alt="" class="product-image" height="250">
             <div class="description">
                <span>${product.name}</h3>
                <h4>R${product.price.toFixed(2)}</h4>
              </div>
                <a href="#" data-id="${product.id}" class="add-to-cart fal fa-shopping-cart cart"></a>
         </div>
            `;
            categoryDiv.appendChild(productDiv);
        });

        categoriesContainer.appendChild(categoryDiv);
    });
}

fetch('../json/category_data.json') // Replace 'your-data.json' with the path to your JSON file
            .then(response => response.json())
            .then(data => {
                // Call the function to display data
                displayCategoriesAndProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });