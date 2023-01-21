import Window from '../../components/layout/game/Window/Window';
import TitleBar from '../../components/game/TitleBar/TitleBar';
import MenuBar from '../../components/game/MenuBar/MenuBar';
import GameBar from '../../components/game/GameBar/GameBar';
import Board from '../../components/layout/game/Board/Board';
import Cell from '../../components/game/Cell/Cell';
import { sizeAndDensity } from '../../utils/helpers/game.helpers';

const GamePage = ({ difficulty, backToMenu }) => {
	const { wide, high, mines } = sizeAndDensity(difficulty);
	// I should take the higher level things and make them gamepage's responsibility
	// and let the board handle the cells, and pass back up what gamebar needs
	// okay no wait, gamebar and board are both game.
	// Naming things is hard.
	return (
		<Window>
			<TitleBar backToMenu={backToMenu} />
			<MenuBar />
			<GameBar />
			<Board wide={wide}>
				<Cell />
			</Board>
		</Window>
	);
};

export default GamePage;

// window
// title bar
// logo?
// title
// x - back nav
// menu bar
// game/help tabs
// game bar
// mine count
// smiley face
// timer
// board
// cells
