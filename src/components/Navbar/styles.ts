import styled from 'styled-components';
import { Container } from '../../styles/globalStyles'; 
import { Link } from 'react-router-dom';



export type Props = {
    show:  boolean;
}

export const Nav = styled.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;

	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 2.4rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul<{$show: boolean }>`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ $show }) => ($show ? 1 : 0)};
		visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
		transform: translateY(${({ $show }) => ($show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background: #00000087;
		background: linear-gradient(to right,#0a7f3e ,#32cf8e);
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	position:relative;
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	height: 80px;
	cursor: pointer;

	
	&::before{
		content: ''; 
		height:2px;
		background-color:#5eba88;
		width: 0%;
		position: absolute; 
		bottom:30%; 
		left:0;
		transition: 0.3s ease-in-out all;
	}

	&:hover::before{
		width:100%;
		background: #1D976C;  
		background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);
		background: linear-gradient(to right, #93F9B9, #1D976C); 
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}

		&:hover::before{
		width:0%;
		background: #1D976C;  
		background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);
		background: linear-gradient(to right, #93F9B9, #1D976C); 
	}
	}


`;

export const NavLinks = styled.span`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	
	
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

	
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;