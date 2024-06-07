let answer = document.querySelector("#answer");
const btn = document.querySelector("[type=button]");
let heightValue = document.querySelector("#height-value");
let baseValue = document.querySelector("#base-value");

function calcArea() {
  baseValue = +baseValue.value;
  heightValue = +heightValue.value;
  let result = (1 / 2) * baseValue * heightValue;
  answer.innerText = `Area: ${result}`;
}

btn.addEventListener("click", calcArea);
