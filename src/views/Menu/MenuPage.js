import MenuLayout from '../../components/layout/menu/MenuLayout/MenuLayout';
import MenuHeader from '../../components/layout/menu/MenuHeader/MenuHeader';
import Button from '../../components/core/Button/Button';
import Link from '../../components/core/Link/Link';

// const MenuPage = ({ selectDifficulty }) => {
const MenuPage = () => {
	return (
		<MenuLayout>
			<MenuHeader>
				<h1>sweeper</h1>
				<h2>a minesweeper clone</h2>
			</MenuHeader>
			<Button>Beginner</Button>
			<Button>Intermediate</Button>
			<Button>Expert</Button>
			<footer>
				2023 Sun Bear Software - <Link>Source Code</Link>
			</footer>
		</MenuLayout>
	);
};

export default MenuPage;
