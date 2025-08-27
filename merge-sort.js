#!/usr/bin/node

function mergeSort(array) {
	let mid = Math.floor(array.length / 2 - 1);
	if (array.length === 1) {
		return array;
	} else if (array.length < 1) {
		return [];
	} else {
		/* separates the array into left and right. 
		 slice doesn't include end so mid+1 */
		const left = array.slice(0, mid + 1);
		const right = array.slice(mid + 1);
		const arrayLeft = mergeSort(left);
		const arrayRight = mergeSort(right);
		let sortedArray = [];

		// compare values for each array and the lower gets pushed to sortedArray.
		let indexL = 0;
		let indexR = 0;
		while (indexL < arrayLeft.length && indexR < arrayRight.length) {
			if (arrayLeft[indexL] < arrayRight[indexR]) {
				sortedArray.push(arrayLeft[indexL]);
				// once a value is pushed to the new array, the index moves up and starts from the next element.
				indexL += 1;
			} else {
				sortedArray.push(arrayRight[indexR]);
				indexR += 1;
			}
		}
		/*  whenever there are missing elements in any of the two arrays, they will be copied to the new array.
		it will be done using the slice from where the index left of to the end */
		if (indexL < indexR) {
			return sortedArray.concat(arrayLeft.slice(indexL));
		}
		return sortedArray.concat(arrayRight.slice(indexR));
	}
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
