import { Hero } from './components/hero.jsx';
import sectionBg1 from '../assets/icons/section1-img.svg';
import sectionBg2 from '../assets/icons/section1-img2.svg';
import section2Bg from '../assets/icons/section2-bg.svg';
import { Sec2Icon } from '../assets/icons/sec2-icon.jsx';
import { Sec2Icon2 } from '../assets/icons/sec2-icon2.jsx';
import CustomButton from '../components/button.jsx';
import { homeCardData } from '../data/homecardData.js';
import { Card } from '../components/Card.jsx';
import sec3Bg from '../assets/icons/sec3-bg.svg';
import odamImg from '../assets/icons/odamImg.svg';
import { CustomYulduz } from '../components/cutomYulduzlar.jsx';
import nuqtalar from '../assets/icons/sec3-nuqtalar.svg';
import statistika from '../assets/icons/sec3-statistika.svg';
import sec4Bg from '../assets/icons/sec4-bg.svg';
import sec5Bg1 from '../assets/icons/sec5-bg1.svg';
import sec5Bg2 from '../assets/icons/sec5-bg2.svg';
import sec5Bg3 from '../assets/icons/sec5-bg3.svg';
import {HomeMalumot} from '../data/homeMalumot.js';

export const Home = () => {
    return (
        <>
            <section>
                <Hero />
            </section>

            <section className='mt-[154px] mb-[190px]'>
                <div className=' b contianer'>
                    <div className='flex justify-center gap-9'>
                        <div className='w-[682px] rounded-2xl' style={{ backgroundImage: `url(${sectionBg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className='b my-[109px]  w-[277px] ml-[55px]'>
                                <p className='font-third-family mb-1.5 text-[36px] font-normal text-white'>Natural!!</p>
                                <h3 className='font-font-family text-[40px] font-bold text-[#fff]'>Get Garden Fresh Fruits</h3>
                            </div>
                        </div>
                        <div className='w-[682px] rounded-2xl' style={{ backgroundImage: `url(${sectionBg2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className='b my-[109px] w-[277px] ml-[55px]'>
                                <p className='font-third-family mb-1.5 text-[36px] font-normal text-white'>Natural!!</p>
                                <h3 className='font-font-family text-[40px] font-bold text-[#fff]'>Get Garden Fresh Fruits</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mb-[176px]' style={{ backgroundImage: `url(${section2Bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='contianer b'>
                        <div className=' b  mt-[186px] mb-[199px] w-[702px] h-auto ml-[800px]'>
                            <div>
                                <p className='font-third-family mb-2 text-[36px] font-normal text-yashil'>About Us</p>
                                <h3 className='font-font-family text-[50px] font-extrabold text-qoraroq'>We Believe in Working Accredited Farmers</h3>
                                <p className='font-second-family leading-[165%] mt-[14px] text-[18px] font-normal text-qoraroq'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                            </div>

                            <div className='mt-[46px] w-[568px]'>
                                <div className='flex'>
                                    {<Sec2Icon />}
                                    <div className='ml-[19px]'>
                                        <h3 className='font-font-family font-extrabold text-[25px] text-qoraroq'>Organic Foods Only</h3>
                                        <p className='font-font-family font-normal text-[18px] leading-[165%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                    </div>
                                </div>

                                <div className='flex mt-[30px] mb-[46px]'>
                                    {<Sec2Icon2 />}
                                    <div className='ml-[19px]'>
                                        <h3 className='font-font-family font-extrabold text-[25px] text-qoraroq'>Quality Standards</h3>
                                        <p className='font-font-family font-normal text-[18px] leading-[165%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                    </div>
                                </div>

                                <CustomButton>Shop Now</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='b contianer'>
                    <div className='items-center'>
                        <div className='text-center mb-10'>
                            <p className='font-normal text-[36px] font-third-family text-yashil'>Categories </p>
                            <h2 className='font-extrabold text-[50px] font-font-family text-qoraroq'>Our Products</h2>
                        </div>
                        <div className='grid grid-cols-4 gap-5 mb-[122px]'>
                            {
                                homeCardData.slice(0, 8).map((i) => {
                                    return <Card key={i.id} id={i.id} nomi={i.nomi} category={i.category} eskiNarxi={i.eskiNarxi} yangiNarxi={i.yangiNarxi} img={i.image} yulduzlarSoni={i.yulduzlarSoni} />
                                })
                            }
                        </div>
                        <div className='flex justify-center b'><CustomButton>Load More</CustomButton></div>
                    </div>
                </div>
            </section>

            <section className='mt-[200px]'>
                <div className='' style={{ backgroundImage: `url(${sec3Bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='contianer b flex justify-center'>
                        <div className='w-[1108px] b my-[164px]  flex flex-col items-center '>
                            <div className='text-center w-[780px]  b'>
                                <div className='mb-[60px]'>
                                    <p className='font-third-family text-[36px] font-normal text-yashil mb-2'>Testimonial</p>
                                    <h2 className='text-[50px] font-extrabold text-qoraroq font-font-family'>What Our Customer Saying?</h2>
                                </div>
                                <div className='text-center  items-center flex flex-col justify-center'>
                                    <img className='mb-5' src={odamImg} alt="odamrasmi" />
                                    <CustomYulduz soni={5} />
                                    <p className='mt-[25px] mb-5 text-[18px] font-second-family font-normal leading-[165%] '>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    <h4 className='font-font-family text-[25px] font-semibold text-qoraroq'>Sara Taylor</h4>
                                    <p className='font-second-family text-[15px] font-normal text-qoraroq mb-5'>Consumer</p>
                                    <img src={nuqtalar} alt="" />
                                </div>
                            </div>
                            <hr className="text-[#b8b8b8]  my-[102px] w-[1108px]" />

                            <div >
                                <img src={statistika} alt="statistika" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg bg-qoraroq'>
                <div className=' contianer'>
                    <div className=' py-[201px]'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='font-third-family text-[36px] font-normal text-yashil'>Offer</p>
                                <h2 className='font-font-family text-[50px] font-extrabold text-white'>We Offer Organic For You</h2>
                            </div>
                            <div><CustomButton >View All Product</CustomButton></div>
                        </div>
                        <div className='grid grid-cols-4 gap-5 mt-[50px]'>
                            {
                                homeCardData.slice(0, 4).map((i) => {
                                    return <Card key={i.id} id={i.id} nomi={i.nomi} category={i.category} eskiNarxi={i.eskiNarxi} yangiNarxi={i.yangiNarxi} img={i.image} yulduzlarSoni={i.yulduzlarSoni} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='contianer'>
                    <div className='flex'>
                        <div  >
                            <img className='b' src={sec4Bg} alt="" />
                        </div>

                        <div>

                            <div className='relative'>
                                <div className='w-[789px] b py-[70px] px-[85px] bg bg-white absolute -left-[152px] top-20 rounded-[30px]'>
                                    <div className='b'>
                                        <div>
                                            <p className='text-[36px] font-normal font-third-family mb-2'>Eco Friendly</p>
                                            <h2 className='text-[50px] font-extrabold font-font-family mb-[35px]'>Econis is a Friendly Organic Store</h2>
                                        </div>
                                        <div>
                                            <h3 className='text-[25px] font-medium font-font-family mb-[7px]'>Start with Our Company First</h3>
                                            <p className='text-[18px] font-normal font-second-family mb-[35px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                                        </div>
                                        <div>
                                            <h3 className='text-[25px] font-medium font-font-family mb-[7px]'>Start with Our Company First</h3>
                                            <p className='text-[18px] font-normal font-second-family mb-[35px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                                        </div>
                                        <div>
                                            <h3 className='text-[25px] font-medium font-font-family mb-[7px]'>Start with Our Company First</h3>
                                            <p className='text-[18px] font-normal font-second-family '>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg bg-[#f1f8f4]'>
                    <div className='contianer'>
                        <div className='flex justify-between gap-7 py-[187px]'>
                            <div className='py-[244px] px-[146px] flex flex-col justify-center items-center' style={{ backgroundImage: `url(${sec5Bg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                <CustomButton className=' !text-black bg-white hover:bg-qoraroq hover:!text-white'>Organic Juice</CustomButton>
                            </div>

                            <div className='py-[244px] px-[146px] flex flex-col justify-center items-center' style={{ backgroundImage: `url(${sec5Bg2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                <CustomButton className=' !text-black bg-white hover:bg-qoraroq hover:!text-white'>Organic Food</CustomButton>
                            </div>

                            <div className='py-[244px] px-[146px] flex flex-col justify-center items-center' style={{ backgroundImage: `url(${sec5Bg3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                <CustomButton className=' !text-black bg-white hover:bg-qoraroq hover:!text-white'>Nuts Cookis</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='contianer'>
                    <div>
                        <div className='flex justify-between items-center gap-5 mb-12'>
                            <div className='w-[702px]'>
                                <p className='font-third-family text-[36px] font-normal text-yashil mb-2'>News</p>
                                <h2 className='font-font-family text-[50px] font-extrabold text-qoraroq'>Discover weekly content about organic food, & more</h2>
                            </div>

                            <CustomButton>More News</CustomButton>
                        </div>
                        <div>
                          {
                            HomeMalumot.slice(0,2).map((i)=>{
                                return <HomeMalumot key={i.id} nomi={i.nomi} kim={i.kim} sanasi={i.sanasi} bg={i.bg} text={i.text} oy={i.oy} />
                            })
                          }
                        </div>
                    </div>
                </div>
            </section>


        </>


    )
}