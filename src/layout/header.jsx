import logo from '../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { LupaSvg } from '../assets/icons/header-lupa.jsx';
import { SavatLogo } from '../assets/icons/header-savat.jsx';



export const Header = () => {
    return (
        <div className="contianer">
            <div className='flex justify-between items-center h-[204px] bg-'>
                <div className='w-[189px] mr-[140px]'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex w- gap-[38px] text-qoraroq text-[20px] font-bold font-font-family'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/"}>Pages</Link>
                    <Link to={"/"}>Shop</Link>
                    <Link to={"/"}>Projects</Link>
                    <Link to={"/"}>News</Link>
                </div>
                <div className='flex gap-[18px] ml-[130px]'>
                    <div className='bg bg-bgkulrang w-[376px]  flex rounded-[36px] relative py-5 pl-5'>
                        <input className='outline-none w-full mr-19 ' type="text" placeholder='search...' />
                        <button className='w-[56px] h-[56px]  cursor-pointer  rounded-full text-white bg-green  absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2'><LupaSvg /></button>
                    </div >
                    <div className='bg bg-bgkulrang border border-bggray2 rounded-[33px]  w-[159px] relative flex items-center'>
                        <button className='cursor-pointer bg py-[16px] pl-[15px] pr-[17px] bg-qoraroq p-3 rounded-full  absolute left-1 top-1/2 -translate-y-1/2'><SavatLogo /></button>
                        <p className='right-6 absolute font-semibold text-[18px] font-font-family text-qoraroq'>Cart (0)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}