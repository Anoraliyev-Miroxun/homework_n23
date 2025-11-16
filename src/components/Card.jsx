import { Link } from "react-router-dom"
import { CustomYulduz } from "./cutomYulduzlar"

export const Card = ({ id, nomi, yulduzlarSoni, yangiNarxi, eskiNarxi, category, img }) => {
    return (
        <Link to={`/shopsingle/${id}`}>
            <div className="hover:shadow-2xl bg bg-bgkulrang rounded-2xl p-5 shadow-lg">
                <p className="py-1.5 px-3 inline-block bg bg-qoraroq text-white rounded-[8px] text-[15px] font-font-family font-semibold">{category}</p>
                <img src={img} alt="rasm" />
                <p className="text-[20px] font-semibold font-font-family text-qoraroq mb-[13px]">{nomi}</p>
                <hr className="text-[#b8b8b8] mb-1.5" />
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <p className=" mr-2 line-through text-[15px] font-semibold font-second-family text-[#b8b8b8]">${eskiNarxi} </p>
                        <p className=" text-[18px] font-bold font-second-family text-qoraroq"> ${yangiNarxi}</p>
                    </div>
                    <CustomYulduz soni={yulduzlarSoni} />
                    
                </div>


            </div>
        </Link>
    )
}