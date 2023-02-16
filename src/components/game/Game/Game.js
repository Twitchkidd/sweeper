import { useState, useEffect } from 'react';
import { seed } from '../../../utils/helpers/game.helpers';
import GameBar from '../GameBar/GameBar';
import Board from '../../layout/game/Board/Board';
import Cell from '../Cell/Cell';

const Game = ({ difficulty }) => {
	const seedBoard = () => seed(difficulty);
	const [board, setBoard] = useState(seedBoard);
	const [flags, setFlags] = useState([]);
	const [open, setOpen] = useState([]);
	const [exploded, setExploded] = useState(null);
	const [revealed, setRevealed] = useState([]);
	const [result, setResult] = useState(null);
	const { cells, mines, wide } = board;

	const handleNewGame = () => {
		setBoard(seed(difficulty));
		setFlags([]);
		setExploded(null);
		setOpen([]);
		setRevealed([]);
		setResult(null);
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
			setExploded(id);
			setResult('lose');
			setRevealed(cells.map((c, i) => i).filter((c, i) => !open.includes(i)));
		} else {
			setOpen(prev => {
				return [...prev, ...getCellsToOpen(id)];
			});
		}
	};

	const winCheck = () => {
		if (cells.length - mines.length === open.length) {
			setResult('win');
		}
	};

	useEffect(() => {
		winCheck();
	}, [open]);

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
						exploded={exploded === i}
						revealed={revealed.includes(i)}
					/>
				))}
			</Board>
		</>
	);
};

export default Game;
