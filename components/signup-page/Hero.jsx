
import styles from '../../styles/signup-page/hero.module.css'
import img3d1 from '../../assets/signup-page/3d1.png'
import img3d2 from '../../assets/signup-page/3d2.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className={`py-44 relative  ${styles.hero}`} >
             <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
                <Image
                    src={img3d1}
                    width={270}
                    height={310}
                    alt="Sign up"
                />
            </div>
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                <Image
                    src={img3d2}
                    width={270}
                    height={310}
                    alt="Sign up"
                />
            </div>
            <div className="max-w-screen-xl mx-auto px-10 text-center ">
                <h1 className="font-main font-semibold text-7xl capitalize text-white">
                    Sign Up
                </h1>
            </div>
        </section>
    )
}

export default Hero
