import { useState } from 'react';
import GameBar from '../GameBar/GameBar';
import Board from '../../layout/game/Board/Board';
import Cell from '../Cell/Cell';
import { sizeAndDensity, seedBoard } from '../../../utils/helpers/game.helpers';

const Game = ({ difficulty }) => {
	const [cells, setCells] = useState(seedBoard(difficulty));
	const { wide, high, mines } = sizeAndDensity(difficulty);
	// cell: id: 1-X, col: num, row: num, mine: bool
	// adjacentCells: [id, id, id], flag: bool, open: bool, adjacentMines?: num
	const handleOpenCell = e => {
		const id = new Number(e.target.id).valueOf();
		setCells(prev => {
			let next = prev;
			next[id - 1].open = !prev[id - 1].open;
			return next.slice();
		});
	};
	return (
		<>
			<GameBar />
			<Board wide={wide}>
				{cells.map(cell => (
					<Cell
						id={cell.id}
						key={cell.id}
						type={
							cell.mine
								? 'mine'
								: cell.adjacentMines
								? `${cell.adjacentMines}`
								: 'blank'
						}
						open={cell.open}
						openCell={handleOpenCell}
					/>
				))}
			</Board>
		</>
	);
};

export default Game;
