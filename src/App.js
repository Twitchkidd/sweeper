import { useState } from 'react';
import AppWrap from './components/layout/core/AppWrap/AppWrap';
import MenuPage from './views/Menu/MenuPage';
import GamePage from './views/Game/GamePage';

const App = () => {
	const [playing, setPlaying] = useState(true);
	return <AppWrap>{!playing ? <MenuPage /> : <GamePage />}</AppWrap>;
};

export default App;
