const entries = document?.querySelector(".entries");
const orders = document.querySelector(".title-checkout").querySelector("h6");
const prices = document.querySelectorAll(".prio");
const carts = JSON.parse(sessionStorage.getItem("carts"));
console.log(carts);

orders.innerText = carts.length;
const total = carts.reduce((acc, el) => el.quantity * el.price + acc, 0);
console.log(total);

prices.forEach((el) => {
  el.innerText = `N${total}`;
});

carts.forEach((el) => {
  const html = `<li class="price-list">
    <i class="closeButton fa-solid fa-xmark"></i>
    <div class="counter-container">
      <div class="counter-food">
        <h4>${el.foodname}</h4>
      </div>
    </div>
    <div class="price">
        <div>
                  <h2>N${el.price * el.quantity}</h2>
                  <span>Sum</span>
                </div>
                  <div>
                    <div class="qty-input">
              <button class="qty-count qty-count--minus" data-action="minus" type="button">-</button>
              <input class="product-qty" type="number" name="product-qty" min="0" value=${
                el.quantity
              }>
              <button class="qty-count qty-count--add" data-action="add" type="button">+</button>
            </div>
            <span>Quantity</span>
          </div>
          </div>
    </li>`;

  entries.insertAdjacentHTML("beforeend", html);
});
