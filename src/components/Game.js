import styled from 'styled-components';
import { range } from '../utils/lib';

const Board = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: ${props => props.wide * 41}px;
	background: #888;
`;

const Cell = styled.div`
	width: 41px;
	height: 41px;
	background: #888;
	border: 1px inset #555;
`;

const Game = ({ difficulty }) => {
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
	cells = cells.map(c => ({
		row: Math.ceil(c / wide),
		col: c === wide ? wide : c % wide,
		mine: minedCells.includes(c),
	}));
	console.log(cells);
	return (
		<Board wide={wide} high={high}>
			{/* {range(high).map(h => (
				<div key={h}>
					{range(wide).map(w => (
						<Cell key={[h, w]} />
					))}
				</div>
			))} */}
		</Board>
	);
};

export default Game;
