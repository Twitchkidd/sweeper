import { useState } from 'react';
import { seed } from '../../../utils/helpers/game.helpers';
import GameBar from '../GameBar/GameBar';
import Board from '../../layout/game/Board/Board';
import Cell from '../Cell/Cell';

const Game = ({ difficulty }) => {
	const seedBoard = () => seed(difficulty);
	const [board, setBoard] = useState(seedBoard);
	const [flags, setFlags] = useState([]);
	const [open, setOpen] = useState([]);
	const [revealed, setRevealed] = useState([]);
	const [result, setResult] = useState(null);
	const { cells, mines, wide } = board;

	const handleNewGame = () => {
		setOpen([]);
		setResult(null);
		setBoard(seed(difficulty));
	};

	const isBlank = id => cells[id].adjacentMines === 0;

	const getCellsToOpen = id => {
		if (!isBlank(id)) return [id];
		const spread = (cur, acc = []) => {
			let newAcc = [...acc];
			let newCur = [];
			for (const cell of cur) {
				if (!newAcc.includes(cell)) {
					newAcc.push(cell);
				}
			}
			for (const cell of cur) {
				for (const adj of cells[cell].adjacentCells) {
					if (!newAcc.includes(adj)) {
						newAcc.push(adj);
						if (isBlank(adj)) {
							newCur.push(adj);
						}
					}
				}
			}
			if (newCur.length > 0) {
				return spread(newCur, newAcc);
			} else {
				return newAcc;
			}
		};
		return spread([id]);
	};

	const handleOpenCell = e => {
		const id = Number(e.target.id);
		if (cells[id].mine) {
			setResult('lose');
		} else {
			setOpen(prev => [...prev, getCellsToOpen(id)], winCheck());
		}
	};

	const winCheck = () => console.log('yaaay');

	// const winLoseCheck = id => {
	// 	if (mines.includes(id)) {
	// 		return 'lose';
	// 	} else if (cells.length - mines.length - 1 === open.length) {
	// 		return 'win';
	// 	} else {
	// 		return '';
	// 	}
	// };

	return (
		<>
			<GameBar
				flags={flags.length}
				mines={mines.length}
				result={result}
				newGame={handleNewGame}
			/>
			<Board wide={wide}>
				{cells.map((c, i) => (
					<Cell
						key={i}
						id={i}
						type={c.mine ? 'mine' : c.adjacentMines}
						open={open.includes(i)}
						openCell={handleOpenCell}
					/>
				))}
			</Board>
		</>
	);
};

export default Game;
