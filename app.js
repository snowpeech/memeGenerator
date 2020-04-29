const form = document.querySelector("form");
const display = document.querySelector("#display");
const imageUrl = document.querySelector("#imageURL");
const topTextIn = document.querySelector("#topText");
const btmTextIn = document.querySelector("#btmText");
const deleteBtn = document.querySelector("#deletebtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const meme = document.createElement("div");
  meme.classList.add("meme");
  createText(topTextIn.value, "top", meme);
  setImg(imageUrl.value, meme);
  createText(btmTextIn.value, "btm", meme);
  display.append(meme);
});

function createText(textIn, position, parentEl) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("meme-text", "border", position);
  newDiv.innerText = textIn;
  parentEl.append(newDiv);
}

function setImg(image, parentEl) {
  let newImg = document.createElement("img");
  newImg.setAttribute("src", image);
  parentEl.append(newImg);
}

display.addEventListener("dblclick", function (e) {
  e.target.parentNode.remove();
});
