
import ContactForm from './ui/ContactForm'
import Subscribe from './ui/Subscribe'
const Contact = () => {
    return (
        <section className="pb-40 relative">
            <div className="max-w-screen xl px-10">
                <Subscribe/>
                <ContactForm/>
            </div>
        </section>
    )
}

export default Contact
