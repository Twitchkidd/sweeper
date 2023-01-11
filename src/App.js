import styled from 'styled-components';
import MenuBar from './components/MenuBar';
import GameBar from './components/GameBar';
import Game from './components/Game';

const Wrap = styled.div`
	display: grid;
	place-items: center;

	height: 100vh;
	background: var(--shade-800);

	color: var(--orange-200);
	text-align: center;
`;

const Window = styled.div`
	/* display: flex; */

	background: var(--shade-800);
	border: 4px solid var(--warm-gray);

	border-radius: 1px;
`;

function App() {
	return (
		<Wrap>
			<Window>
				<MenuBar />
				<GameBar />
				<Game difficulty='expert' />
			</Window>
		</Wrap>
	);
}

export default App;
