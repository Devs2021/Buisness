import Image from 'next/image'
import { useEffect, useState } from 'react';
import formImg from '../../../assets/home-page/form-img.jpg'

const ContactForm = () => {
    const [width, setWidth] = useState(250);
    const [height, setheight] = useState(360);

    useEffect(() => {
        if(typeof window !== undefined){
            if (window.innerWidth <= 768){
                setWidth(160);
                setheight(190)
            }
        }
    },[])

    return (
        <div className="relative lg:mt-0 mt-32 py-8 md:px-10 px-2 rounded-md max-w-screen-md mx-auto" style={{backgroundColor: '#eee'}}>
             <div className="lg:absolute lg:top-1/2 xl:-right-40 lg:-right-20 rounded-md transform text-center -translate-y-1/2">
                <Image
                    src={formImg}
                    width={width}
                    height={height}
                    alt="form image"
                />
            </div>
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
           
        </div>
    )
}

export default ContactForm
