import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Section, TextWrapper } from '../../styles/globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
	TitleSection
} from './styles';



const Carousel = () => {
	const [sliderRef, setSliderRef] = useState<any>(null);

	return (
		<Section $margin="auto" $maxWidth="1280px" $padding="50px 70px" $inverse>
			<Row $justify="space-between" $margin="1rem" $wrap="wrap">
				<TitleSection width="auto"  $inverse>
					Find more about us
				</TitleSection>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#32B681' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" $margin="0.4rem 0 0" $weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" $margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						<CardButton>Learn More</CardButton>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;