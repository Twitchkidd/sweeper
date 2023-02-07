import { shuffle } from './array.helpers';

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

const initializeReturn = ({ high, minesNum, wide }) => ({
	cells: [...Array(wide * high).keys()],
	high,
	minesNum,
	wide,
});

const spawnMines = ({ cells, high, minesNum, wide }) => {
	const mines = shuffle(cells.slice()).slice(0, minesNum);
	return {
		cells,
		high,
		mines,
		wide,
	};
};

const determineAdjacencies = ({ cells, high, mines, wide }) => {
	const cellsCoordsMines = cells.map(c => ({
		col: (c + 1) % wide === 0 ? wide : (c + 1) % wide,
		row: Math.ceil((c + 1) / wide),
		mine: mines.includes(c),
	}));
	const indexForCoords = coords =>
		cellsCoordsMines.findIndex(
			el => el.col === coords[0] && el.row === coords[1]
		);
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
				[col - 1, 1],
				[col + 1, 1],
				[col - 1, 2],
				[col, 2],
				[col + 1, 2],
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
				[col - 1, high - 1],
				[col, high - 1],
				[col + 1, high - 1],
				[col - 1, high],
				[col + 1, high],
			];
		} else if (l === 'leftEdge') {
			return [
				[1, row - 1],
				[2, row - 1],
				[2, row],
				[1, row + 1],
				[2, row + 1],
			];
		} else if (l === 'rightEdge') {
			return [
				[wide - 1, row - 1],
				[wide, row - 1],
				[wide - 1, row],
				[wide - 1, row + 1],
				[wide, row + 1],
			];
		} else if (l === 'center') {
			return [
				[col - 1, row - 1],
				[col, row - 1],
				[col + 1, row - 1],
				[col - 1, row],
				[col + 1, row],
				[col - 1, row + 1],
				[col, row + 1],
				[col + 1, row + 1],
			];
		} else {
			throw new Error('Bad location!');
		}
	};
	const cellsAdjacenciesMines = cellsCoordsMines.map(c => ({
		mine: c.mine,
		adjacentCells: adjacencies(c.col, c.row).map(coordsArray =>
			indexForCoords(coordsArray)
		),
	}));
	const cellsAdjacenciesMinesFull = cellsAdjacenciesMines.map(c => ({
		...c,
		adjacentMines: c.adjacentCells.filter(i => mines.includes(i)).length,
	}));
	return { cells: cellsAdjacenciesMinesFull, mines, wide };
};

export const seed = diff =>
	determineAdjacencies(spawnMines(initializeReturn(sizeAndDensity(diff))));
