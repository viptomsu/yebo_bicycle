import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import author from '../../assets/img/logos/author.png'
import './Footer.scss';

function Footer(props) {
	return (
		<footer className="footer">
			<div className="footer__info">
				<p className="footer__info--name">AOD New York</p>
				<p>2250 Lexington Avenue </p>
				<p>New York, NY 10035  - info@domain.com</p>
			</div>
			<div className="footer__brands">
				<FontAwesomeIcon
					className="round-icon"
					icon={brands('twitter')}
				/>
				<FontAwesomeIcon
					className="round-icon"
					icon={brands('facebook-f')}
				/>
				<FontAwesomeIcon
					className="round-icon"
					icon={brands('pinterest')}
				/>
			</div>
			<p
				className="footer__credit"
				data-img={author}
			>
				Handcraft by
			</p>
		</footer>
	)
}

export default Footer;
