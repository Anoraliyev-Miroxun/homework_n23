import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { TypographyH1 } from '../components/topography.tsx';
import { KbdInputGroup } from './input-header.tsx';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"


export const Header = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);
    return (
        <>
            <div className="b container">
                <div className='flex items-center justify-between '>
                    <div className='b flex'>
                        <img className='b' src={logo} alt="#" />
                        <TypographyH1 className='text-[30px]'>Welcomback, Team!</TypographyH1>

                    </div>

                    <div className='b'>
                        <KbdInputGroup />
                    </div>
                    <div>
                        <Avatar>
                            <AvatarImage src={`${logo}`} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <Switch checked={dark} onCheckedChange={setDark} />
                    </div>
                </div>
            </div>
        </>
    )
}