import donutStuff from "./donutStuff.js"

const donutButton = document.querySelector("#donutButton");//
const donutCountEl = document.querySelector("#numbers");//
const clickWorthEl = document.querySelector("#clickWorth")//
const autoButton = document.querySelector("#autoClick");//
const autoCountEl = document.querySelector("#autoClickCount");//
const autoCostEl = document.querySelector("#autoClickCost");//
const multiButton = document.querySelector("#multiButton");
const multiCountEl = document.querySelector("#multiCount");//
const multiCostEl = document.querySelector("#multiCost");//
const resetButton = document.querySelector("#resetButton")//
const donutMaker = new donutStuff();



function updateView() {
  autoButton.disabled = !donutMaker.autoBuyEnabled;
  multiButton.disabled = !donutMaker.multiBuyEnabled;
  clickWorthEl.innerText =  Math.pow(2, donutMaker.multipliers).toFixed(1) + " Donuts!";
  donutCountEl.innerText = ` ${donutMaker.donutCount.toFixed(1)}`;
  autoCountEl.innerText = "Auto-Clickers: " + donutMaker.autoClicker;
  autoCostEl.innerText = "Auto-Clicker Cost: " + donutMaker.autoClickCost.toFixed(1);
  multiCountEl.innerText = "Multipliers: " + donutMaker.multipliers;
  multiCostEl.innerText = "Multiplier Cost: " + donutMaker.multipliersCost.toFixed(1);

}

updateView();
//make a Donut
function makeNewDonut() {
  donutMaker.donutClick()
}


donutButton.addEventListener("click", () => {
  makeNewDonut();
  updateView();
})

//auto-clicker button
autoButton.addEventListener("click", () => {
  donutMaker.buyAutoClicker();
  setInterval(makeNewDonut, 1000);
  setInterval(updateView, 1000);
  updateView();
})

//multiplier button
multiButton.addEventListener("click", () => {
  donutMaker.buyMultiplier();
  updateView();
})

 resetButton.addEventListener("click", reset); 

function reset(){
  window.location.reload();
}





























