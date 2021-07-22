import ImgCard from "./ui/ImgCard"
import Title from "./ui/Title"
import project1 from '../../assets/home-page/project1.jpg'
import project2 from '../../assets/home-page/project2.jpg'
import project3 from '../../assets/home-page/project3.jpg'
import Image from "next/image"
import about from '../../assets/home-page/aboutus.jpg';
import styles from '../../styles/home-page/projects.module.css'

const Projects = () => {
    return (
        <section className="pb-40 ">
             <Title
                    title="Our Project"
                    question="We are your Best choice, now and ever"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
                />
           <div className="py-16 px-10 bg-dark-blue">
            <div className="max-w-screen-xl px-10">
                    <div className="grid grid-cols-3 gap-12">
                    <ImgCard img={project1}/>
                    <ImgCard img={project2}/>
                    <ImgCard img={project3}/>
                    </div>
                </div>
            </div>
            <div className="max-wscreen-xl mx-auto px-10">
            <div className="pt-20 grid grid-cols-2 justify-center gap-8">
                    <div className={`${styles.about} relative w-max`}>
                        <Image
                            src={about}
                            width={495}
                            height={350}
                            alt="about us"
                        />
                    </div>
                    <div className="self-center">
                        <h4 className="font-secondary font-light text-sm mb-4">About Us</h4>
                        <h3 className="font-main font-semibold text-2xl mb-4">Who are we and what we do?</h3>
                        <p className="font-secondary font-light text-sm mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit.
                        </p>
                        <button className="rounded-lg bg-primary text-white fontmain capitalize px-8 py-2">read more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
