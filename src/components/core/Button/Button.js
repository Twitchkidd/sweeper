import styled from 'styled-components';

const Button = styled.button`
	display: grid;
	place-items: center;

	${props => (props.big ? 'width: 120px;' : null)}
	${props => (props.big ? 'height: 40px;' : null)}

	background: var(--tint-500);
	border: 1px solid transparent;
	padding: 2px 6px;

	color: var(--shade-800);

	border-radius: 4px;
`;

export default Button;
