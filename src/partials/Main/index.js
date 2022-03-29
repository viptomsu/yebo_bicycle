import About from '../../sections/About';
import Work from '../../sections/Work';
import Feedback from '../../sections/Feedback';
import Shop from '../../sections/Shop';
import Contact from '../../sections/Contact';
import './Main.scss';

function Main() {
	return (
		<main className="main">
			<About />
			<Work />
			<Feedback />
			<Shop />
			<Contact />
		</main>
	)
}

export default Main;
