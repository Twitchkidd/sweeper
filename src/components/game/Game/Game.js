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

	const winLoseCheck = id => {
		// if (mines.includes(id)) {
		// 	setResult('lose');
		// }
		// console.log(cells.length - mines.length === open.length);
		// if (cells.length - mines.length === open.length) {
		// 	setResult('win');
		// }
		if (mines.includes(id)) {
			return 'lose';
		} else if (cells.length - mines.length - 1 === open.length) {
			return 'win';
		} else {
			return '';
		}
	};

	const adjCells = i => cells[i].adjacentCells;

	const getSpread = id => {
		// 1. check adjacent cells for blanks
		// 2. add all adjacent to toOpen list
		// 3. if any blanks, check new adjacencies for blanks
		// 4. add all new adjacencies for blanks
		// Step 3., 4. ad infinitum
		// 5. return toOpen list

		let toOpen = [id];
	};

	const handleOpenCell = e => {
		// add openCell to willOpen list
		// check for win/lose
		// if blank, add adjacent cells to willOpen list
		//   if blank, add adjacent cells to willOpen list
		// check for win

		const id = Number(e.target.id);
		const willOpen = [id];

		if (winLoseCheck(id) === 'lose') {
			setOpen(prev => [...prev, id], setResult('lose'));
		} else if (winLoseCheck(id) === 'win') {
			console.log('yaaaay!');
		} else if (cells[id].adjacentMines === 0) {
			willOpen.push(getSpread(id));
		} else {
			setOpen(prev => [...prev, id]);
		}

		// This is the wrong way, it would be simpler to check spread and then win/lose
	};

	const handleNewGame = () => {
		setOpen([]);
		setResult(null);
		setBoard(seed(difficulty));
	};

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
