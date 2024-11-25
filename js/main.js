const tempElement = document.querySelector(".temp");

let currentTemp = 30;

let isSoundOn = false;

//brown noise ON
document.querySelector(".brown-noise2").click();
isSoundOn = true;

//animation
document.querySelector(".aircon-fan").classList.add("flip");
document.querySelector(".air").classList.add("air-animate");

//+- buttons
document.querySelector(".plus").addEventListener("click", () => {
  localStorage.setItem("+", (Number(localStorage.getItem("+")) || 0) + 1);

  if (currentTemp < 30) {
    currentTemp++;
    tempElement.innerHTML = currentTemp + "℃";
  }
});
document.querySelector(".minus").addEventListener("click", () => {
  localStorage.setItem("-", (Number(localStorage.getItem("-")) || 0) + 1);

  if (currentTemp > 18) {
    currentTemp--;
    tempElement.innerHTML = currentTemp + "℃";
  }
});
