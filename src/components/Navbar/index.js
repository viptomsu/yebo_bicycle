import './Navbar.scss';
import Logo from '../Logo';
import Heading from '../Heading';
// import { menuList } from './constants';

function Navbar(props) {
	const menuList = ['about us', 'work', 'shop', 'contact'];
	const middle = menuList.length / 2;
	menuList.splice(middle, 0, <Logo />);

	return (
		<nav className="navbar">
			{menuList.map((item, i) => {
				let className = 'navbar__divider-carrier';
				if (i === middle - 1 ||
					i === middle ||
					i === middle * 2) {
					className = '';
				}
				return (
					<Heading
						key={i}
						href='#'
						tag='a'
						className={className}
					>
						{item}
					</Heading>
				)
			}

			)}
		</nav>
	)
}

export default Navbar;
