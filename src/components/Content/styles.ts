import styled from 'styled-components';
import {  TargetAndTransition, VariantLabels, AnimationControls, motion, Transition } from 'framer-motion';


export type Props = {
	primary?: string | number; 
	headline:string | number; 
	description:string | number; 
	buttonLabel:string | number; 
	$img:string | HTMLImageElement; 
	alt?:string | number; 
	src?: string | HTMLImageElement;
	$inverse?:boolean; 
	$reverse?:boolean; 
	big?: string;
	fontBig?: string;
	text?: string | null;
	topLine: {text:string};
	imgStart: string;
	linkTo?: string;
	start: boolean | string;
	initial?: boolean | VariantLabels | TargetAndTransition;
	transition?:Transition;
	animate?: boolean | VariantLabels | TargetAndTransition | AnimationControls;
	whileHover?: VariantLabels | TargetAndTransition;

}


export const ContentRow = styled.div<Partial<Props>>`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled(motion.div)<Partial<Props>>`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled(motion.div)<Partial<Props>>`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const TopLine = styled(motion.div)<Partial<Props>>`
	font-size: 0.9rem;
	line-height: 16px;
	font-weight: 550;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: #979797;
`;


export const Img = styled(motion.img)<Partial<Props>>`
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
`;


export const Heading = styled(motion.h2)<Partial<Props>>`
	margin-bottom: 24px;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ $inverse }) => ($inverse ? '#059058' : '#263238')};

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Subtitle = styled(motion.p)<Partial<Props>>`
	max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ $inverse }) => ($inverse ? '#6a6a6a' : 'white')};
`;

export const ContentButton = styled(motion.button)<Partial<Props>>`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background-color: #059058;
	color: ${({ $inverse }) => ($inverse ? '#FFF' : 'white')};

	border-radius: 7px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border:none;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: 0.3s ease-in-out all;


	&:hover {

		background-color: #687074;


	}

`;
