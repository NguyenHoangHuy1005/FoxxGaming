"use strict";
const listProduct = JSON.parse(localStorage.getItem("Cart"));
console.log(listProduct)

function displayCart(listCart) {
  const table = document.querySelector(".cart-table");
  listCart.forEach((cart) => {
    const html = `
    <tr class="cart-row">
          <td style="width: 25%" class="cart-name">
           ${cart.name}
          </td>
          <td>
            <img src=" ${cart.img}" alt="" class="product-img" />
          </td>
          <td style="width: 10%">
            <input type="number" value="1" class="quantity" />
          </td>
          <td class="cart-price"> ${cart.price}</td>
          <td class="cart-total"> ${cart.price}</td>
          <td><button class="btn-danger">Remove</button></td>
        </tr>
    `;
    table.insertAdjacentHTML("beforeend", html);
    updateCartTotal();
  });
}

displayCart(listProduct);

///////////////////////////////////////////////////////////////////////////
const btnRemove = document.querySelectorAll(".btn-danger");

btnRemove.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    const btnClicked = e.target;
    const rowInformation = btnClicked.parentElement.parentElement;
    const productName = rowInformation.querySelector(".cart-name").innerHTML;

    // Remove product in cart
    listProduct.forEach((product, i) => {
      if (product.name.trim() == productName.trim()) {     
        listProduct.splice(i, 1);
      }
    });
    localStorage.setItem("Cart", JSON.stringify(listProduct));
    btnClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
});
///////////////////////////////////////////////////////////////////////////
function updateCartTotal() {
  var cart = document.querySelector(".cart-table");
  var cartRows = cart.querySelectorAll(".cart-row");
  var totalprice = 0;
  cartRows.forEach((row, i) => {
    var price = Number(row.querySelector(".cart-price").innerHTML);
    var quantity = Number(row.querySelector(".quantity").value);
    var total = Math.round(price * quantity * 100) / 100;
    row.querySelector(".cart-total").innerHTML = total;
    totalprice += total;
  });
  document.querySelector(".total-price").innerHTML =
    "$" + Math.round(totalprice * 100) / 100;
}
///////////////////////////////////////////////////////////////////////////
//Update Quantity
document.querySelectorAll(".quantity").forEach((qty) => {
  qty.addEventListener("click", function (e) {
    if (quantityValid(qty.value) == true) {
      console.log(quantityValid(+qty.value))
      updateCartTotal();
    } else {
      qty.value = 1;
      updateCartTotal();
      alert("Quantity must be a number > 0");
    }
  });
});
///////////////////////////////////////////////////////////////////////////
function quantityValid(quantity) {
  if (quantity <= 0) {
    return false;
  }
  return true;
}
//////////////details
const button = document.querySelector(".btn");
const dong = document.querySelector(".close");
button.addEventListener("click", function(){
  document.querySelector(".modal").style.display = "flex";
})
dong.addEventListener("click", function(){
  document.querySelector(".modal").style.display = "none";
})
///////////ktra
function kiemTraTen() {
  var re = /^[A-Z][a-z]+/;
  if (re.test(document.getElementById("usernameOrder").value.trim()) == false) {
      tendn.innerText = "Must start with a capital letter"
      return false;
  } else {
      tendn.innerText = "*";
      return true;
  }
}
function kiemTraMail(){
  var re = /^[A-Za-z0-9_.]{6,32}@(gmail.com)$/;
  if(re.test(document.getElementById("emailOrder").value.trim()) == false){
    mail.innerText = "Correct email format is required"
      return false;
  }else {
    mail.innerText = "*";
      return true;
  }
}
function kiemTraPhone(){
  var re = /^[0-9]{9,10}/;
  if(re.test(document.getElementById("phonenumberOrder").value.trim()) == false){
    phone.innerText = "Must be a number"
      return false;
  }else {
    phone.innerText = "*";
      return true;
  }
}
function submitForm() {
  if(listProduct.length == 0){
    alert("Cart is empty")
  } 
  else if (kiemTraTen() && kiemTraPhone() && kiemTraMail()) {
    alert("Order Success")  
    listProduct.forEach(() => {   
      listProduct.pop();
    });
    listProduct.pop()
    localStorage.setItem("Cart", JSON.stringify(listProduct));
    btnClicked.parentElement.parentElement.remove();
    updateCartTotal();
    return true;
  } 
  else {
      alert("You have not entered all the information");
  }
}
