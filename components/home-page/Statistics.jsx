import Title from "./ui/Title"
import Image from 'next/image'
import person from '../../assets/home-page/icons/person.svg'
import bag from '../../assets/home-page/icons/bag.svg';
import client from '../../assets/home-page/icons/client.svg'


const Statistics = () => {
    return (
       <section className="pb-40 ">
           <div className="py-10" style={{backgroundColor: 'rgba(52, 63, 86, 0.02)'}}>
           <div className="max-w-screen-xl px-10">
                <Title
                    title="Success History"
                    question="Do you know why we are the Best?"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
                />

                <div className="flex items-center justify-center space-x-6">
                    <div>
                        <h4 className="font-main text-very-dark-blue mb-4">We are trusted by</h4>
                        <div className="flex items-center space-x-2">
                            <Image
                                src={person}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                            <span className="font-main font-semibold text-3xl text-dark-blue">5K+</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-main text-very-dark-blue mb-4">Project realized</h4>
                        <div className="flex items-center space-x-2">
                            <Image
                                src={bag}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                            <span className="font-main font-semibold text-3xl text-dark-blue">200+</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-main text-very-dark-blue mb-4">Happy Clients</h4>
                        <div className="flex items-center space-x-2">
                            <Image
                                src={client}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                            <span className="font-main font-semibold text-3xl text-dark-blue">600+</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>


        </section>
    )

    }

    export default Statistics;