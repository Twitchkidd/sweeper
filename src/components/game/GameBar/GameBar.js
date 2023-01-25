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

const GameBar = () => (
	<Bar>
		<span id='mineCount'>000</span>
		<span>:)</span>
		<span id='timer'>99</span>
	</Bar>
);

export default GameBar;
