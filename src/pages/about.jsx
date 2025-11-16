import { HeroSingle } from "../components/hero-singl"
import heroBg from '../assets/icons/about/hero-bg.svg';
import Section2 from "../components/section2";
import section2bg from '../assets/icons/about/section2-bg.svg';
import { Section2Svg } from '../assets/icons/about/section2-icon.jsx';
import sec3bg from '../assets/icons/about/sec3-bg.svg';
import sec2bg from '../assets/icons/about/sec2-bg.svg';
import { AboutExpert } from "./components/aboutexpert.jsx";
import { Aboutexperts } from "../data/aboutexpert.js";
import sec4Img from '../assets/icons/about/sec4-img.svg';

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

            <section>
                <div className="bg bg-bgkulrang">
                    <div className="contianer">
                        <div className="flex flex-col justify-center items-center b py-[190px]">
                            <div className=" b flex gap-12">
                                <div className="w-[671px]">
                                    <p className="font-third-family mb-2 text-2xl md:text-4xl font-normal text-yashil">Why Choose us?</p>

                                    <h3 className="font-font-family text-3xl md:text-5xl font-extrabold text-qoraroq leading-tight mb-6"> We do not buy from the open market & traders. </h3>

                                    <p className="font-second-family leading-relaxed mt-4 text-base md:text-lg text-qoraroq mb-9"> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

                                    <div className="w-[486px] ">
                                        <div className="py-7.5 bg rounded-4xl bg-gray-300 w-[329px] inline-block px-9 mb-3"> 100% Natural Product </div>

                                        <p className="font-second-family leading-relaxed mt-4 text-base md:text-lg text-qoraroq left-5"> Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>

                                    </div>
                                    <div className="py-7.5 bg rounded-4xl bg-gray-300 w-[329px] inline-block px-9 mb-3">  Increases resistance</div>


                                    <p className="font-second-family leading-relaxed mt-4 text-base md:text-lg text-qoraroq"> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

                                </div>
                                <div className="flex flex-col justify-center">
                                    <img src={sec2bg} alt="rasm" />
                                </div>
                            </div>
                            <div className="mt-[91px]">
                                <img src={sec3bg} alt="rasm" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="">
                    <div className="contianer pt-[177px] pb-[202px]">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col b justify-center items-center text-center w-[852px] mb-[42px]">
                                <p className="font-third-family mb-2 text-2xl md:text-4xl font-normal text-yashil">Why Choose us?</p>

                                <h3 className="font-font-family text-3xl md:text-5xl font-extrabold text-qoraroq leading-tight"> Our Organic Experts </h3>

                                <p className="font-second-family leading-relaxed mt-4 text-base md:text-lg text-qoraroq"> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

                            </div>
                            <div>
                                <div className='grid grid-cols-3 gap-5 justify-between mb-[122px]'>
                                    {
                                        Aboutexperts.slice(0, 3).map((i) => {
                                            return <AboutExpert key={i.id} ism={i.ismi} kasbi={i.kasbi} tarmoqlari={i.tarmoqlari} img={i.img} id={i.id} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="bg bg-qoraroq">
                    <div className="contianer py-[188px]">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-third-family  text-2xl md:text-4xl font-normal text-yashil mb-2">Why Choose us?</p>

                                <h3 className="font-font-family text-3xl md:text-5xl font-extrabold text-white leading-tight mb-[33px]"> Our Organic Experts </h3>

                            </div>
                            <img src={sec4Img} alt="rasm" />
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}