import {
	numbersBtn,
	operatorsBtn,
	equalBtn,
	allClearBtn,
	result,
	firstNumber,
	operator,
	secondNumber,
} from './const.js';

import { add, div, sub, multi, rac, power, percentage } from './calculators.js';

result.innerHTML = 0;

let firstNumberArr = [];
let secondNumberArr = [];

numbersBtn.forEach((item) => {
	item.addEventListener('click', () => {
		if (operator.innerHTML === '' && Number(result.innerHTML) === 0) {
			firstNumber.innerHTML += item.innerHTML;
			firstNumberArr.push(item.innerHTML);
		} else if (Number(result.innerHTML) === 0) {
			secondNumber.innerHTML += item.innerHTML;
			secondNumberArr.push(item.innerHTML);
		}
	});
});

operatorsBtn.forEach((item) => {
	item.addEventListener('click', () => {
		if (Number(result.innerHTML) === 0) {
			operator.innerHTML = item.innerHTML;
		}
	});
});

allClearBtn.addEventListener('click', () => {
	firstNumberArr = [];
	secondNumberArr = [];
	firstNumber.innerHTML = '';
	operator.innerHTML = '';
	secondNumber.innerHTML = '';
	result.innerHTML = 0;
});

equalBtn.addEventListener('click', () => {
	let num1 = Number(firstNumberArr.join(''));
	let num2 = Number(secondNumberArr.join(''));
	if (operator.innerHTML === '+') {
		result.innerHTML = add(num1, num2);
	}
	if (operator.innerHTML === '-') {
		result.innerHTML = sub(num1, num2);
	}
	if (operator.innerHTML === '/') {
		result.innerHTML = div(num1, num2);
	}
	if (operator.innerHTML === 'x') {
		result.innerHTML = multi(num1, num2);
	}
	if (operator.innerHTML === '√') {
		result.innerHTML = rac(num1);
	}
	if (operator.innerHTML === 'x²') {
		result.innerHTML = power(num1, num2);
	}
	if (operator.innerHTML === '%') {
		result.innerHTML = percentage(num1, num2);
	}
});
