// Fetch data from the JSON file
fetch('../json/products_data.json')
.then(response => response.json())
.then(data => {
    // Process the data and display it
    const productsList = document.getElementById('products-list');

    data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <div class="pro-container">
        <div class="pro">
          <img src="${product.image}" alt=""   height ="200">
          <div class="description">
            <span>${product.name}</span>
            <h4>R${product.price.toFixed(2)}</h4>
           </div>
           <a href="#" class="add-to-cart fal fa-shopping-cart cart" ></a>
        </div>
    </div>
        `;
    
        productsList.appendChild(productElement);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});

// Fetch data from the JSON file
function displayCategoriesAndProducts(data) {
    const categoriesContainer = document.getElementById('product');

    data.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
       
        
        category.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
            <div class="product-container">
                   <div class="pro">
                   <img src="${product.image}" alt="" height ="150">
                     <div class="description">
                        <span>${product.name}</span>
                     <h4>R${product.price.toFixed(2)}</h4>
                        </div>
                       <a href="#" class="add-to-cart fal fa-shopping-cart cart" ></a>
                     </div>
                 </div>
                     `;
            categoryDiv.appendChild(productDiv);
        });

        categoriesContainer.appendChild(categoryDiv);
    });
}

// Fetch data from the JSON file
fetch('../json/grocery_data.json') // Replace 'your-data.json' with the path to your JSON file
    .then(response => response.json())
    .then(data => {
        // Call the function to display data
        displayCategoriesAndProducts(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });




  