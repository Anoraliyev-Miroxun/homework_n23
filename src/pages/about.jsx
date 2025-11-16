import { HeroSingle } from "../components/hero-singl"
import heroBg from '../assets/icons/about/hero-bg.svg';
import Section2 from "../components/section2";
import section2bg from '../assets/icons/about/section2-bg.svg';
import {Section2Svg} from '../assets/icons/about/section2-icon.jsx';

export const About = () => {
    return (
        <>
            <HeroSingle bg={heroBg} content={"About Us"} />

            <Section2 bgImage={section2bg} topTitle={"About Us"}
                mainTitle="We do Creative Things for Success"
                description="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.  Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
             buttonText="Explore More"
                features={[
                    { icon: <Section2Svg />, title: "No growth hormones are used" },
                    { icon: <Section2Svg />, title: "Modern Agriculture Equipment", }
                ]} />
        </>
    )
}