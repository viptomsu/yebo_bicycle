import Section from '../../components/Section';
import Logo from '../../components/Logo';
import Italic from '../../components/Italic';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './Contact.scss';

function Contact() {
	return (
		<Section id="contact">
			<Logo />
			<Italic>
				Stay on the saddle!
			</Italic>
			<form className='contact__form'>
				<Input type='email' placeholder='enter your email...'/>
				<Button type={['primary', ]}>Go</Button>
			</form>
		</Section>
	)
}

export default Contact;
