document.addEventListener('DOMContentLoaded', function () {
  const cartModalOverlay = document.querySelector('.cart-modal-overlay');
  const cart = document.getElementById('cart');
// opening of cartModalOverlay

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});
cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of closing button for the modal

  const productList = document.getElementById('product-list');
  const addToCart = document.getElementsByClassName('add-to-cart');
  const productRow = document.getElementsByClassName('product-row');
  

  // Fetch products from JSON file
  fetch('../json/products_data.json')
      .then(response => response.json())
      .then(data => {
          data.forEach(product => {
const productElement = document.createElement('div');
              productElement.innerHTML = `
              <div class="pro"> 
                  <img src="${product.image}" alt="" class="product-image" height="250">
                   <div class="description">
                      <span>${product.name}</h3>
                      <h4>R${product.price.toFixed(2)}</h4>
                    </div>
                      <a href="#" data-id="${product.id}" class="add-to-cart fal fa-shopping-cart cart"></a>
               </div>
               
                  
              `;
              productList.appendChild(productElement);

              // Add event listener to 'Add to Cart' button
              const addToCartButton = productElement.querySelector('.add-to-cart');
              addToCartButton.addEventListener('click', addToCartClicked);;
          });
      })
      .catch(error => console.error('Error fetching data:', error));

  // Function to add a product to the cart
  // function addToCart(product) {
  //     cart.push(product);
  //     // total += product.price;
  //     updateCart();
  // }
  for (var i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
  }

  // Function to handle adding a product to the cart
function addToCartClicked(event) {
  const button = event.target;
  const productImage = button.getAttribute('data-image');
  const productPrice = parseFloat(button.getAttribute('data-price'));

  const productRow = document.createElement('div');
  productRow.classList.add('product-row');

  const productRows = document.querySelector('.product-rows');

  // Check if the product is already in the cart
  const existingProduct = productRows.querySelector(`[data-image="${productImage}"]`);
  if (existingProduct) {
    alert('This item is already in the cart.');
    return;
  }

  // Create the cart item
  productRow.innerHTML = `
    <div class="product-row">
    <img src="${productImage}" alt="" class="product-image" height="100">
      <span class="product-price">R${productPrice.toFixed(2)}</span>
      <input class="product-quantity" type="number" value="1">
      <button class="remove-btn">Remove</button>
    </div>
  `;

  productRows.appendChild(productRow);

  // Attach event listeners for quantity change and remove
  productRow.querySelector('.remove-btn').addEventListener('click', removeItem);
  productRow.querySelector('.product-quantity').addEventListener('change', changeQuantity);

  updateCartPrice();

  // Update the cart counter
  const cartQuantity = document.querySelector('.cart-quantity');
  const currentQuantity = parseInt(cartQuantity.textContent);
  cartQuantity.textContent = currentQuantity + 1;
}

// Function to remove an item from the cart
function removeItem(event) {
  const button = event.target;
  const productRow = button.parentElement.parentElement;
  productRow.remove();
  updateCartPrice();

  // Update the cart counter
  const cartQuantity = document.querySelector('.cart-quantity');
  const currentQuantity = parseInt(cartQuantity.textContent);
  cartQuantity.textContent = currentQuantity - 1;
}

// Function to change the quantity of items in the cart
function changeQuantity(event) {
  const input = event.target;
  const quantity = parseInt(input.value);

  // Ensure the quantity is a positive number
  if (isNaN(quantity) || quantity <= 0) {
    input.value = 1;
  }

  updateCartPrice();
}

// Function to update the cart's total price
function updateCartPrice() {
  const productRows = document.querySelectorAll('.product-row');
  let total = 0;

  productRows.forEach(productRow => {
    const price = parseFloat(productRow.querySelector('.product-price').innerText.replace('R', ''));
    const quantity = parseInt(productRow.querySelector('.product-quantity').value);
    total += price * quantity;
  });

  document.querySelector('.total-price').innerText = `R${total.toFixed(2)}`;
}
  
  
  // end of add products to cart

  
  // purchase items
  const purchaseBtn = document.querySelector('.purchase-btn');
  
  const closeCartModal = document.querySelector('.cart-modal');
  
  purchaseBtn.addEventListener('click', purchaseBtnClicked)
  
  function purchaseBtnClicked () {
    alert ('Thank you for your purchase');
    cartModalOverlay.style.transform= 'translateX(-100%)'
   var cartItems = document.getElementsByClassName('product-rows')[0]
   while (cartItems.hasChildNodes()) {
     cartItems.removeChild(cartItems.firstChild)
     
   }
    updateCartPrice()
  }
  

});




