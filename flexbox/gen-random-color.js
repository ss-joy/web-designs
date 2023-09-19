const divs = document.querySelectorAll(".box");
function genRandomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}
function getRandomColor() {
  let r, g, b;
  r = genRandomNumber();
  g = genRandomNumber();
  b = genRandomNumber();
  return `rgb(${r},${g},${b})`;
}
//give divs random colors
for (const div of divs) {
  div.style.backgroundColor = getRandomColor();
}

//fill divs with numbers
for (let i = 1; i < divs.length; i++) {
  divs[i].innerText = i;
}
