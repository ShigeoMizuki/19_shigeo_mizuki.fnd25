'use strict'
// １行目に記載している 'use strict'　は削除しないでください
function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

const squareWidth = 16
const squareHeight = 24
const inputDefault = {content:"", piece:1, width:5, height:3, direction:"horizontal-tb"};

function inputClear() {
  const clearText = document.getElementById("add-text");
  clearText.value = "";

  const clearNum = document.getElementById("add-num");
  clearNum.value = "";

  const clearWidth = document.getElementById("add-width");
  clearWidth.value = "";

  const clearHeight = document.getElementById("add-height");
  clearHeight.value = "";
  
  const clearDirection = document.getElementById("add-direction");
  clearDirection.value = "";
}

const clear = document.getElementById("clear-button");
clear.addEventListener("click", inputClear);

const inputContent = {};
function objMakes() {
  
  const inputText = document.getElementById("add-text").value;
  inputContent.content = inputText;
  
  const inputNum = document.getElementById("add-num").value;
  inputContent.piece = inputNum;
  
  const inputWidth = document.getElementById("add-width").value;
  inputContent.width = inputWidth;
  
  const inputHeight = document.getElementById("add-height").value;
  inputContent.height = inputHeight;
  
  const inputDirection = document.getElementById("add-direction").value;
  inputContent.direction = inputDirection;
  
  for (let key in inputContent) {
    if (inputContent[key] === "") {
      inputContent[key] = inputDefault[key];
    }
  }
  return inputContent;
} 

function createButton () {
  const newButton = document.createElement("button");
  newButton.id = "print-button";
  newButton.textContent = "  印刷  ";
  newButton.style.align = "center";
  newButton.style.margin = "20px";
  document.body.appendChild(newButton);
}

function createTable () {
  const maxPiece = Math.floor(squareWidth / inputContent["width"]);
  let size = Math.floor(Math.sqrt(inputContent["width"] * inputContent["width"]) / inputContent["content"].lengt);
  const maxSize = 18;
  if (size > maxSize) {
      size = maxSize;
  }
    
  const newTable = document.createElement("table");
  newTable.id = "makelabel";
  const tableBody = document.createElement("tbody");
  
  for (let i = 0; i < inputContent["piece"]; i += maxPiece) {
    const bodyRow = document.createElement("tr");
    for (let j = 0; j < maxPiece && (i + j) < inputContent["piece"]; j++) {
      const bodyCell = document.createElement("td");
      bodyCell.textContent = inputContent["content"];
      bodyCell.style.width = inputContent["width"] + "cm";
      bodyCell.style.height = inputContent["height"] + "cm";
      bodyCell.style.fontSize = size + "px";
      bodyCell.style.textAlign = "center";
      bodyCell.classList.add("labelname");
      bodyRow.appendChild(bodyCell);
    }
    tableBody.appendChild(bodyRow);
  }
  newTable.appendChild(tableBody);
  document.body.appendChild(newTable);
}

function decorationTable () {
  const decoration = document.getElementById("makelabel");
  decoration.style.backgroundColor = "#fff";
  decoration.style.color = "#000";
  decoration.style.borderCollapse = "collapse";
  decoration.style.border = "1px solid #000";
  decoration.style.margin = "auto";
  decoration.style.padding = "0";;
}

const input = document.getElementById("add-button");
input.addEventListener("click", objMakes);
input.addEventListener("click", createButton);
input.addEventListener("click", createTable);
input.addEventListener("click", decorationTable);

function printArea () {
  const header = document.getElementsByClassName("header");
  const inputZone = document.getElementsByClassName("input-zone");

  header.style.visibility = "hidden";
  inputZone.style.visibility = "hidden";

  window.print();

  header.style.visibility = "visible";
  inputZone.style.visibility = "hvisible";
}

const print = document.getElementById("print-button");
print.addEventListener("click", printArea);
