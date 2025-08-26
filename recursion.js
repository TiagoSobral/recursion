#!/usr/bin/node

function fibs(number) {
	let array = [];
	for (let i = 0; i < number; i++) {
		if (i < 2) {
			array.push(i);
		} else {
			let fib = array[i - 1] + array[i - 2];
			array.push(fib);
		}
	}

	console.log(array);
}

function fibsRec(number) {
	if (number === 1) {
		return [0];
	} else if (number === 2) {
		return [0, 1];
	} else {
		let fibo = fibsRec(number - 1);
		let next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
		fibo.push(next);
		return fibo;
	}
}

console.log(fibsRec(8));
