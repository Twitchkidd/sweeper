import { useState, useEffect } from 'react';
import { seed } from '../../../utils/helpers/game.helpers';
import GameBar from '../GameBar/GameBar';
import Board from '../../layout/game/Board/Board';
import Cell from '../Cell/Cell';
import mine from '../../../assets/svg/mine.svg';
import flag from '../../../assets/svg/flag.svg';

const Game = ({ difficulty }) => {
	const seedBoard = () => seed(difficulty);
	const [board, setBoard] = useState(seedBoard);
	const [flags, setFlags] = useState([]);
	const [open, setOpen] = useState([]);
	const [revealed, setRevealed] = useState([]);
	const [result, setResult] = useState(null);
	const { adjacencies, cells, mines, wide } = board;

	return (
		<>
			<GameBar flags={flags.length} mines={mines} result={result} />
			<Board wide={wide}>
				{cells.map((c, i) => (
					<Cell key={i} id={i} />
				))}
			</Board>
		</>
	);
};

// const [cells, setCells] = useState(seedBoard(difficulty));
// const { wide, high, mines } = sizeAndDensity(difficulty);
// cell: id: 1-X, col: num, row: num, mine: bool
// adjacentCells: [id, id, id], flag: bool, open: bool, adjacentMines?: num
// const handleOpenCell = e => {
// 	const id = new Number(e.target.id).valueOf();
// 	setCells(prev => {
// 		let next = prev;
// 		next[id - 1].open = !prev[id - 1].open;
// 		return next.slice();
// 	});
// };
// return (
// 	<>
// 		<GameBar />
// 		<Board wide={wide}>
// 			{cells.map(cell => (
// 				<Cell
// 					id={cell.id}
// 					key={cell.id}
// 					type={
// 						cell.mine
// 							? 'mine'
// 							: cell.adjacentMines
// 							? `${cell.adjacentMines}`
// 							: 'blank'
// 					}
// 					open={cell.open}
// 					openCell={handleOpenCell}
// 				/>
// 			))}
// 		</Board>
// 	// 	</>
// 	);
// };

export default Game;
