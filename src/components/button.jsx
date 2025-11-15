import React from "react";
import {StrelkaBtn} from "../assets/icons/btn-strelka.jsx";


export default function CustomButton({
    children,
    onClick,
    className = "",
}) {
    return (
        <button
            onClick={onClick}
            className={`b text-[20px] font-semibold px-[28px] py-[39px] w-[220px] rounded-[16px] h-[79px] justify-center bg bg-qoraroq text-white flex items-center gap-2.5 cursor-pointer hover:text-qoraroq hover:bg-btnsariq ${className}`}
        >
            {children}
            <StrelkaBtn className="hover:bg bg-qoraroq" />
        </button>
    );
}
