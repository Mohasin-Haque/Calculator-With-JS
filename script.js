const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const addBtn = document.querySelector("#add-btn");
const subBtn = document.querySelector("#sub-btn");
const mulBtn = document.querySelector("#mul-btn");
const divBtn = document.querySelector("#div-btn");
const outputDiv = document.querySelector("#output");

function addInputs() {
    outputDiv.innerHTML = Number(inputOne.value) + Number(inputTwo.value);
}

function subInputs() {
    outputDiv.innerHTML = Number(inputOne.value) - Number(inputTwo.value);
}

function mulInputs() {
    outputDiv.innerHTML = Number(inputOne.value) * Number(inputTwo.value);

}

function divInputs() {
    outputDiv.innerHTML = Number(inputOne.value) / Number(inputTwo.value);
}

addBtn.addEventListener("click", addInputs)
subBtn.addEventListener("click", subInputs)
mulBtn.addEventListener("click", mulInputs)
divBtn.addEventListener("click", divInputs)