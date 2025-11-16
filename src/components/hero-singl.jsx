export const HeroSingle = ({ bg, content }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="contianer">
                <div className="flex flex-col justify-center items-center py-[200px]">
                    <h1 className="text-[55px] font-extrabold font-font-family text-qoraroq">{content}</h1>
                </div>
            </div>
        </div>
    )
}