let outputBox = document.getElementById("outputBox");
function numberBtnOnClick(){
	outputBox.innerHTML += this.innerHTML;
}
for(let i = 0; i <= 9; i++)
	document.getElementById(i + "Btn").onclick = numberBtnOnClick;
document.getElementById("clearBtn").onclick = clearOutput;
function clearOutput() {
    outputBox.innerHTML = '';
}

document.getElementById("dotBtn").onclick = dotBtnOnClick;
function dotBtnOnClick() { 
    outputBox.innerHTML += '.';
}


let storage;
document.getElementById("addBtn").onclick = function() {
    storage = outputBox.innerHTML;
    clearOutput();
    lastOp = '+';
}
document.getElementById("subtractBtn").onclick = function() {
    storage = outputBox.innerHTML;
    clearOutput();
    lastOp = '-';
}
document.getElementById("multiplyBtn").onclick = function() {
    storage = outputBox.innerHTML;
    clearOutput();
    lastOp = '*';
}
document.getElementById("divideBtn").onclick = function() {
    storage = outputBox.innerHTML;
    clearOutput();
    lastOp = '/';
}


document.getElementById("equalsBtn").onclick = function() {
    if(lastOp == '+'){
        outputBox.innerHTML = parseFloat(outputBox.innerHTML) + parseFloat(storage);
    }
    else if(lastOp == '/'){
        outputBox.innerHTML = parseFloat(storage) / parseFloat(outputBox.innerHTML);
    }
    else if(lastOp == '-'){
        outputBox.innerHTML = parseFloat(storage) - parseFloat(outputBox.innerHTML);
    }
    else if(lastOp == '*'){
        outputBox.innerHTML = parseFloat(outputBox.innerHTML) * parseFloat(storage);
    }
}

