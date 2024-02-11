let main = document.getElementById("main");
let colors = ["red", "cyan", "yellow", "white"];

for (let i = 0; i < 506; i++) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", () => {
    setColor(div);
  });
  div.addEventListener("mouseout", () => {
    removeColor(div);
  });
  main.appendChild(div);
}

function setColor(element) {
  let color = getRandomColor();
  element.style.backgroundColor = color;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function removeColor(element) {
  element.style.backgroundColor = "#353535";
}
