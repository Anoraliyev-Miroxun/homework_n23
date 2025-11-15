import logo from '../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { LupaSvg } from '../assets/icons/header-lupa.jsx';
import { SavatLogo } from '../assets/icons/header-savat.jsx';



export const Header = () => {
    return (
        <div className="contianer b">
            <div className='flex gap-[150px] items-center h-[204px] bg-'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex gap-[38px]'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/"}>About</Link>
                    <Link to={"/"}>Pages</Link>
                    <Link to={"/"}>Shop</Link>
                    <Link to={"/"}>Projects</Link>
                    <Link to={"/"}>News</Link>
                </div>
                <div className='flex gap-[18px] ml-[130px]'>
                    <div className='bg-gray w-[376px] flex rounded-[36px] relative pl-2.5 p-5'>
                        <input className='outline-none' type="text" />
                        <button className='w-[56px] h-[56px] b rounded-full text-white bg-green w-6 h-6 absolute bottom-1/2 right-0 -translate-x-1/2 translate-y-1/2'><LupaSvg /></button>
                    </div >
                    <div className='b rounded-[33px] w-[159px] relative'>
                        <button className='bg-dark p-3 rounded-full m-4 absolute   right-0'><SavatLogo /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}