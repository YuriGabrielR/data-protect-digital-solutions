import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './styles';

import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../styles/globalStyles';
import { SiAlwaysdata } from 'react-icons/Si';
import { IconType } from 'react-icons';



const iconLogo = (Icon:IconType) => <Icon size="2rem" color="white" />;


function Footer() {
	return (
		<Section $padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid $justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">

						{iconLogo(SiAlwaysdata)}
							
						</FooterLogo>
						<FooterAddress>
							69 Street, Delta Building, US Road, Los Angeles 123
						</FooterAddress>
 
						<Row $align="center" $margin="auto  0 0 0" $gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>

					</FooterColumn>

					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights> Yuri Ramos © 2023</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;