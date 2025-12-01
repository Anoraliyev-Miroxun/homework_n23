import type React from "react";
import { Link, useLocation } from "react-router-dom"
import type {HTMLProps} from 'react';

export const ActivLink=({to,children,}:{to:string,children:React.ReactNode})=>{
    const location=useLocation();

    return(<Link className={`${location.pathname===to?"bg-blue-300":""} bg flex items-center gap-3`} to={to}>{children}</Link>
    )
}