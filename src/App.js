import styled from 'styled-components';
import './App.css';

const Window = styled.div`
	height: 500px;
	width: 900px;
	background: var(--dark-300);
	border: 20px ridge var(--dark-500);
`;

function App() {
	return (
		<div className='App'>
			<Window />
		</div>
	);
}

export default App;
