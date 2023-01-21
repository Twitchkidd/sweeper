import styled from 'styled-components';

const Board = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: ${props => props.wide * 41}px;
	background: var(--warm-gray);
`;

export default Board;
