//EX7: Write a function to change the h1 text to something else
document.addEventListener("keydown", function () {
  if (event.keyCode == "f") {
    alert();
  }
});

let changeHeader = document
  .getElementById("changeHeaderButton")
  .addEventListener("click", () => {
    document.getElementById("header1").innerText =
      "You have changed the Header!";
  });

//EX8: Write a function to change the page background color

let changePageColor = document
  .getElementById("changePageColor")
  .addEventListener("click", () => {
    let randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    document.getElementById("container").style.backgroundColor = randomColor;
  });

//EX9: Write a function to change the footer address with a fake one

let functionButton = document
  .getElementById("changeFooterAddress")
  .addEventListener("click", () => {
    document.querySelector(
      "#container > div:nth-child(7) > footer > p:nth-child(1)"
    ).innerText = "308 Negra Arroyo Lane, Albuquerque, New Mexico 87104";
  });

//EX10: Write a function to add a CSS class to every Amazon link
let addClassButton = document
  .getElementById("changeImages")
  .addEventListener("click", () => {
    let imagesToChange = document.querySelectorAll("img");
    for (let el of imagesToChange) {
      el.classList.add("toggleClass");
    }
  });

//EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of
//the image
let addToggleButton = document
  .getElementById("changeImages")
  .addEventListener("click", () => {
    let imagesToChange = document.querySelectorAll("img");
    for (let el of imagesToChange) {
      el.classList.toggle("toggleOpacity");
    }
  });

//EX12: Write a function to color the price of the products in a different one every time it's invoked
let productPrices = document
  .getElementById("changePriceColor")
  .addEventListener("click", () => {
    let priceText = document.querySelectorAll(".price");
    for (let i = 0; i < priceText.length; i++) {
      let randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
      priceText[i].style.color = randomColor;
    }
  });
