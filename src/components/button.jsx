import {StrelkaBtn} from '../assets/icons/btn-strelka.jsx';
export default function CustomButton({
    children,
    onClick,
    className = "",
    showArrow = true, // yangi prop
}) {
    return (
        <button
            onClick={onClick}
            className={`text-[20px] font-semibold px-[28px] py-[39px] w-[220px] rounded-[16px] h-[79px] justify-center bg bg-qoraroq text-white flex items-center gap-2.5 cursor-pointer hover:text-qoraroq hover:bg-btnsariq ${className}`}
        >
            {children}
            {showArrow && <StrelkaBtn className="hover:bg bg-qoraroq" />}
        </button>
    );
}
