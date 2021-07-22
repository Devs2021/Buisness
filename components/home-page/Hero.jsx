import Image from 'next/image'
import heroImg from '../../assets/home-page/hero-img.png'
import manage from '../../assets/home-page/icons/manage.svg'
import  learning from '../../assets/home-page/icons/learning.svg'
import marketing from '../../assets/home-page/icons/marketing.svg'
import code from '../../assets/home-page/icons/code.svg'
import pexels from '../../assets/home-page/pexels.png'
import google from '../../assets/home-page/google.png'
import upler from '../../assets/home-page/upler.png'
import udemy from '../../assets/home-page/udemy.png'

const Hero = () => {
    return (
        <section className="flex justify-center items-center">
            <div>
            <div className="max-w-screen-xl mx-auto px-10 ">
               <div className="grid grid-cols-3 items-center">
               <div>
                    <h1 className="text-4xl text-very-dark-blue font-main font-semibold mb-6">
                    Empower your <span className="text-primary">Buisness</span>, Skill, Education and Project with <span className="text-primary">professionals</span>
                    </h1>
                    <p className="text-black font-secondary text-md mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu vitae sit congue venenatis hac viverra imperdiet viverra volutpat. 
                    </p>
                    <div className="flex space-x-4">
                    <button className="py-2 px-6 font-main font-semibold bg-primary text-white rounded-full">
                        Enroll Now
                    </button>
                    <button className="py-2 px-6 font-main font-semibold border border-primary  text-black rounded-full">
                        Contact Us
                    </button>
                    </div>
                </div>
                <div className="flex  justify-end col-span-2">
                    
                   <div className="relative">
                    <div className="absolute -left-32 top-40 z-20 flex flex-col space-y-16 justify-between">
                        <div className="flex flex-col items-start space-y-6">
                        <button className="ml-6 py-3 px-6 flex items-center justify-center  font-main font-semibold bg-white text-black shadow-lg rounded-full">
                            <Image
                                src={manage}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                            <span className="ml-4">Management</span>
                        </button>
                        <button className="py-3 px-6 flex items-center justify-center font-main font-semibold bg-white text-black shadow-lg rounded-full">
                        <Image
                                src={learning}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                            <span className="ml-4">Learning</span>
                        </button>
                        </div>
                        <div  className="flex flex-col items-start space-y-6">
                        <button className="ml-6 py-3 px-6 flex items-center justify-center font-main font-semibold bg-white text-black shadow-lg rounded-full">
                        <Image
                                src={marketing}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                            <span className="ml-4">Marketing</span>
                        </button>
                        <button className="ml-8 py-3 px-6 flex items-center justify-center font-main font-semibold bg-white text-black shadow-lg rounded-full">
                        <Image
                                src={code}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                            <span className="ml-4">Programming</span>
                        </button>
                        </div>
                    </div>
                   <Image
                    width={466}
                    height={697}
                    src={heroImg}
                    alt="hero img"
                    />
                   </div>

                </div>
               </div>
             
            </div>
            <div className="flex justify-evenly space-x-12 bg-very-light-gray py-4 px-10">
                    <Image
                    width={160}
                    height={60}
                    src={pexels}
                    alt="brand"
                    />
                    <Image
                    width={160}
                    height={53}
                    src={udemy}
                    alt="brand"
                    />
                    <Image
                    width={160}
                    height={40}
                    src={google}
                    alt="brand"
                    />
                    <Image
                    width={160}
                    height={40}
                    src={upler}
                    alt="brand"
                    />
               </div>
            </div>
        </section>
    )
}

export default Hero
