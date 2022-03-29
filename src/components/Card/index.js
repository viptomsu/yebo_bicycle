import Heading from '../Heading';
import './Card.scss';

function Card(props) {
	return (
		<div className="card">
			<div className="card__content">
				<img
					src={props.icon}
					className="card__icon"
					alt="icon"
				/>
				<Heading size="big" className="card__title">
					{props.title}
				</Heading>
				<p className="card__desc">
					{props.description}
				</p>
			</div>
			<img
				className="card__img"
				src={props.img}
				alt={props.title}
			/>
		</div>
	)
}

export default Card;
