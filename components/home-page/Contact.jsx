import styles from '../../styles/home-page/contact.module.css'
import ContactForm from './ui/ContactForm'
const Contact = () => {
    return (
        <section className="pb-40 relative">
            <div className="max-w-screen xl px-10">
                <div className={`text-center py-16 mb-20 px-8 rounded-lg ${styles.gradient}`}>
                    <div className="max-w-screen-md mx-auto">
                    <h2 className="font-secondary text-2xl font-semibold text-dark-blue mb-4">
                    Subscribe to the news-letter to recieve latest <br /> informtion about our services
                    </h2>
                    <p className="font-secondary font-light text-dark-blue text-sm mb-6 max-w-screen-md mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum
                    </p>
                    <form action="" className="relative w-full">
                        <div className="w-full">
                            <input type="email" name="email" id="email" placeholder="input your email address for best offers" className="w-full rounded-full bg-white py-3 px-6 font-secondary text-black text-sm font-light" />
                            <button className="absolute top-1/2 transform -translate-y-1/2 right-1 rounded-full font-semibold text-sm text-white font-secondary py-2 px-6" style={{backgroundColor: "#FF0001"}}>Subscribe</button>
                        </div>
                    </form>

                    </div>
                </div>
                <ContactForm/>
            </div>
        </section>
    )
}

export default Contact
