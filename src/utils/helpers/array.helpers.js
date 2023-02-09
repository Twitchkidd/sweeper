// export const range = n => [...Array(n).keys()].map(n => n + 1);

// Fisher-Yates
export const shuffle = array => {
	var i = array.length,
		j = 0,
		temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));

		// swap randomly chosen element with current element
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
};

export const arrayEquiv = (a1, a2) =>
	a1.length !== a2.length
		? false
		: a1.filter((x, i) => x !== a2[i]).length
		? false
		: true;

// console.log(arrayEquiv([1, 2, 3, 4], [1, 2, 3, 4, 5]));
// console.log(arrayEquiv([1, 2, 3, 4, 6], [1, 2, 3, 4, 5]));
// console.log(arrayEquiv([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
