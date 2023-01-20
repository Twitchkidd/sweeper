import Window from '../../components/layout/game/Window/Window';
import TitleBar from '../../components/game/TitleBar/TitleBar';
import MenuBar from '../../components/game/MenuBar/MenuBar';
import GameBar from '../../components/game/GameBar/GameBar';
import Board from '../../components/layout/game/Board/Board';
import Cell from '../../components/game/Cell/Cell';

// const GamePage = ({ difficulty }) => {
const GamePage = () => {
	return (
		<Window>
			<TitleBar />
			<MenuBar />
			<GameBar />
			<Board>
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
