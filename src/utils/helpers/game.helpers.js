import { ServerStyleSheet } from 'styled-components';

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
	cells: [...Array(wide * high).keys()],
	high,
	minesNum,
	wide,
});

const spawnMines = ({ cells, high, minesNum, wide }) => {
	let mines = [];
	let potential = cells.slice();
	for (let i = 0; i < minesNum; i++) {
		const nextIndex = Math.floor(Math.random() * potential.length);
		mines.push(nextIndex);
		potential.splice(nextIndex, 1);
	}
	// This gets us the right number, right? Check
	console.log(mines.length, minesNum);
	return {
		cells,
		high,
		mines,
		wide,
	};
};

const determineAdjacencies = ({ cells, high, mines, wide }) => {
	const cellsCoordsMines = cells.map(c => ({
		row: Math.ceil(c + 1 / wide),
		col: c + (1 % wide) === 0 ? wide : c + (1 % wide),
		mine: mines.includes(c),
	}));
	const indexForCoords = (col, row) =>
		cellsCoordsMines.forEach((c, i) => {
			if (c.col === col && c.row === row) {
				return i;
			}
		});
	const location = (col, row) => {
		if (row === 1) {
			if (col === 1) {
				return 'topLeft';
			} else if (col === wide) {
				return 'topRight';
			} else {
				return 'topEdge';
			}
		} else if (row === high) {
			if (col === 1) {
				return 'bottomLeft';
			} else if (col === wide) {
				return 'bottomRight';
			} else {
				return 'bottomEdge';
			}
		} else if (col === 1) {
			return 'leftEdge';
		} else if (col === wide) {
			return 'rightEdge';
		} else {
			return 'center';
		}
	};
	const adjacencies = (col, row) => {
		const l = location(col, row);
		if (l === 'topLeft') {
			return [
				[1, 2],
				[2, 1],
				[2, 2],
			];
		} else if (l === 'topRight') {
			return [
				[wide - 1, 1],
				[wide - 1, 2],
				[wide, 2],
			];
		} else if (l === 'topEdge') {
			return [
				[c.col - 1, 1],
				[c.col + 1, 1],
				[c.col - 1, 2],
				[c.col, 2],
				[c.col + 1, 2],
			];
		} else if (l === 'bottomLeft') {
			return [
				[1, high - 1],
				[2, high - 1],
				[2, high],
			];
		} else if (l === 'bottomRight') {
			return [
				[wide - 1, high - 1],
				[wide, high - 1],
				[wide - 1, high],
			];
		} else if (l === 'bottomEdge') {
			return [
				[c.col - 1, high - 1],
				[c.col, high - 1],
				[c.col + 1, high - 1],
				[c.col - 1, high],
				[c.col + 1, high],
			];
		} else if (l === 'leftEdge') {
			return [
				[1, c.row - 1],
				[2, c.row - 1],
				[2, c.row],
				[1, c.row + 1],
				[2, c.row + 1],
			];
		} else if (l === 'rightEdge') {
			return [
				[wide - 1, c.row - 1],
				[wide, c.row - 1],
				[wide - 1, c.row],
				[wide - 1, c.row + 1],
				[wide, c.row + 1],
			];
		} else if (l === 'center') {
			return [
				[c.col - 1, c.row - 1],
				[c.col, c.row - 1],
				[c.col + 1, c.row - 1],
				[c.col - 1, c.row],
				[c.col + 1, c.row],
				[c.col - 1, c.row + 1],
				[c.col, c.row + 1],
				[c.col + 1, c.row + 1],
			];
		} else {
			throw new Error('Bad location!');
		}
	};
	const cellsAdjacenciesMines = cellsCoordsMines.map(c => ({
		mine: c.mine,
		adjacentCells: adjacencies(c.col, c.row).map(indexForCoords),
	}));
	return { cells: cellsAdjacenciesMines, mines, wide };
};

const formatExport = ({ cells, mines, wide }) => ({
	cells: cells.map(c => (c.mine ? ['mine'] : [...c.adjacentCells])),
	mines,
	minesNum: mines.length,
	wide,
});

export const seed = diff =>
	formatExport(
		determineAdjacencies(spawnMines(initializeReturn(sizeAndDensity(diff))))
	);

// I legit forgot what I was supposed to be coding by the end of the sesh, this should be easier to debug and read than the other one, I just need to go back over my notes and clear up what's going where

// Adjacent cells are determined by considering the location of the
// cell on the board, then a set of coordinates for adjacent cells
// can be determined, and then we can set the property on the cell
// as an array of ids with the helper function.
// 	const idForCoords = (col, row) =>
// 		cells.filter(c => c.col === col && c.row === row).map(c => c.id)[0];
// 	// Coordinates are [col, row]
// 	let adj = [];
// 	cells.forEach((c, i) => {
// 		if (c.row === 1) {
// 			if (c.col === 1) {
// 				adj = [
// 					[1, 2],
// 					[2, 1],
// 					[2, 2], //
// 				];
// 				cells[i] = {
// 					...c,
// 					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 				};
// 				return;
// 			} else if (c.col === wide) {
// 				adj = [
// 					[wide - 1, 1],
// 					[wide - 1, 2],
// 					[wide, 2], //
// 				];
// 				cells[i] = {
// 					...c,
// 					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 				};
// 				return;
// 			} else {
// 				adj = [
// 					[c.col - 1, 1],
// 					[c.col + 1, 1],
// 					[c.col - 1, 2],
// 					[c.col, 2],
// 					[c.col + 1, 2], //
// 				];
// 				cells[i] = {
// 					...c,
// 					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 				};
// 				return;
// 			}
// 		} else if (c.row === high) {
// 			if (c.col === 1) {
// 				adj = [
// 					[1, high - 1],
// 					[2, high - 1],
// 					[2, high], //
// 				];
// 				cells[i] = {
// 					...c,
// 					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 				};
// 				return;
// 			} else if (c.col === wide) {
// 				adj = [
// 					[wide - 1, high - 1],
// 					[wide, high - 1],
// 					[wide - 1, high], //
// 				];
// 				cells[i] = {
// 					...c,
// 					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 				};
// 				return;
// 			} else {
// 				adj = [
// 					[c.col - 1, high - 1],
// 					[c.col, high - 1],
// 					[c.col + 1, high - 1],
// 					[c.col - 1, high],
// 					[c.col + 1, high], //
// 				];
// 				cells[i] = {
// 					...c,
// 					adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 				};
// 				return;
// 			}
// 		} else if (c.col === 1) {
// 			adj = [
// 				[1, c.row - 1],
// 				[2, c.row - 1],
// 				[2, c.row],
// 				[1, c.row + 1],
// 				[2, c.row + 1], //
// 			];
// 			cells[i] = {
// 				...c,
// 				adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 			};
// 			return;
// 		} else if (c.col === wide) {
// 			adj = [
// 				[wide - 1, c.row - 1],
// 				[wide, c.row - 1],
// 				[wide - 1, c.row],
// 				[wide - 1, c.row + 1],
// 				[wide, c.row + 1], //
// 			];
// 			cells[i] = {
// 				...c,
// 				adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 			};
// 			return;
// 		} else {
// 			adj = [
// 				[c.col - 1, c.row - 1],
// 				[c.col, c.row - 1],
// 				[c.col + 1, c.row - 1],
// 				[c.col - 1, c.row],
// 				[c.col + 1, c.row],
// 				[c.col - 1, c.row + 1],
// 				[c.col, c.row + 1],
// 				[c.col + 1, c.row + 1],
// 			];
// 			cells[i] = {
// 				...c,
// 				adjacentCells: adj.map(coords => idForCoords(coords[0], coords[1])),
// 			};
// 			return;
// 		}
// 	});
// 	// cell: id: 1-X, col: num, row: num, mine: bool, adj: [id, id, id]
// 	// Make the adjacent cells field more explicit
// 	// Make an adjacent mines field
// 	// While we're at it a flagged field
// 	// And opened
// 	cells.forEach((c, i) => {
// 		if (c.mine) {
// 			cells[i] = {
// 				...c,
// 				flag: false,
// 				open: false,
// 			};
// 		} else {
// 			cells[i] = {
// 				...c,
// 				flag: false,
// 				open: false,
// 				adjacentMines: c.adjacentCells.filter(id => cells[id - 1].mine).length,
// 			};
// 		}
// 	});
// 	// Oh, no I see how this could quickly go wrong, if the function gets
// 	// moved, the array it's working on has no checks it'll be the same.
// 	// Process.
// 	return cells;
// };
