// Fetch data from the JSON file
fetch('products_data.json')
.then(response => response.json())
.then(data => {
    // Process the data and display it
    const productsList = document.getElementById('products-list');

    data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <div class="pro-container">
        <div class="pro">
          <img src="${product.image}" alt=" width="200"  height ="250">
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
fetch('products_data.json')
.then(response => response.json())
.then(data => {
    // Process the data and display it
    const productsList = document.getElementById('products');

    data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <div class="pro-container">
        <div class="pro">
          <img src="${product.image}" alt=" width="200"  height ="250">
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