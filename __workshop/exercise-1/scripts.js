//Define the main variables for header & year selection
let headerYear = document.getElementById("headerYear");
let year18 = document.getElementById("year18");
let year19 = document.getElementById("year19");
let button18 = document.getElementById("button18");
let button19 = document.getElementById("button19");
let selectedYear = 2018;
let numberSelected = document.getElementById("number");
let numberTextDisplay = document.getElementById("numberText");
let foodTextDisplay = document.getElementById("foodText");
let noHover = document.getElementById("noHover");
let whiteBlock = document.getElementById("white-block");

//Display the current year selected
window.addEventListener("load", displayYear18);
button18.addEventListener("click", displayYear18);
button19.addEventListener("click", displayYear19);

function displayTopTenList(givenYear) {
  whiteBlock.innerHTML = "";
  topTenList[givenYear].forEach((element) => {
    console.log(element);
    let numbers = document.createElement("li");
    numbers.innerHTML = `<p class="number">${element.id}</p>`;
    whiteBlock.appendChild(numbers);
    numbers.addEventListener("mouseover", () => {
      selectedNumber(element.id);
      selectedFood(element.name);
    });
    numbers.addEventListener("mouseout", noSelectedNumber);
  });
}
//functions to display the year on header and change color of button
function displayYear18() {
  headerYear.innerText = "2018";
  button18.style.backgroundColor = "#5b2a86";
  button18.style.color = "white";
  button19.style.backgroundColor = "transparent";
  button19.style.color = "#5b2a86";
  button18.style.outline = "none";
  selectedYear = 2018;
  displayTopTenList(selectedYear);
}

function displayYear19() {
  headerYear.innerText = "2019";
  button19.style.backgroundColor = "#5b2a86";
  button19.style.color = "white";
  button18.style.backgroundColor = "transparent";
  button18.style.color = "#5b2a86";
  button19.style.outline = "none";
  selectedYear = 2019;
  displayTopTenList(selectedYear);
}

window.addEventListener("load", noSelectedNumber);

function noSelectedNumber() {
  numberTextDisplay.style.display = "none";
  foodTextDisplay.style.display = "none";
  noHover.style.display = "block";
}

function selectedNumber(givenNumber) {
  numberTextDisplay.style.display = "block";
  numberTextDisplay.innerText = givenNumber;
  noHover.style.display = "none";
}

function selectedFood(givenFood) {
  foodTextDisplay.style.display = "block";
  foodTextDisplay.innerText = givenFood;
}
