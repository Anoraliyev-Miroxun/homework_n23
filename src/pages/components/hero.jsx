import bgImg from '../../assets/hero-bg.png';
import { StrelkaBtn } from "../../assets/icons/btn-strelka.jsx"

import CustomButton from '../../components/button.jsx';

export const Hero = () => {
    return (
        <div className="bg-[url(`src/assets/hero-bg.png`)]" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="contianer b">
                <div className=''>
                    <div className='w-[530px] mt-[246px] mb-[246px]'>
                        <p className="font-third-family font-normal text-[36px] text-yashil">100% Natural Food</p>
                        <h2 className='font-font-family text-qoraroq text-[70px] font-bold mb-[23px]'>Choose the best healthier way of life</h2>
                        <CustomButton>Explore Now</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}