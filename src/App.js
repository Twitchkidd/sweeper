import { useState } from 'react';
import AppWrap from './components/layout/core/AppWrap/AppWrap';
import MenuPage from './views/Menu/MenuPage';
import GamePage from './views/Game/GamePage';

import MenuBar from './components/MenuBar';
import GameBar from './components/GameBar';
import Game from './components/Game';

const Window = styled.div`
	/* display: flex; */

	background: var(--shade-800);
	border: 4px solid var(--warm-gray);

	border-radius: 1px;
`;

const App = () => {
	const [playing, setPlaying] = useState(false);
	// const [difficulty, setDifficulty] = useState(null);
	return <AppWrap>{!playing ? <MenuPage /> : <GamePage />}</AppWrap>;
};

export default App;

// <Window>
// 	<MenuBar />
// 	<GameBar />
// 	<Game difficulty='expert' />
// </Window>
