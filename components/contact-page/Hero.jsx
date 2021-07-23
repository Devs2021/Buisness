import Image from 'next/image'
import contactImg from '../../assets/contact-page/contact-img.jpg'
import ContactForm from '../home-page/ui/ContactForm'
import Subscribe from '../home-page/ui/Subscribe'



const Hero = () => {
    return (
        <section>
            <div className=" bg-dark-blue h-96">
                
            </div>
            <div className=" mx-auto w-max   transform -translate-y-1/2">
                    <Image
                        src={contactImg}
                        width={880}
                        height={390}
                        alt="contact img"
                    />
                </div>
            <div className="pb-20 text-center max-w-screen-lg mx-auto">
                <h2 className="font-secondary font-semibold text-3xl mb-6">
                Get In Touch With Us
                </h2>
                <p className="font-secondary font-light text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit  facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque 
                </p>
            </div>
            <div className="max-w-screen-xl px-10 mx-auto">
              <div className="mb-10">
              <ContactForm/>
              </div>
                <Subscribe/>
                
               
            </div>
        </section>
    )
}

export default Hero
