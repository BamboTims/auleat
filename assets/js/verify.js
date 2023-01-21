"use strict";

const button = document.querySelector(".button-price");
const btn = document.querySelector(".btn-2");
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrap");
const orderNumber = document.querySelector("#orderNo");

button.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.remove("hidden");

  const orderNo = Math.round(Math.random() * 9999999);
  orderNumber.innerText = `ON${orderNo} `;
});

btn.addEventListener("click", (e)=> {
  wrapper.classList.add("hidden");
});
