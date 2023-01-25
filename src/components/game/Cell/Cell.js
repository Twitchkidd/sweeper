import styled from 'styled-components';
import { cellSize } from '../../../utils/constants/game.constants';
import mine from '../../../assets/svg/mine.svg';

const CellEl = styled.div`
	display: grid;
	place-items: center;

	width: ${cellSize}px;
	height: ${cellSize}px;
	background: #888;
	border: 1px inset #555;

	color: ${props =>
		props.type === '1'
			? 'var(--blue)'
			: props.type === '2'
			? 'var(--green-400)'
			: props.type === '3'
			? 'var(--red)'
			: props.type === '4'
			? 'var(--blue-500)'
			: props.type === '5'
			? 'var(--red-500)'
			: props.type === '6'
			? 'var(--teal)'
			: props.type === '7'
			? 'var(--purple)'
			: props.type === '8'
			? 'var(--black)'
			: null};
`;

const Image = styled.img`
	width: 90%;
`;

const Cell = ({ type, open }) => (
	<CellEl type={type} open={open}>
		{open ? null : type === 'mine' ? (
			<Image src={mine} />
		) : type === 'blank' ? null : (
			<strong>{type}</strong>
		)}
	</CellEl>
);

export default Cell;
