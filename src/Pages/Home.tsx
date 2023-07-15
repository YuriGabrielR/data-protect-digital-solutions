import Features from "../components/Features";
import Main from "../components/Main";
import { Content } from "../components/Content";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";
import Carousel from "../components/Carousel";

export default function Home() {
  return(
    <>
    
    <Main/>
    <Features/>
    <Content {...heroOne} />
    <Content {...heroTwo} />
    <Content {...heroThree} />
    <Carousel/>
    </>
   

 
  )  
}
