import MenuLayout from '../../components/layout/menu/MenuLayout/MenuLayout';
import MenuHeader from '../../components/layout/menu/MenuHeader/MenuHeader';
import Buttons from '../../components/layout/menu/Buttons/Buttons';
import Button from '../../components/core/Button/Button';
import Link from '../../components/core/Link/Link';

const MenuPage = ({ selectDifficulty }) => {
	return (
		<MenuLayout>
			<MenuHeader>
				<h1>sweeper</h1>
				<h2>a minesweeper clone</h2>
			</MenuHeader>
			<Buttons>
				<Button big onClick={() => selectDifficulty('beginner')}>
					Beginner
				</Button>
				<Button big onClick={() => selectDifficulty('intermediate')}>
					Intermediate
				</Button>
				<Button big onClick={() => selectDifficulty('expert')}>
					Expert
				</Button>
			</Buttons>
			<footer>
				2023 Sun Bear Software -{' '}
				<Link href='https://gitlab.com/twitchkidd/sweeper'>Source Code</Link>
			</footer>
		</MenuLayout>
	);
};

export default MenuPage;
