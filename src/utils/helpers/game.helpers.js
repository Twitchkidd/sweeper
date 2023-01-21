export const sizeAndDensity = difficulty => {
	let wide, high, mines;
	switch (difficulty) {
		case 'beginner':
			wide = 9;
			high = 9;
			mines = 10;
			break;
		case 'intermediate':
			wide = 16;
			high = 16;
			mines = 40;
			break;
		case 'expert':
			wide = 30;
			high = 16;
			mines = 99;
			break;
		case 'default':
			throw new Error('No difficulty set!');
	}
	return { wide, high, mines };
};
