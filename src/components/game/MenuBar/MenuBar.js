import styled from 'styled-components';

const Bar = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	& * {
		margin: 4px;
		display: inline-block;
	}

	& *::first-letter {
		text-decoration: underline;
	}
`;

const MenuBar = () => (
	<Bar>
		<span>Game</span>
		<span>Help</span>
	</Bar>
);

export default MenuBar;
