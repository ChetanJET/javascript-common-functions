const selector = {
  cartDrawerBlock: ".cart-drawer-block",
  cartDrawerContent: ".cart-items-wrapper",
  cartempty: ".cart-empty",
};

// set with var
var cartDrawerBlock = null;
var cartDrawerContent = null;
var cartempty = null;

// dom
window.addEventListener("DOMContentLoaded", async function () {
  setElement();
});

function setElement() {
  cartDrawerContent = document.querySelector(selector.cartDrawerContent);
  cartDrawerBlock = document.querySelector(selector.cartDrawerBlock);
  cartempty = document.querySelector(selector.cartempty);
}

// use of selector
if (cartempty) {
  cartempty.style.display = "none";
}
// use of selector
if (cartempty) {
  cartDrawerBlock.classList.add("open");
}
