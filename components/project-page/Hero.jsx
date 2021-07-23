import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import heroImg from '../../assets/project-page/hero-img.png'
import Brands from '../ui/Brands'

const Hero = () => {
    return (
        <section className=" ">
            <div className="bg-dark-blue py-20">
            <div className="max-w-screen-xl md:px-10 px-4 mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center">
               <div>
                    <h1 className="text-4xl text-white font-main font-semibold mb-6">
                    Achieve your goal with professionals or guarantee success
                    </h1>
                    <p className="text-white font-secondary font-light text-md mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu vitae sit congue venenatis hac 
                    </p>
                    <form action="">
                        <div className="relative flex ">
                            <input type="text" className="bg-white lg:w-96 md:w-56 w-full rounded-sm py-2" />
                            <button className="rounded-sm py-2 px-4 bg-primary text-sm text-white">
                            <span className="w-6 h-6 inline-block"> <FontAwesomeIcon icon={faSearch}/></span>
                            </button>
                        </div>
                    </form>
                   
                    </div>
                    <div>
                        <Image
                            src={heroImg}
                            width={500}
                            height={665}
                            alt="hero img"
                        />
                    </div>
                </div>
            </div>
            </div>
            <Brands/>

        </section>
    )
}

export default Hero
