import styled from 'styled-components';
import { cellSize } from '../../../utils/constants/game.constants';
import mine from '../../../assets/svg/mine.svg';

const CellEl = styled.div`
	display: grid;
	place-items: center;

	width: ${cellSize}px;
	height: ${cellSize}px;
	background: ${props =>
		props.open ? 'var(--shade-700)' : 'var(--shade-300)'};
	border: 1px inset var(--tint-500);

	color: ${props =>
		props.type === 1
			? 'var(--blue)'
			: props.type === 2
			? 'var(--green-400)'
			: props.type === 3
			? 'var(--red)'
			: props.type === 4
			? 'var(--blue-500)'
			: props.type === 5
			? 'var(--red-500)'
			: props.type === 6
			? 'var(--teal)'
			: props.type === 7
			? 'var(--purple)'
			: props.type === 8
			? 'var(--black)'
			: null};

	& * {
		width: 90%;
		background: transparent;

		pointer-events: none;
	}
`;

const Cell = ({ id, type, open, openCell }) => {
	return (
		<CellEl id={id} type={type} open={open} onClick={openCell}>
			{!open ? null : type === 'mine' ? (
				<img src={mine} alt='Mine!' />
			) : type === '0' ? null : (
				<strong>{type}</strong>
			)}
		</CellEl>
	);
};

export default Cell;
