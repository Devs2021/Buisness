import Image from 'next/image'
import formImg from '../../../assets/home-page/form-img.jpg'

const ContactForm = () => {
    return (
        <div className="relative py-8 px-10 rounded-md max-w-screen-md mx-auto" style={{backgroundColor: '#eee'}}>
            <h3 className="font-secondary font-semibold mb-6">Contact Form</h3>
            <form action="" className="max-w-lg">
                <div className="mb-4">
                    <label htmlFor="Name" className="block mb-2 font-secondary text-sm">Name</label>
                    <input type="text" name="name" id="name" className="bg-white rounded-sm py-3 px-3 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="Email" className="block mb-2 font-secondary text-sm">Email Adress</label>
                    <input type="email" name="email" id="email" className="bg-white rounded-sm py-3 px-3 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 font-secondary text-sm">Mesage</label>
                    <textarea name="message" id="message"  rows="8" className="bg-white rounded-sm py-3 px-3 w-full">
                    </textarea>
                </div>
                <button className="rounded-full font-main font-semibold bg-white px-6 py-2">Send</button>
            </form>
            <div className="absolute top-1/2 -right-40 rounded-md transform  -translate-y-1/2">
                <Image
                    src={formImg}
                    width={250}
                    height={360}
                    alt="form image"
                />
            </div>
        </div>
    )
}

export default ContactForm
