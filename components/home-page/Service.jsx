import React from 'react'
import Title from './ui/Title'
import styles from '../../styles/home-page/service.module.css'


const Service = () => {
    return (
       <section className="py-40">
           <div>
               <div className="max-w-screen-xl mx-auto px-10">
                   <Title
                        title="Our Services"
                        question="What are the best offers we have for you?"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo."
                   
                   />
                   <div className="rounded-md border-8" style={{borderColor: "#fee9c1"}}>
                       <div className={`flex w-max mx-auto space-x-4 items-center justify-center ${styles.polygon} mb-6`}>
                           <h4 className="font-secondary font-semibold text-very-dark-blue underline text-md capitalize">
                               Marketing
                           </h4>
                           <h4 className="font-secondary  text-md capitalize">
                               Educations
                           </h4>
                           <h4 className="font-secondary  text-md capitalize">
                               Others
                           </h4>
                       </div>
                       <div className="grid grid-cols-3 gap-8 px-6 py-12 justify-center">
                           <div className="text-center">
                               <h3 className="text-2xl font-secondary font-semibold text-very-dark-blue mb-4">Seo</h3>
                               <p className="text-gray-600 text-left font-secondary text-sm mb-6">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bibendum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.
                               </p>
                               <button className="font-secondary font-semibold text-white px-6 py-1 text-md bg-primary rounded-full">
                                    Learn more
                               </button>
                           </div>
                           <div className="text-center">
                               <h3 className="text-2xl font-secondary font-semibold text-very-dark-blue mb-4">Email marketing</h3>
                               <p className="text-gray-600 text-left font-secondary text-sm mb-6">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bibendum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.
                               </p>
                               <button className="font-secondary font-semibold text-white px-6 py-1 text-md bg-primary rounded-full">
                                    Learn more
                               </button>
                           </div>
                           <div className="text-center">
                               <h3 className="text-2xl font-secondary font-semibold text-very-dark-blue mb-4">Paid Media Advertising</h3>
                               <p className="text-gray-600 text-left font-secondary text-sm mb-6">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bibendum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.
                               </p>
                               <button className="font-secondary font-semibold text-white px-6 py-1 text-md bg-primary rounded-full">
                                    Learn more
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default Service
