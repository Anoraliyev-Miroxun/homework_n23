import footerBg from '../assets/icons/footer-bg.svg';
import CustomButton from '../components/button';
import logo from '../assets/icons/logo.svg';
import insta from '../assets/icons/ishtimoyiy/intagram.svg';
import pantres from '../assets/icons/ishtimoyiy/pentres.svg';
import tviter from '../assets/icons/ishtimoyiy/triter.svg';
import faceBook from '../assets/icons/ishtimoyiy/faceBook.svg';

export const Footer = () => {
    return (
        <>
            <section>
                <div className="contianer">
                    <div className="px-[71px] py-[105px] rounded-4xl mt-[245px] mb-[117px]" style={{ backgroundImage: `url(${footerBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className=' flex justify-between items-center'>
                            <h2 className='text-[50px] font-extrabold text-white font-font-family'>Subscribe to <br /> our Newsletter</h2>
                            <div className='flex gap-1.5'>
                                <input className='bg w-[349px] bg-white rounded-2xl outline-none text-[20px] font-normal text-[#ababab] pl-[40px] pr-[30px]' placeholder='Your Email Address' type="text" />
                                <CustomButton showArrow={false}>Subscribe</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="contianer">
                    <div className='flex justify-center mb-[110px]'>

                        <div className='text-right'>
                            <h3 className='text-qoraroq text-[30px] font-font-family font-bold'>Contact Us</h3>
                            <div className='mt-8'>
                                <h4 className='text-qoraroq text-[18px] font-second-family font-bold '>Email</h4>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>needhelp@Organia.com</p>
                            </div>
                            <div className='mt-8'>
                                <h4 className='text-qoraroq text-[18px] font-second-family font-bold '>Phone</h4>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>777 777 777</p>
                            </div>
                            <div className='mt-8'>
                                <h4 className='text-qoraroq text-[18px] font-second-family font-bold '>Address</h4>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>88 road, borklyn street, USA</p>
                            </div>

                        </div>

                        <div class="w-[1px] ml-[51px] mr-[41px]  h-[336px] bg-[#d4d4d4]"></div>

                        <div className='w-[543px] text-center flex flex-col items-center'>
                            <img src={logo} alt="logo" />
                            <div className='mt-[23px]'>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </p>
                            </div>
                            <div className='gap-[15px] flex mt-12'>
                                <button className='bg-[#eff6f1] cursor-pointer p-5 rounded-full'><img src={insta} alt="insta" /></button>
                                <button className='bg-[#eff6f1] cursor-pointer p-5 rounded-full'><img src={faceBook} alt="insta" /></button>
                                <button className='bg-[#eff6f1] cursor-pointer p-5 rounded-full'><img src={tviter} alt="insta" /></button>
                                <button className='bg-[#eff6f1] cursor-pointer p-5 rounded-full'><img src={pantres} alt="insta" /></button>
                            </div>


                        </div>

                        <div class="w-[1px] ml-[41px] mr-[51px] h-[336px] bg-[#d4d4d4]"></div>

                        <div className='text-left'>
                            <h3 className='text-qoraroq text-[30px] font-font-family font-bold'>Utility Pages</h3>

                            <div className='mt-8 flex flex-col gap-5'>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>88 road, borklyn street, USA</p>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>88 road, borklyn street, USA</p>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>777 777 777</p>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>needhelp@Organia.com</p>
                                <p className='text-qoraroq text-[18px] font-second-family font-normal leading-[165%]'>88 road, borklyn street, USA</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='text-center'>
                    <hr class="text-[#d4d4d4]"></hr>
                    <p className='my-[17px]'>Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</p>
                </div>
            </section>
        </>



    )
}