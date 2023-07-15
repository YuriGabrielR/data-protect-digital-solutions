import styled from 'styled-components';
import { Button } from'../../styles/globalStyles';
// import { ReactNode } from 'react';

export const MainSection = styled.main`

	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	

`;

export const MainContainer = styled.div`
	display:flex;


`

export const MainVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	left:0;
	position: absolute;
	z-index: -1;

`;


export const MainText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const MainButton = styled(Button)`
	color: white;

	&:before {
		
		background: linear-gradient(to right,#0a7f3e ,#32cf8e);

		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;
