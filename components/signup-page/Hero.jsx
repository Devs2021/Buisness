
import styles from '../../styles/signup-page/hero.module.css'
import img3d1 from '../../assets/signup-page/3d1.png'
import img3d2 from '../../assets/signup-page/3d2.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className={`lg:py-44 py-20 grid grid-cols-4 ${styles.hero}`} >
            
             <div>
                <Image
                    src={img3d1}
                    width={270}
                    height={310}
                    alt="Sign up"
                />
            </div>
            <div className=" col-span-2 self-end text-center ">
                <h1 className="font-main font-semibold lg:text-7xl text-4xl capitalize text-white">
                    Sign Up
                </h1>
            </div>
            
            <div className="justify-self-end">
                <Image
                    src={img3d2}
                    width={270}
                    height={310}
                    alt="Sign up"
                />
            </div>
            
        </section>
    )
}

export default Hero
