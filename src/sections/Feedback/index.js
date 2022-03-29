import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Section from '../../components/Section';
import CreateCarousel from '../../components/CreateCarousel';
import Italic from '../../components/Italic';
import { feedbacks } from './constants';
import { extractTime } from './helpers';
import './Feedback.scss';

function Feedback() {
	const Carousel = CreateCarousel(props => {
		return (
			<div className="feedback__content">
				<FontAwesomeIcon
					className="feedback__content--icon"
					icon={brands('twitter')}
				/>
				<h3
					className="feedback__content--title"
				>
					{props.user}
					<span className="feedback__content--time">
						{extractTime(props.time)}
					</span>
				</h3>
				<Italic className="feedback__content--detail">
					{props.content}
				</Italic>
			</div>
		)
	}, feedbacks, 20000000);
	return (
		<Section id="feedback">
			<Carousel />
		</Section>
	)
}

export default Feedback;
