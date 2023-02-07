import styled from 'styled-components';

const Bar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: var(--warm-gray);

	& * {
		margin: 4px;
	}
`;

const GameBar = ({ mines, newGame, result }) => (
	<Bar>
		<span id='mineCount'>{mines}</span>
		<span onClick={newGame}>
			{result === 'win' ? ':D' : result === 'lose' ? ':X' : ':)'}
		</span>
		<span id='timer'>99</span>
	</Bar>
);

export default GameBar;
