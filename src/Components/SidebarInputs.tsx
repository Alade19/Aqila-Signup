import WhiteLogo from '../assets/whitelogo.png';
import AqilaImage from '../assets/aqilaimage.png';

const SidebarInputs = () => {
  return (
    <>
        <div className='lg:mt-16 xl:mt-20 lg:ml-10 xl:ml-12'>
            {/* logo */}
            <div>
                <img src={WhiteLogo} alt="white logo" className='h-auto w-auto'/>
            </div>
            {/* content */}
            <div className='lg:mt-8 xl:mt-10 lg:mb-10  xl:mb-14'>
               <h1 className='text-[#FFFFFF]  lg:text-[28px] xl:text-[32px] font-[600] lg:leading-8 xl:leading-10'>Let’s turn your notes<br />into knowledge.</h1> 
               <p className='text-[#FFFFFF] lg:text-[16px] xl:text-[20px] font-[400] mt-4 lg:leading-4 xl:leading-6'>With Aqila, studying is easier, faster,<br />and smarter.</p>
            </div>
            {/* img */}
            <div>
                <img src={AqilaImage} alt="Aqila image" className='h-auto w-3/4 xl:w-auto'/>
            </div>
        </div>
    </>
  )
}

export default SidebarInputs
