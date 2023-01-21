import styled from 'styled-components';
import Button from '../../core/Button/Button';

const Bar = styled.div`
	background: linear-gradient(to right, var(--orange-500), var(--orange-100));

	color: var(--shade-800);
`;

const TitleBar = ({ backToMenu }) => (
	<Bar>
		<span>sweeper</span>
		<Button onClick={() => backToMenu()}>X</Button>
	</Bar>
);

export default TitleBar;
