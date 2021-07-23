import Image from 'next/image'
import pexels from '../../assets/global/pexels.png'
import google from '../../assets/global/google.png'
import upler from '../../assets/global/upler.png'
import udemy from '../../assets/global/udemy.png'

const Brands = () => {
    return (
        <div className="flex justify-evenly space-x-12 bg-gray-50 py-4 px-10">
        <Image
        width={160}
        height={60}
        src={pexels}
        alt="brand"
        />
        <Image
        width={160}
        height={53}
        src={udemy}
        alt="brand"
        />
        <Image
        width={160}
        height={40}
        src={google}
        alt="brand"
        />
        <Image
        width={160}
        height={40}
        src={upler}
        alt="brand"
        />
   </div>
    )
}

export default Brands
