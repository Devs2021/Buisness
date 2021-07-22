import Image from 'next/image'
import styles from '../../../styles/ui/ImgCard.module.css'
import client from '../../../assets/home-page/icons/client.svg'
import calendar from '../../../assets/home-page/icons/calendar.svg'
import dollar from '../../../assets/home-page/icons/dollar.svg'
import time from '../../../assets/home-page/icons/time.svg'


const ImgCard = ({img}) => {
    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <div className="rounded-md relative" style={{maxHeight:340}}>
                <Image
                    src={img}
                    width={380}
                    height={340}
                    alt="card img"
                />
                <div className="absolute w-full  top-0 p-2 left-0 flex items-center justify-between">
                    <div className="flex space-x-2">
                    <Image
                    src={time}
                    width={18}
                    height={18}
                    alt="card img"
                />
                         <span>13/07/2021</span>
                    </div>
                    <div className="flex -space-x-2">
                        <span className="inline-block w-6 h-6 rounded-full bg-dark-blue"></span>
                        <span className="inline-block w-6 h-6 rounded-full bg-dark-blue"></span>
                        <span className="inline-block w-6 h-6 rounded-full bg-dark-blue"></span>
                        <span className="inline-block w-6 h-6 rounded-full bg-dark-blue"></span>
                    </div>
                </div>
                <div className={`absolute w-full left-0 bottom-0 bg-white p-2 ${styles.glass}`}>
                   <div className="flex items-baseline space-x-2">
                   <Image
                    src={client}
                    width={18}
                    height={18}
                    alt="card img"
                />
                   <h5 className="font-secondary text-sm mb-2">Author of publication</h5>
                   </div>
                   <div className="flex items-baseline space-x-2">
                   <Image
                    src={calendar}
                    width={18}
                    height={18}
                    alt="card img"
                />
                   <h5 className="font-secondary text-sm mb-2">Duration of project</h5>
                   </div>
                   <div className="flex items-baseline space-x-2">
                   <Image
                    src={dollar}
                    width={14}
                    height={14}
                    alt="card img"
                />
                   <h5 className="font-secondary text-sm mb-2">6,000.000</h5>
                   </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-md font-secondary font-semibold my-4">Lorem ipsum dolor sit amet</h3>
                <button className="rounded-full bg-primary text-white fontmain capitalize px-8 py-2">more details</button>
            </div>
        </div>
    )
}

export default ImgCard