import { Props } from "../components/Content/styles";

export const heroOne:Props = {
	$reverse: true,
	$inverse: true,
	topLine: {
		text: 'Founded in 2012',
	},
	headline: "We've been in business for 9 years",
	description: 'We have designed and implemented the best cloud security solutions',
	buttonLabel: 'Find More',
	imgStart: 'start',
	$img: './src/assets/svg/Deal.svg',
	start: 'true',
};

export const heroTwo:Props = {
	$reverse: false,
	$inverse: true,
	topLine: {
		text: 'Designed & Developed',
	},
	headline: 'The best practices',
	description: 'Our clients have had the best experience working with us',
	buttonLabel: 'View Project',

	linkTo: '/more',
	imgStart: 'start',
	$img: './src/assets/svg/Connection.svg',
	start: 'true',
};

export const heroThree:Props = {
	$reverse: true,
	$inverse: true,
	topLine: {
		text: 'Highly reputed brand',
	},
	headline: 'Why us? ',
	description:
		'Our 9 year experience have allowed us to use the most innovative technologies and methodologies',
	buttonLabel: 'View Project',

	linkTo: '/download',
	imgStart: '',
	$img: './src/assets/svg/ChartUp.svg',
	start: 'true',
};