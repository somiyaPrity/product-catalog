const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-subtract');
const mulBtn = document.getElementById('btn-multiply');
const devBtn = document.getElementById('btn-devide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result,text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

