export const AboutExpert=({img,id,ism,kasbi,tarmoqlari})=>{
    return(
        <div className="shadow-md rounded-2xl hover:shadow-2xl">
            <img src={img} alt="" />
            <p>{ism}</p>
            <div>
                <p>{kasbi}</p>
                <div>{tarmoqlari}</div>
            </div>
            
        </div>
    )
}