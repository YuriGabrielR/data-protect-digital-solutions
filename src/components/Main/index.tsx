import {Link} from 'react-router-dom';
import { Button, Container, MainHeading } from '../../styles/globalStyles';
import{  MainSection, MainText, ButtonWrapper, MainButton, MainVideo } 
from './styles';



export default function Main() {
  return (

    <MainSection>
	
		<Container>
			
			<MainVideo src="./assets/images/Main.mp4" autoPlay muted loop/>	

			<MainHeading> Protect Your Data </MainHeading>

			<MainText>	
				We provide the best security systems for clients all over the world
			</MainText>

			


			<ButtonWrapper>

				<Link  to="signup">
				 <Button> Get Started </Button>
				</Link>

				<MainButton>Find More</MainButton>
                    
			</ButtonWrapper>


		</Container>
			

	</MainSection>
  )
}
