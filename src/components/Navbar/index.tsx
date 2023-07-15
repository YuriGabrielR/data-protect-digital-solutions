import { useState } from 'react';
import {IconContext} from 'react-icons';
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import {SiAlwaysdata} from "react-icons/si"
import {data} from '../../data/NavBarData';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks,
NavItem, 
} from './styles';

import { useLocation, useNavigate } from 'react-router-dom';


export default function NavBar() {

    //state do menu
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {

    setShow(!show);

  };

  
  let navigate = useNavigate();
  let location = useLocation();


 const scrollTo = (id:string) => {

	const element: HTMLElement | null = document.getElementById(id);

	element?.scrollIntoView({
	behavior: 'smooth',
	
 	});


 
 };


    const closeMobileMenu = (to:string, id: string) => {

		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to)
		setShow(false);
	};

	
  return (
    
    <div>
        <IconContext.Provider value={{ color: '#fff' }}>

			<Nav>
				<NavbarContainer>
               
					<NavLogo to="/">

                         <SiAlwaysdata/> 
						
					</NavLogo>


					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes/> : <AiOutlineMenu />}
					</MobileIcon>


					<NavMenu $show={show}>

					 {data.map((el, index) => (
						<NavItem key={index}>
						<NavLinks onClick={

							()=> closeMobileMenu(el.to, el.id!)
						
						}>
                                    
						{el.text}

						</NavLinks>
							</NavItem>
						))
					}

					</NavMenu>

				</NavbarContainer>

			</Nav>
		</IconContext.Provider>


    </div>
  )
}
