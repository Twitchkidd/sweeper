import styled from 'styled-components';
import Button from '../../core/Button/Button';

const Bar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: linear-gradient(to left, var(--orange-500), var(--orange-100));

	color: var(--shade-800);

	& * {
		margin: 4px;
	}
`;

const TitleBar = ({ backToMenu }) => (
	<Bar>
		<strong>Sweeper</strong>
		<Button square onClick={() => backToMenu()}>
			x
		</Button>
	</Bar>
);

export default TitleBar;
