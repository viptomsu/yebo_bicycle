import Section from '../../components/Section';
import Heading from '../../components/Heading';
import aboutIcon from '../../assets/img/icons/about_icon.png';
import './About.scss';

function About() {
	return (
		<Section id="about">
			<div className="about__content">
				<img src={aboutIcon} alt="icon"/>
				<Heading size="big" className="about__heading">
					A NEW GENERATION OF VINTAGE BIKE
				</Heading>
				<p className="about__desc">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
			</div>
		</Section>
	)
}

export default About;
