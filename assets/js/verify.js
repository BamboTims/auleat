"use strict";

const button = document.querySelector(".button-price");
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrap");
const orderNumber = document.querySelector("#orderNo");

button.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.remove("hidden");

  const orderNo = Math.random() * 9999999;
  orderNumber.innerText = `ON${orderNo} `;
});
