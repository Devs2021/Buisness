import ImgCard from '../home-page/ui/ImgCard'

import project3 from '../../assets/global/project3.jpg'
import project4 from '../../assets/global/project4.jpg'

const DoneProjects = () => {
    return (
       <section className="pb-36">
           <div className="bg-gray-50 py-20">
               <div className="max-w-screen-xl md:px-10 px-4 mx-auto">
                   <div className="mb-16">
                       <div className="w-max px-6 rounded py-2" style={{backgroundColor: "#F5E6CA"}}>
                            <h3 className="text-primary font-main font-semibold">Projects done</h3>  
                       </div>
                       <div className="px-8 rounded py-10" style={{backgroundColor: "#F5E6CA"}}>
                            <p className="font-secondary font-light text-sm max-w-lg mx-auto mb-6 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu vitae sit congue venenatis hac Arcu vitae sit congue venenatis hac 
                            </p>
                            <div className="flex items-center flex-wrap justify-center space-x-4">
                                <h4 className="font-secondary font-semibold underline text-lg capitalize">All project</h4>
                                <h4 className="font-secondary font-light text-lg capitalize">Marketing project</h4>
                                <h4 className="font-secondary font-light text-lg capitalize">programming project</h4>
                                <h4 className="font-secondary font-light text-lg capitalize">other project</h4>
                            </div>
                       </div>
                   </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    <ImgCard img={project3}/>
                   <ImgCard img={project4}/>
                   <ImgCard img={project3}/>
                   <ImgCard img={project3}/>
                   <ImgCard img={project4}/>
                   <ImgCard img={project3}/>
                    </div>

               </div>
           </div>
       </section>
    )
}

export default DoneProjects
