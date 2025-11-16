import { HeroSingle } from "../components/hero-singl"
import heroBg from '../assets/icons/shop/hero-bg.svg';
import { Card } from "../components/Card";
import { homeCardData } from '../data/homecardData';

export const Shop = () => {
    return (
        <>

            <HeroSingle bg={heroBg} content={"Shop"} />
            <section>
                <div className="contianer">
                    <div className='grid grid-cols-4 gap-5 mt-[90px]'>
                        {
                            homeCardData.slice(0, 12).map((i) => {
                                return <Card key={i.id} id={i.id} nomi={i.nomi} category={i.category} eskiNarxi={i.eskiNarxi} yangiNarxi={i.yangiNarxi} img={i.image} yulduzlarSoni={i.yulduzlarSoni} />
                            })
                        }
                    </div>
                </div>
            </section>

          

        </>
    )
}