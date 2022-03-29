import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import { images } from './constants';
import shopNow from '../../assets/img/icons/shop_now_icon.png'
import './Shop.scss';

function Shop() {
	return (
		<Section id="shop">
			<Grid items={images.map(item => (
				<div key={item} className="shop__product">
					<img
						className="shop__product--img"
						src={item}
						alt="bike"
					/>
					<div className="shop__product--hover">
						<img src={shopNow} alt="icon"/>
						<Button>shop now</Button>
					</div>
				</div>
			))}/>
			<div className="shop__discover">
				<Button type="outline">discover the shop</Button>
			</div>
		</Section>
	)
}

export default Shop
