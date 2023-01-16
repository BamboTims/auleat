"use strict";

const container = document.querySelector("#container");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const carts = [];

const breakFast = [
  {
    foodname: "Toast and egg",
    price: 100,
    mealtype: "breakfast",
    image:
      "https://unsplash.com/photos/FFqNATH27EM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fHx8MTY3MzA3NDMxMA&force=true&w=640",
  },

  {
    foodname: "Spaghetti",
    price: 100,
    mealtype: "breakfast",
    image:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    foodname: "Akara",
    price: 50,
    mealtype: "breakfast",
    image:
      "https://cdn.punchng.com/wp-content/uploads/2020/07/27065257/Akara.jpg",
  },
  {
    foodname: "Apple",
    price: 150,
    mealtype: "fruits",
    image:
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    foodname: "Indomie and fried egg",
    price: 45,
    mealtype: "Lunch",
    image:
      "https://unsplash.com/photos/rn7BK2AaaOE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fGpvbGxvZiUyMHJpY2V8ZW58MHx8fHwxNjczMDMzODcw&force=true&w=640",
  },
  {
    foodname: "Pear",
    price: 150,
    mealtype: "fruits",
    image:
      "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const Lunch = [
  {
    foodname: "Toast and egg",
    price: 50,
    mealtype: "breakfast",
    image:
      "https://unsplash.com/photos/FFqNATH27EM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fHx8MTY3MzA3NDMxMA&force=true&w=640",
  },

  {
    foodname: "Oatmeal and banana",
    price: 60,
    mealtype: "breakfast",
    image:
      "https://unsplash.com/photos/oh-5xHAtJg8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fEJyZWFrZmFzdHxlbnwwfHx8fDE2NzMwNzQ1NTY&force=true&w=640",
  },
  {
    foodname: "Efo riro and Semovita",
    price: 70,
    mealtype: "Any",
    image:
      "https://unsplash.com/photos/kn_ANxnwCQ0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8bmlnZXJpYW4lMjBmb29kfGVufDB8fHx8MTY3MzAzNjAzMw&force=true&w=640",
  },
  {
    foodname: "White rice fried egg and beef",
    price: 10,
    mealtype: "Lunch",
    image:
      "https://unsplash.com/photos/szQFiGZH8wU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8am9sbG9mJTIwcmljZXxlbnwwfHx8fDE2NzMwMzM4NzA&force=true&w=640",
  },
  {
    foodname: "Indomie and fried egg",
    price: 45,
    mealtype: "Lunch",
    image:
      "https://unsplash.com/photos/rn7BK2AaaOE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fGpvbGxvZiUyMHJpY2V8ZW58MHx8fHwxNjczMDMzODcw&force=true&w=640",
  },
];

const Dinner = [
  {
    foodname: "Toast and egg",
    price: 50,
    mealtype: "breakfast",
    image:
      "https://unsplash.com/photos/FFqNATH27EM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fHx8MTY3MzA3NDMxMA&force=true&w=640",
  },

  {
    foodname: "Oatmeal and banana",
    price: 60,
    mealtype: "breakfast",
    image:
      "https://unsplash.com/photos/oh-5xHAtJg8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fEJyZWFrZmFzdHxlbnwwfHx8fDE2NzMwNzQ1NTY&force=true&w=640",
  },
  {
    foodname: "Efo riro and Semovita",
    price: 70,
    mealtype: "Any",
    image:
      "https://unsplash.com/photos/kn_ANxnwCQ0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8bmlnZXJpYW4lMjBmb29kfGVufDB8fHx8MTY3MzAzNjAzMw&force=true&w=640",
  },
  {
    foodname: "White rice fried egg and beef",
    price: 10,
    mealtype: "Lunch",
    image:
      "https://unsplash.com/photos/szQFiGZH8wU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8am9sbG9mJTIwcmljZXxlbnwwfHx8fDE2NzMwMzM4NzA&force=true&w=640",
  },
  {
    foodname: "Indomie and fried egg",
    price: 45,
    mealtype: "Lunch",
    image:
      "https://unsplash.com/photos/rn7BK2AaaOE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fGpvbGxvZiUyMHJpY2V8ZW58MHx8fHwxNjczMDMzODcw&force=true&w=640",
  },
];

breakFast.forEach((el) => {
  const html = `<div class="col-xl-4 col-lg-6" data-aos="flip-up"  data-aos-delay="200" data-aos-duration="300">
  <div class="dish">
  <img alt="food-dish" src=${el.image}>
  <div class="dish-foods">
    <h3>${el.foodname}</h3>
<div class="dish-icon">
 <div class="cafa-button">
     <a href="#">${el.mealtype}</a>
     <a href="#">Brunch</a>
  </div>
  <div class="dish-icon end">

    <i class="info fa-solid fa-circle-info"></i>
    <div class="star">
      <a href="#"><i class="fa-solid fa-heart"></i></a>
    </div>
  </div>
     </div>
     <div class="price">
       <h2>N${el.price}</h2>
       <div class="qty-input">
   <button class="qty-count qty-count--minus" data-action="minus" type="button">-</button>
   <input class="product-qty" type="number" name="product-qty" min="0" value="1">
   <button class="qty-count qty-count--add" data-action="add" type="button">+</button>
 </div>
</div>
<button class="button-price">Add to Basket<i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="dish-info" style="display: none;">
      <i class="info2 fa-solid fa-xmark"></i>
      <h5>
        ${el.foodname}
      </h5>
      <div class="cafa-button">
     <a href="#">${el.mealtype}</a>
     <a href="#">Brunch</a>
</div>
<p>In egestas erat imperdiet sed euismod nisi porta. Ultrices sagittis orci a scelerisque. Diam quam nulla porttitor.</p>
<ul class="menu-dish">
  <li>Nulla porttitor massa id;</li>
  <li>Aliquam vestibulum morbi;</li>
  <li>Blandit donec adipiscing;</li>
</ul>
    </div>
</div></div></div>`;

  breakfast.insertAdjacentHTML("beforeend", html);
});

Lunch.forEach((el) => {
  const html = `<div class="col-xl-4 col-lg-6" data-aos="flip-up"  data-aos-delay="200" data-aos-duration="300">
  <div class="dish">
  <img alt="food-dish" src=${el.image}>
  <div class="dish-foods">
    <h3>${el.foodname}</h3>
<div class="dish-icon">
 <div class="cafa-button">
     <a href="#">${el.mealtype}</a>
     <a href="#">Brunch</a>
  </div>
  <div class="dish-icon end">

    <i class="info fa-solid fa-circle-info"></i>
    <div class="star">
      <a href="#"><i class="fa-solid fa-heart"></i></a>
    </div>
  </div>
     </div>
     <div class="price">
       <h2>N${el.price}</h2>
       <div class="qty-input">
   <button class="qty-count qty-count--minus" data-action="minus" type="button">-</button>
   <input class="product-qty" type="number" name="product-qty" min="0" value="1">
   <button class="qty-count qty-count--add" data-action="add" type="button">+</button>
 </div>
</div>
<button class="button-price">Add to Basket<i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="dish-info" style="display: none;">
      <i class="info2 fa-solid fa-xmark"></i>
      <h5>
        ${el.foodname}
      </h5>
      <div class="cafa-button">
     <a href="#">${el.mealtype}</a>
     <a href="#">Brunch</a>
</div>
<p>In egestas erat imperdiet sed euismod nisi porta. Ultrices sagittis orci a scelerisque. Diam quam nulla porttitor.</p>
<ul class="menu-dish">
  <li>Nulla porttitor massa id;</li>
  <li>Aliquam vestibulum morbi;</li>
  <li>Blandit donec adipiscing;</li>
</ul>
    </div>
</div></div></div>`;

  lunch.insertAdjacentHTML("beforeend", html);
});

Dinner.forEach((el) => {
  const html = `<div class="col-xl-4 col-lg-6" data-aos="flip-up"  data-aos-delay="200" data-aos-duration="300">
  <div class="dish">
  <img alt="food-dish" src=${el.image}>
  <div class="dish-foods">
    <h3>${el.foodname}</h3>
<div class="dish-icon">
 <div class="cafa-button">
     <a href="#">${el.mealtype}</a>
     <a href="#">Brunch</a>
  </div>
  <div class="dish-icon end">

    <i class="info fa-solid fa-circle-info"></i>
    <div class="star">
      <a href="#"><i class="fa-solid fa-heart"></i></a>
    </div>
  </div>
     </div>
     <div class="price">
       <h2>N${el.price}</h2>
       <div class="qty-input">
   <button class="qty-count qty-count--minus" data-action="minus" type="button">-</button>
   <input class="product-qty" type="number" name="product-qty" min="0" value="1">
   <button class="qty-count qty-count--add" data-action="add" type="button">+</button>
 </div>
</div>
<button class="button-price">Add to Basket<i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="dish-info" style="display: none;">
      <i class="info2 fa-solid fa-xmark"></i>
      <h5>
        ${el.foodname}
      </h5>
      <div class="cafa-button">
     <a href="#">${el.mealtype}</a>
     <a href="#">Brunch</a>
</div>
<p>In egestas erat imperdiet sed euismod nisi porta. Ultrices sagittis orci a scelerisque. Diam quam nulla porttitor.</p>
<ul class="menu-dish">
  <li>Nulla porttitor massa id;</li>
  <li>Aliquam vestibulum morbi;</li>
  <li>Blandit donec adipiscing;</li>
</ul>
    </div>
</div></div></div>`;

  dinner.insertAdjacentHTML("beforeend", html);
});

container.addEventListener("click", (e) => {
  const meals = [...Dinner, ...Lunch, ...breakFast];
  const clicked = e.target.closest(".button-price");

  if (!clicked) return;

  const parent = clicked.parentNode;
  const foodName = parent.children[0].innerText;
  const quantity = parent.querySelector(".product-qty").value;

  const foodItem = meals.find((el) => el.foodname === foodName);

  const isInCart = carts.includes(carts.find((el) => el.foodname === foodName));

  if (isInCart) {
    const foodItemIndex = carts.indexOf(
      carts.find((el) => el.foodname === foodName)
    );
    const quan = +carts[foodItemIndex].quantity + +quantity;
    carts[foodItemIndex].quantity = quan;
  } else {
    carts.push({
      quantity,
      ...foodItem,
    });
  }

  sessionStorage.clear();
  sessionStorage.setItem("carts", JSON.stringify(carts));
});
