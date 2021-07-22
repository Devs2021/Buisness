import Image from "next/image"
import Title from "./ui/Title"
import map from '../../assets/home-page/map.png'

const Clients = () => {
    return (
        <section className="pb-20 ">
             <Title
               title=""
               question="What our clients say about us?"
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo."
           />
            <div className="relative">
                <Image
                    src={map}
                    width={1440}
                    height={970}
                    alt="map"
                />
            </div>
       
           <div></div>
        </section>
    )
}

export default Clients
