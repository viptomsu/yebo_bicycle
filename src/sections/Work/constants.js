import bike1Bg1 from '../../assets/img/backgrounds/work_bike1_img1.jpg';
import bike1Bg2 from '../../assets/img/backgrounds/work_bike1_img2.jpg';
import bike2Bg1 from '../../assets/img/backgrounds/work_bike2_img1.jpg';
import bike2Bg2 from '../../assets/img/backgrounds/work_bike2_img2.jpg';
import bike3Bg1 from '../../assets/img/backgrounds/work_bike3_img1.jpg';
import bike3Bg2 from '../../assets/img/backgrounds/work_bike3_img2.jpg';
import bike3Bg3 from '../../assets/img/backgrounds/work_bike3_img3.jpg';
import bike1Icon from '../../assets/img/icons/work_bike1_icon.png';
import bike2Icon from '../../assets/img/icons/work_bike2_icon.png';
import bike3Icon from '../../assets/img/icons/work_bike3_icon.png';
import bike1Logo from '../../assets/img/logos/work_bike1_logo.png';
import bike2Logo from '../../assets/img/logos/work_bike2_logo.png';
import bike3Logo from '../../assets/img/logos/work_bike3_logo.png';

const bikesNames = ['vintage Oliva', 'La Boriosa', 'retrò Bike - M. Hulot'];
const bikesDescs = [
	`Trek got its start in Waterloo, Wisconsin in 1976. According to CNBC, it is the largest bike brand based in the US. Although most of it production has moved overseas, the company still produces some bikes in the US. As of 2014, it was making about 25,000 bicycles domestically each year, which amounted to about half of all bikes produced in the US.`,
	`Cannondale is another top bike brand that dates back to the 1970s. While two buddies founded Trek over a glass of beer, Cannonade was birthed over a pickle factory in Connecticut. At first, the company didn’t make bikes but instead produced a bike trailer, accessories and apparel.`,
	`Kona Bikes is a relative newcomer. The brand was started in 1988 by Dan Gerhard and Jacob Heilbron. The pair continues to own the brand today and it remains to be based out of the Pacific Northwest.`
]

const bikesImg = [
	[bike1Bg1, bike1Bg2],
	[bike2Bg1, bike2Bg2],
	[bike3Bg1, bike3Bg2, bike3Bg3]
];

const bikesLogo = [bike1Logo, bike2Logo, bike3Logo];

const bikesIcon = [bike1Icon, bike2Icon, bike3Icon];

export const bikes = bikesNames.map((name, index) => ({
	name: name,
	desc: bikesDescs[index],
	images: bikesImg[index],
	logo: bikesLogo[index],
	icon: bikesIcon[index]
}))
