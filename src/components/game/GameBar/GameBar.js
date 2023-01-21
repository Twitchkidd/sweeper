import styled from 'styled-components';

const Bar = styled.div`
	background: var(--warm-gray);
`;

const GameBar = () => (
	<Bar>
		<span id='mineCount'>000</span>
		<span>:)</span>
		<span id='timer'>99</span>
	</Bar>
);

export default GameBar;
