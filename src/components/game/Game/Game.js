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
	// const [revealed, setRevealed] = useState([]);
	const [result, setResult] = useState(null);
	const { cells, mines, wide } = board;

	const handleOpenCell = e => {
		const id = Number(e.target.id);
		setOpen(prev => [...prev, id]);
	};

	return (
		<>
			<GameBar flags={flags.length} mines={mines.length} result={result} />
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
