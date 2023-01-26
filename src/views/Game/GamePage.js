import Window from '../../components/layout/game/Window/Window';
import TitleBar from '../../components/game/TitleBar/TitleBar';
import MenuBar from '../../components/game/MenuBar/MenuBar';
import Game from '../../components/game/Game/Game';

const GamePage = ({ difficulty, backToMenu }) => {
	return (
		<Window>
			<TitleBar backToMenu={backToMenu} />
			<MenuBar />
			<Game difficulty={difficulty} />
		</Window>
	);
};

export default GamePage;
