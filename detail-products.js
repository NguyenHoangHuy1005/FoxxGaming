"use strict";

const product__name = localStorage.getItem("name");
const product__image = localStorage.getItem("image");
const product__price = localStorage.getItem("price");
const product__guarantee = localStorage.getItem("guarantee");
const product__color = localStorage.getItem("color")
const product__cpu = localStorage.getItem("CPU")
const product__ram = localStorage.getItem("RAM")
const product__operatingsystem = localStorage.getItem("operatingsystem")
const product__chip = localStorage.getItem("Chip")
const product__weight = localStorage.getItem("weight")
console.log(product__price)
const product = document.querySelector(".detail-section");
const productDetail = function () {
  product.innerHTML = "";
  const html = `
  <div class="product-detail">
          <div class="product-image">
            <img
              src="${product__image}"
              alt=""
              class="image"
            />
          </div>

          <div class="information">
            <div class="name">
              <h5 class="product-name">
                ${product__name}
              </h5>
            </div>
            <div class="detail">
              <h6>Specifications</h6>
            </div>
            <div class="product-details">
              <table>
                <tr><td>Guarantee</td><td>${product__guarantee}</td></tr>
                <tr><td>Color</td><td>${product__color}</td></tr>
                <tr><td>CPU</td><td>${product__cpu}</td></tr>
                <tr><td>RAM</td><td>${product__ram}</td></tr>
                <tr><td>Operatingsystem</td><td>${product__operatingsystem}</td></tr>
                <tr><td>Chip</td><td>${product__chip}</td></tr>
                <tr><td>Weight</td><td>${product__weight}kg</td></tr>
              </table>
            </div>
            <div class="price">
              <p class="product-price">${product__price}</p>
            </div>
            <div class="btn"><button class="btn-cart">Add to cart</button></div>
          </div>
        </div>`;

  product.insertAdjacentHTML("afterbegin", html);
};

productDetail();
//////////////////////////////////////////////////////////

const btnCart = document.querySelector(".btn-cart");
console.log(btnCart)
let cartList = JSON.parse(localStorage.getItem("Cart"));

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

btnCart.addEventListener("click", function () {
  let productName = document.querySelector(".product-name").innerHTML;
  let productPrice = document
    .querySelector(".product-price")
    .innerHTML.slice(1);
  let productImg = document.querySelector(".image").getAttribute("src")

  let selectedProduct = {};

  selectedProduct.name = productName;
  selectedProduct.price = productPrice;
  selectedProduct.img = productImg;

  if (cartList.length == 0) {
    cartList.push(selectedProduct);
    localStorage.setItem("Cart", JSON.stringify(selectedProduct));
    alert("Add suscessfully");
    return true;
  }

  if (checkCartProduct(selectedProduct) == false) {
    alert("You have added this product already");
  } else {
    alert("Added sucessfully");
    cartList.push(selectedProduct);
    localStorage.setItem("Cart", JSON.stringify(cartList));
  }
});
