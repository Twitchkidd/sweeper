import { useState } from 'react';
import GameBar from '../GameBar/GameBar';
import Board from '../../layout/game/Board/Board';
import Cell from '../Cell/Cell';
import { sizeAndDensity, seedBoard } from '../../../utils/helpers/game.helpers';

const Game = ({ difficulty }) => {
	const [cells, setCells] = useState(seedBoard(difficulty));
	const { wide, high, mines } = sizeAndDensity(difficulty);
	// cell: id: 1-X, col: num, row: num, mine: bool, adj: [id, id, id]
	return (
		<>
			<GameBar />
			<Board wide={wide}>
				{cells.map(cell => (
					<Cell key={cell.id} />
				))}
			</Board>
		</>
	);
};

export default Game;
