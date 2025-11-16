import heroBg from '../assets/icons/shopsingle/hero-bg.svg';
import { useParams, useSearchParams } from 'react-router-dom';
import { HeroSingle } from '../components/hero-singl';
import { homeCardData } from '../data/homecardData.js';
import { CustomYulduz } from '../components/cutomYulduzlar.jsx';
import CustomButton from '../components/button.jsx';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card.jsx';


export const Shopsingle = () => {

    const { id } = useParams()

    const i = homeCardData.find(i => i.id == id);
    return (
        <>
            <HeroSingle bg={heroBg} content={"Shop Single"} />

            <section>
                <div className='contianer b items-center flex flex-col justify-center pt-[133px]'>
                    <div className='flex b'>
                        <div className='b relative'>
                            <p className=" top-[38px] left-[35px] py-1.5 px-3 inline-block bg bg-qoraroq text-white rounded-[8px] text-[15px] font-font-family font-semibold absolute">{i.category}</p>
                            <img className='b rounded-2xl' src={i.image} alt="rasm" />
                        </div>


                        <div className='py-[106px] pl-[88px]'>
                            <div className='b w-[658px]'>
                                <h2>{i.nomi}</h2>
                                <CustomYulduz soni={i.yulduzlarSoni} />
                                <div className="flex">
                                    <p className=" mr-2 line-through text-[15px] font-semibold font-second-family text-[#b8b8b8]">${i.eskiNarxi} </p>
                                    <p className=" text-[18px] font-bold font-second-family text-qoraroq"> ${i.yangiNarxi}</p>
                                </div>
                                <p>
                                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                </p>
                                <div className='flex items-center'>
                                    <p>Quantity :</p>
                                    <div className='p-5 border border-qoraroq'>1</div>
                                    <Link to={"/shop"}><CustomButton>{"Add To Cart"}</CustomButton></Link>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='flex flex-col justify-center b text-center w-[1137px] mt-[90px]'>
                        <div className='flex justify-center gap-5 mb-[27px]'>
                            <Link to={"/shop"}><CustomButton className='w-[363px]' showArrow={false}>{"Product Description"}</CustomButton></Link>
                            <Link to={"/shop"}><CustomButton className='' showArrow={false}>{"Additional Info"}</CustomButton></Link>
                        </div>
                        <p>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="contianer b pt-[140px]">
                   <div className='flex justify-center'> <h2>Related Products</h2></div>
                    <div className='grid grid-cols-4 gap-5 mt-[40px]'>
                        {
                            homeCardData.slice(0, 4).map((i) => {
                                return <Card key={i.id} id={i.id} nomi={i.nomi} category={i.category} eskiNarxi={i.eskiNarxi} yangiNarxi={i.yangiNarxi} img={i.image} yulduzlarSoni={i.yulduzlarSoni} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}