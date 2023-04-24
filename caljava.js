
let input = document.getElementById('result');

function insert(num) {
	input.value += num;
}

function clearDisplay() {
	input.value = '';
}

function backspace() {
	input.value = input.value.slice(0, -1);
}

function calculate() {
	input.value = eval(input.value);
}
