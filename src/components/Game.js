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
	// lol this is bad, redo
	// yay though, you wrote some bad code! better than no code!
	return (
		<Board wide={wide} high={high}>
			{range(high).map(h => (
				<div key={h}>
					{range(wide).map(w => (
						<Cell key={[h, w]} />
					))}
				</div>
			))}
		</Board>
	);
};

export default Game;
