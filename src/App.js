import { useState } from 'react';
import AppWrap from './components/layout/core/AppWrap/AppWrap';
import MenuPage from './views/Menu/MenuPage';
import GamePage from './views/Game/GamePage';

const App = () => {
	const [status, setStatus] = useState({
		playing: false,
		difficulty: null,
	});
	const handleSelectDifficulty = diff => {
		setStatus(prevStatus => ({ playing: true, difficulty: diff }));
	};
	const handleBackToMenu = () => {
		setStatus(prevStatus => ({ playing: false, difficulty: null }));
	};
	return (
		<AppWrap>
			{!status.playing ? (
				<MenuPage selectDifficulty={handleSelectDifficulty} />
			) : (
				<GamePage
					difficulty={status.difficulty}
					backToMenu={handleBackToMenu}
				/>
			)}
		</AppWrap>
	);
};

export default App;
