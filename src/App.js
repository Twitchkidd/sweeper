import styled from 'styled-components';
import './App.css';

const Window = styled.div`
	height: 540px;
	width: 956px;
	background: var(--shade-800);
	border: 4px solid var(--warm-gray);

	border-radius: 1px;
`;

function App() {
	return (
		<div className='App'>
			<Window />
		</div>
	);
}

export default App;
