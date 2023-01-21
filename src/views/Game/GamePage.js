import Window from '../../components/layout/game/Window/Window';
import TitleBar from '../../components/game/TitleBar/TitleBar';
import MenuBar from '../../components/game/MenuBar/MenuBar';
import Game from '../../components/game/Game/Game';

const GamePage = ({ difficulty, backToMenu }) => {
	// I should take the higher level things and make them gamepage's responsibility
	// and let the board handle the cells, and pass back up what gamebar needs
	// okay no wait, gamebar and board are both game.
	// Naming things is hard.
	return (
		<Window>
			<TitleBar backToMenu={backToMenu} />
			<MenuBar />
			<Game difficulty={difficulty} />
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
