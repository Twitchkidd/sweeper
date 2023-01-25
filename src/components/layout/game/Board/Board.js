import styled from 'styled-components';
import { cellSize } from '../../../../utils/constants/game.constants';

const Board = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: ${props => props.wide * cellSize}px;
	background: var(--warm-gray);
`;

export default Board;
