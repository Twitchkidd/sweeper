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
	return { wide, high, minesNum: mines };
};

const initializeReturn = ({ wide, high, minesNum }) => ({
	cells: [...Array(wide * high)],
	minesNum,
	wide,
});

// https://stackoverflow.com/a/36756480
const randomBoolean = () => Math.random() < 0.5;
// We might just go for the long approach here, didn't find an answer quickly

const placeMines = ({ cellsArray, minesNum, wide }) => {
	let minedCells = [];
	let potential = cells.slice();
	for (let i = 1; i <= mines; i++) {
		const nextIndex = Math.floor(Math.random() * potential.length);
		minedCells.push(potential[nextIndex]);
		potential.splice(nextIndex, 1);
	}
	return {
		minesNum,
		wide,
		cellsWithMines: mined,
	};
};

export const seed = diff =>
	addExports(
		determineAdjacencies(placeMines(initializeReturn(sizeAndDensity(diff))))
	);

// addExports: anything aggregate, or 'helper' Mz. Helper Function

export const seedBoard = difficulty => {
	const { wide, high, minesNum } = sizeAndDensity(difficulty);
	// Create the initial array of cells
	let cells = range(wide * high);
	// Decide the mined cells
	let minedCells = [];
	let potential = cells.slice();
	for (let i = 1; i <= mines; i++) {
		const nextIndex = Math.floor(Math.random() * potential.length);
		minedCells.push(potential[nextIndex]);
		potential.splice(nextIndex, 1);
	}
	// Cells as objects with ids, coordinates, and if it's mined
	cells = cells.map(c => ({
		id: c,
		row: Math.ceil(c / wide),
		col: c % wide === 0 ? wide : c % wide,
		mine: minedCells.includes(c),
	}));
	// Adjacent cells are determined by considering the location of the
	// cell on the board, then a set of coordinates for adjacent cells
	// can be determined, and then we can set the property on the cell
	// as an array of ids with the helper function.
	const idForCoords = (col, row) =>
		cells.filter(c => c.col === col && c.row === row).map(c => c.id)[0];
	// Coordinates are [col, row]
	let adj = [];
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
					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
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
					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
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
					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
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
					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
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
					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
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
					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
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
				adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
			};
			return;
		} else if (c.col === wide) {
			adj = [
				[wide - 1, c.row - 1],
				[wide, c.row - 1],
				[wide - 1, c.row],
				[wide - 1, c.row + 1],
				[wide, c.row + 1],
			];
			cells[i] = {
				...c,
				adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
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
			cells[i] = {
				...c,
				adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
			};
			return;
		}
	});
	// cell: id: 1-X, col: num, row: num, mine: bool, adj: [id, id, id]
	// Make the adjacent cells field more explicit
	// Make an adjacent mines field
	// While we're at it a flagged field
	// And opened
	cells.forEach((c, i) => {
		if (c.mine) {
			cells[i] = {
				...c,
				flag: false,
				open: false,
			};
		} else {
			cells[i] = {
				...c,
				flag: false,
				open: false,
				adjacentMines: c.adjacentCells.filter(id => cells[id - 1].mine).length,
			};
		}
	});
	// Oh, no I see how this could quickly go wrong, if the function gets
	// moved, the array it's working on has no checks it'll be the same.
	// Process.
	return cells;
};
