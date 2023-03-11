const numbersBtn = [
	document.getElementById('number_0'),
	document.getElementById('number_1'),
	document.getElementById('number_2'),
	document.getElementById('number_3'),
	document.getElementById('number_4'),
	document.getElementById('number_5'),
	document.getElementById('number_6'),
	document.getElementById('number_7'),
	document.getElementById('number_8'),
	document.getElementById('number_9'),
];

const operatorsBtn = [
	document.getElementById('add'),
	document.getElementById('racine'),
	document.getElementById('sub'),
	document.getElementById('puissance'),
	document.getElementById('div'),
	document.getElementById('percentage'),
	document.getElementById('multi'),
];

const equalBtn = document.getElementById('equal');
const allClearBtn = document.getElementById('all_clear');
const result = document.getElementById('result');
const firstNumber = document.getElementById('first_number');
const operator = document.getElementById('operator');
const secondNumber = document.getElementById('second_number');

export {
	numbersBtn,
	operatorsBtn,
	equalBtn,
	allClearBtn,
	result,
	firstNumber,
	operator,
	secondNumber,
};
