"use strict";
///// QC
const rightbtn = document.querySelector(".right");
const leftbtn = document.querySelector(".left");
const imgNumber = document.querySelectorAll(".content-img img");
let index = 0;
rightbtn.addEventListener("click", function () {
  index += 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".content-img").style.right = index * 100 + "%";
});
leftbtn.addEventListener("click", function () {
  index -= 1;
  if (index < 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".content-img").style.right = index * 100 + "%";
});

///// item buy
const btn = document.querySelector(".product-link-item");
btn.addEventListener("click", function () {
  alert("OK!");
});
///// Best seller
("use strict");

//======================================================================DATA===================================================================================================
const product1 = {
  local: "ASUS",
  name: "Laptop ASUS UM5401QA-KN209W (Ryzen 5 5600H/RAM 8GB/512GB SSD/ Windows 11)",
  type: "TOPS",
  sale: 500,
  price: 480,
  image: "./img/img-seller/img-bestseller1.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const product2 = {
  local: "ACER",
  name: " Laptop ASUS Gaming ROG G513IE(Ryzen 7 4800H/RAM 8GB/512GB SSD/Windows 11)",
  type: "TOPS",
  sale: 345,
  price: 300,
  image: "./img/img-seller/img-bestseller2.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const product3 = {
  local: "ACER",
  name: "Màn hình LCD ACER VG240Y S (1920 x 1080/IPS/165Hz/2 ms/FreeSync)",
  type: "TOPS",
  sale: 200,
  price: 190,
  image: "./img/img-seller/img-bestseller3.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const product4 = {
  local: "ACER",
  name: "Màn hình LCD ACER KA272 (1920 x 1080/IPS/75Hz/1 ms/FreeSync)",
  type: "TOPS",
  sale: 200,
  price: 190,
  image: "./img/img-seller/img-bestseller4.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const product5 = {
  local: "DELL",
  name: "Laptop Dell Inspiron 15 3520 (i3-1215U/RAM 8GB/256GB SSD/Windows 11 + Office)",
  type: "TOPS",
  sale: 600,
  price: 500,
  image: "./img/img-seller/img-bestseller5.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const product6 = {
  local: "DELL",
  name: " Laptop Dell Inspiron 15 3520 (i3-1215U/RAM 8GB/256GB SSD/Windows 11 + Office)",
  type: "TOPS",
  sale: 550,
  price: 500,
  image: "./img/img-seller/img-bestseller6.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const product7 = {
  local: "FOXXGAMING",
  name: "PC FoxxGaming Office 50068 Intel Core i5-11400/8GB/250GB SSD/Free DOS/",
  type: "TOPS",
  sale: 1000,
  price: 999,
  image: "./img/img-seller/img-bestseller8.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const product8 = {
  local: "MAC",
  name: "MacBook Air 2020 13.3 inch MGND3SA/A (M1/8GB/SSD256GB) (Yellow) Limited Vision",
  type: "TOPS",
  sale: 800,
  price: 700,
  image: "./img/img-seller/img-bestseller7.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i3",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 3,
};

const listProduct = [
  product8,
  product7,
  product6,
  product5,
  product4,
  product3,
  product2,
  product1,
];

// console.log(listProduct);

localStorage.setItem("listProduct", JSON.stringify(listProduct));
// const listProduct = JSON.parse(localStorage.getItem("listProduct"));
//==========================================================================================================================================================================

const products = document.querySelector(".product-list");

// Load list product
const displayProduct = function () {
  products.innerHTML = "";
  const productList = listProduct.forEach((product) => {
    const html = ` 

    <div class="product-box">
    <a href="detail-products.html" class="product-link">
    <img
      class="product-img"
      src="${product.image}"
      alt=""
    />
    <h4>${product.local}</h4>
    <h5>
      ${product.name}
    </h5>
    <p>$${product.sale}</p>
    <div class="product-cost">
      <span class="product-price">$${product.price}</span>
    </div>
  </a>
  <div class="product-link-item">
          <i class="product-add-cart fa-solid fa-cart-plus"></i>
        </div>
  <div class = "information">
  <p class="guarantee">${product.guarantee}</p>
  <p class="color">${product.color}</p>
  <p class="cpu">${product.CPU}</p>
  <p class="ram">${product.RAM}</p>
  <p class="operatingsystem">${product.operatingsystem}</p> 
  <p class="chip">${product.Chip}</p>
  <p class="weight">${product.weight}</p>
  </div>
  </div>`;

    products.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct();

const product__list = document.querySelector(".product-list");
const product__item = document.querySelectorAll(".product-box");
const product__name = document.querySelector("h5");
const product__price = document.querySelector(".product-price");

const selectedProduct = {};

product__item.forEach((product) => {
  product.addEventListener("click", function () {
    selectedProduct.name = product.querySelector("h5").innerHTML;
    selectedProduct.price = product.querySelector(".product-price").innerHTML;
    selectedProduct.image = product
      .querySelector(".product-img")
      .getAttribute("src");
      selectedProduct.guarantee = product.querySelector(".guarantee").innerHTML;
      selectedProduct.color = product.querySelector(".color").innerHTML;
      selectedProduct.CPU = product.querySelector(".cpu").innerHTML;
      selectedProduct.RAM = product.querySelector(".ram").innerHTML;
      selectedProduct.operatingsystem = product.querySelector(".operatingsystem").innerHTML;
      selectedProduct.Chip = product.querySelector(".chip").innerHTML;
      selectedProduct.weight = product.querySelector(".weight").innerHTML;
    saveData();
  });
});
console.log(selectedProduct.name);
function saveData() {
  localStorage.setItem("name", selectedProduct.name);
  localStorage.setItem("image", selectedProduct.image);
  localStorage.setItem("price", selectedProduct.price);
  localStorage.setItem("guarantee", selectedProduct.guarantee);
  localStorage.setItem("color", selectedProduct.color);
  localStorage.setItem("CPU",selectedProduct.CPU)
  localStorage.setItem("RAM", selectedProduct.RAM);
  localStorage.setItem("operatingsystem", selectedProduct.operatingsystem);
  localStorage.setItem("Chip", selectedProduct.Chip);
  localStorage.setItem("weight", selectedProduct.weight);
}
console.log(localStorage.getItem("name"))
///// add to cart
const btnAddToCart = document.querySelectorAll(".product-link-item");
let cartList = JSON.parse(localStorage.getItem("Cart"));
console.log(cartList);
if (cartList == null) {
  cartList = [];
}
console.log(cartList);

btnAddToCart.forEach((btn) => {
  btn.addEventListener("click", addToCartClicked);
});

function checkCartProduct(productItem) {
  for (let i = 0; i < cartList.length; i++) {
    if (
      cartList[i].name == String(productItem.name) &&
      cartList[i].price == Number(productItem.price) &&
      String(cartList[i].img) == String(productItem.img)
    ) {
      return false;
    }
  }
  return true;
}

function addToCartClicked(event) {
  var btn = event.target;
  var productItem = btn.parentElement.parentElement;
  var productName = productItem.querySelector("h5").innerHTML;
  var productPrice = productItem
    .querySelector(".product-price")
    .innerHTML.slice(1);
  var productImg = productItem
    .querySelector(".product-img")
    .getAttribute("src");
  var cartProduct = productInformation(productName, productPrice, productImg);
  console.log(cartList)
  if (cartList.length == 0) {
    cartList.push(cartProduct);
    localStorage.setItem("Cart", JSON.stringify(cartList));
    alert("Add suscessfully");
    return true;
  }
  console.log(cartList)
  checkCartProduct(cartProduct);
  console.log(checkCartProduct(cartProduct));
  if (checkCartProduct(cartProduct) == false) {
    alert("You have added this product already");
  } else {
    alert("Added sucessfully");
    cartList.push(cartProduct);
    localStorage.setItem("Cart", JSON.stringify(cartList));
  }
}

function productInformation(productName, productPrice, productImg) {
  var productCart = {};
  productCart.name = productName;
  productCart.price = productPrice;
  productCart.img = productImg;
  return productCart;
}
