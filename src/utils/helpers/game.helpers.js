import { range } from './array.helpers';

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
		default:
			throw new Error('No difficulty set!');
	}
	return { wide, high, mines };
};

export const seedBoard = difficulty => {
	const { wide, high, mines } = sizeAndDensity(difficulty);
	// Create an initial array 1 through the number of cells
	let cells = range(wide * high);
	// Create an array of cells with mines
	let minedCells = [];
	let potential = cells.slice();
	for (let i = 1; i <= mines; i++) {
		const nextIndex = Math.floor(Math.random() * potential.length);
		minedCells.push(potential[nextIndex]);
		potential.splice(nextIndex, 1);
	}
	// Construct cells as objects with coordinates, and if it's mined
	cells = cells.map((c, i) => ({
		id: i + 1,
		row: Math.ceil(c / wide),
		col: c % wide === 0 ? wide : c % wide,
		mine: minedCells.includes(c),
	}));
	// Iterate through cells and populate with adjacent mines for unmined cells
	const idForCoords = (col, row) =>
		cells.filter(c => c.col === col && c.row === row).map(c => c.id)[0];
	// Coordinates are [col, row]
	let adj = []; // adjacent
	cells.forEach((c, i) => {
		if (c.row === 1) {
			if (c.col === 1) {
				adj = [
					[1, 2],
					[2, 1],
					[2, 2],
				];
				cells[i] = {
					...c,
					adj: adj.map(coords => idForCoords(coords[0], coords[1])),
				};
				return;
			} else if (c.col === wide) {
				adj = [
					[wide - 1, 1],
					[wide - 1, 2],
					[wide, 2],
				];
				cells[i] = {
					...c,
					adj: adj.map(coords => idForCoords(coords[0], coords[1])),
				};
				return;
			} else {
				adj = [
					[c.col - 1, 1],
					[c.col + 1, 1],
					[c.col - 1, 2],
					[c.col, 2],
					[c.col + 1, 2],
				];
				cells[i] = {
					...c,
					adj: adj.map(coords => idForCoords(coords[0], coords[1])),
				};
				return;
			}
		} else if (c.row === high) {
			if (c.col === 1) {
				adj = [
					[1, high - 1],
					[2, high - 1],
					[2, high],
				];
				cells[i] = {
					...c,
					adj: adj.map(coords => idForCoords(coords[0], coords[1])),
				};
				return;
			} else if (c.col === wide) {
				adj = [
					[wide - 1, high - 1],
					[wide, high - 1],
					[wide - 1, high],
				];
				cells[i] = {
					...c,
					adj: adj.map(coords => idForCoords(coords[0], coords[1])),
				};
				return;
			} else {
				adj = [
					[c.col - 1, high - 1],
					[c.col, high - 1],
					[c.col + 1, high - 1],
					[c.col - 1, high],
					[c.col + 1, high],
				];
				cells[i] = {
					...c,
					adj: adj.map(coords => idForCoords(coords[0], coords[1])),
				};
				return;
			}
		} else if (c.col === 1) {
			adj = [
				[1, c.row - 1],
				[2, c.row - 1],
				[2, c.row],
				[1, c.row + 1],
				[2, c.row + 1],
			];
			cells[i] = {
				...c,
				adj: adj.map(coords => idForCoords(coords[0], coords[1])),
			};
			return;
		} else if (c.col === wide) {
			adj = [
				[c.col - 1, wide - 1],
				[c.col - 1, wide],
				[c.col, wide - 1],
				[c.col + 1, wide - 1],
				[c.col + 1, wide],
			];
			cells[i] = {
				...c,
				adj: adj.map(coords => idForCoords(coords[0], coords[1])),
			};
			return;
		} else {
			adj = [
				[c.col - 1, c.row - 1],
				[c.col, c.row - 1],
				[c.col + 1, c.row - 1],
				[c.col - 1, c.row],
				[c.col + 1, c.row],
				[c.col - 1, c.row + 1],
				[c.col, c.row + 1],
				[c.col + 1, c.row + 1],
			];
			c[i] = {
				...c,
				adj: adj.map(coords => idForCoords(coords[0], coords[1])),
			};
			return;
		}
	});
	return cells;
};
