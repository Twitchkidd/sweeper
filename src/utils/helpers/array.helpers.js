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

export const arrayEquiv = (a1, a2) => {
	if (a1.length !== a2.length) return false;
	const sortA2 = a2.slice().sort();
	return a1
		.sort()
		.slice()
		.every((v, i) => v === sortA2[i]);
};
