function addItems(num) {
    var input = document.getElementById("input");
    input.value += num;
}

function clearInput() {
    var clear = document.getElementById("input");
    clear.value = ("");
}

function piValue() {
    var input = document.getElementById("input");
    var Pi = Math.PI;
    input.value += "+" + Pi;
}

function finalResult(num) {
    var input = document.getElementById("input")
    input.value = eval(input.value);
}

function percentageBtn() {
    var input = document.getElementById("input");
    input.value = input.value * (input.value / 100);
}

function squareBtn() {
    var input = document.getElementById("input");
    input.value = input.value * input.value;
}

function divideByOne() {
    var input = document.getElementById("input");
    input.value = 1 / input.value;
}

function squareRoot(msg) {
    var input = document.getElementById("input");
    if (input.value = Math.sqrt(input.value)) {
        input.value = input.value;
    } else {
        input.value = msg;
    }
}

function plusMinus() {
    var input = document.getElementById("input");
    if (input.value === "-") {
        input.value = +input.value;
    } else {
        input.value = -input.value;
    }
}

function removeItem() {
    var input = document.getElementById("input");
    input.value = (input.value).substring(0, (input.value).length - 1)
}