let listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let cartCountElement = document.querySelector("cart-count"); //quantity
let closeShopping = document.querySelector(".closeShopping");
let items = document.getElementById("items")
let body = document.querySelector("body");

let cartCount = [];

cart.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

const productMock = [
  {
      image: 'product 1.jpeg',
      title: 'Product 1',
      price: 19.99,
  },
  // {
  //     image: 'product2.jpg',
  //     title: 'Product 2',
  //     price: 24.99,
  // },
  // Add more products as needed
];

function cardDisplay() {
   items.innerHTML ="";

 productMock.forEach((item, index) => {
    items.innerHTML += `
  <div class="items">
  <img src=${item.image} alt="product 1">
  <div class="description">
    <span class="title"${item.title}</span>
      <h4 class="price"R${item.price}</h4>
      </div>
       
       <a href="#" onclick="addToCart(${index})><i class="fal fa-shopping-cart cart">
            
      </div
  
  `
  });
}
window.onload = function() {
  cardDisplay();
};


function addToCart(item) {
  cartCount++;
  updateCartCount();
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cartCount;
}

function listCards() {
  listCard.innerHTML = "";
  cartCount.forEach((item,index) => {
    listCard.innerHTML += `<div>${item.title}`;
    listCard.innerHTML += `<div>${item.cartCount}`;
  });
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
              <div><img src="image/${value.image}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
              <div>
                  <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
              </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}


