import {Outlet} from 'react-router-dom';
import {Footer} from './footer.jsx';
import { Header } from "./header.jsx"

export const MainLayout=()=>{
    return(
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}