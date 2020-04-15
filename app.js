const form = document.querySelector("form");
const display = document.querySelector("#display");
const imageUrl = document.querySelector("#imageURL");
const topTextIn = document.querySelector("#topText");
const btmTextIn = document.querySelector("#btmText");
const deleteBtn = document.querySelector("#deletebtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  display.innerHTML = "";
  createText(topTextIn.value, "top");
  createCheckImg(imageUrl.value);
  createText(btmTextIn.value, "btm");
});

function createText(textIn, position) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("meme-text", "border", position);
  newDiv.innerText = textIn;
  display.append(newDiv);
}

function createCheckImg(image) {
  let newImg = document.createElement("img");
  newImg.setAttribute("src", image);
  display.append(newImg);
}

deleteBtn.addEventListener("click", function () {
  display.innerHTML = "";
});
