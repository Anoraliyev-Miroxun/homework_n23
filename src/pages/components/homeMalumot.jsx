import CustomButton from "../../components/button"

export const HomeMalumod = ({ id, nomi, kim, sanasi, oy, text, bg }) => {
    return (
        <div>
            <div className="w-[677px] h-[524px] relative flex flex-col items-center" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="bg-white rounded-full  w-[82px] h-[82px] flex flex-col justify-center items-center absolute left-[32px] top-[43px]">
                    <p className="text-[20px] text-center font-semibold text-qoraroq font-font-family "> {sanasi}</p>
                    <p className="text-[20px] text-center font-semibold text-qoraroq font-font-family ">{oy}</p>
                </div>
                <div className="bg-white rounded-[34px] bottom-0 shadow-md translate-y-[60px] w-[613px] px-[57px] pt-[46px] pb-[60px] absolute ">
                    <div>
                        <div className="flex gap-2  flex-row items-center mb-[18px]">
                            <span><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9593 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z" fill="#EFD372" /></svg></span>
                            <p className="text-[18px] font-normal text-qoraroq font-font-family ">{kim}</p>
                        </div>

                        <h3 className="text-[25px] font-extrabold mb-[2px] text-qoraroq font-font-family">{nomi}</h3>
                        <p className="text-[18px] font-normal mb-[15px] text-qoraroq font-second-family" >{text}</p>
                        <CustomButton>Read More</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}