import GoggleIcon from '../assets/goggleicon.png'
import { Link } from "react-router-dom"

const InputSection = () => {
  return (
    <>
      <div>
        <h1 className='text-[#001F22] text-[26px] mt-12 lg:mt-0 lg:text-[32px] font-[500]'>Sign up</h1>

        <div className='flex place-content-center mt-6 cursor-pointer py-[10px] gap-4 border-[0.5px] border-[#CCCCCC] rounded-[24px]'>
            <img src={GoggleIcon} alt="goggle icon"  className='h-auto w-auto my-auto'/>
            <p className='text-[#303030] text-[10px] lg:text-[12px] font-[600] my-auto h-fit'>Sign up with Google</p>
        </div>

        <div className='flex gap-12 my-6 lg:my-4 xl:my-6'>
            <hr className='border-[1px] border-[#CCCCCC] w-full my-auto h-fit' />
            <p className='text-[#303030] text-[12px] font-[400] my-auto h-fit'>or</p>
            <hr className='border-[1px] border-[#CCCCCC] w-full my-auto h-fit'/>
        </div>

        {/* inputs */}
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="first-name" className='text-[#303030] text-[12px] lg:text-[13px] font-[600]'>First name</label>
                <input type="text" name="first-name" id="first-name" 
                className='border-[0.5px] border-[#CCCCCC] bg-[#FFFFFF] rounded-[8px] outline-none focus:outline-none px-2 py-2' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="last-name" className='text-[#303030] text-[12px] lg:text-[13px] font-[600]'>Last name</label>
                <input type="text" name="last-name" id="last-name" 
                className='border-[0.5px] border-[#CCCCCC] bg-[#FFFFFF] rounded-[8px] outline-none focus:outline-none px-2 py-2' />
            </div>

            <div className='flex flex-col col-span-2 gap-2'>
                <label htmlFor="email-address" className='text-[#303030] text-[12px] lg:text-[13px] font-[600]'>Email Address</label>
                <input type="email" name="email-address" id="email-address" 
                className='border-[0.5px] border-[#CCCCCC] bg-[#FFFFFF] rounded-[8px] outline-none focus:outline-none px-2 py-2' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='text-[#303030] text-[12px] lg:text-[13px] font-[600]'>Password</label>
                <input type="password" name="password" id="password" 
                className='border-[0.5px] border-[#CCCCCC] bg-[#FFFFFF] rounded-[8px] outline-none focus:outline-none px-2 py-2' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="confirm-password" className='text-[#303030] text-[12px] lg:text-[13px] font-[600]'>Confirm Password</label>
                <input type="password" name="confirm-password" id="confirm-password" 
                className='border-[0.5px] border-[#CCCCCC] bg-[#FFFFFF] rounded-[8px] outline-none focus:outline-none px-2 py-2' />
            </div>
        </div>

        <div className='flex gap-2 mt-4 lg:mt-2 xl:mt-4'>
            <input type="checkbox" name="" id="" className='h-[16px] w-[16px] my-auto border-[1px] border-[#162660] bg-transparent  rounded-[4px]' />
            <p className='text-[#303030] text-[12px] lg:text-[16px] font-[400] my-auto h-fit'>Agree to Terms and Conditions & Privacy Policy</p>
        </div>
        <div className=' w-full cursor-pointer mt-8 lg:mt-4 xl:mt-8'>
            <button className='text-[#FFFFFF] cursor-pointer text-[12px] font-[600] bg-gradient-to-b from-[#0BB9CD] to-[#001F22] w-full py-[14px] rounded-[8px] shadow-[0px_2px_4px_0px_#5C5C5C1A,0px_7px_7px_0px_#5C5C5C17,0px_16px_9px_0px_#5C5C5C0D,0px_28px_11px_0px_#5C5C5C03,0px_43px_12px_0px_#5C5C5C00]'>Create account</button>
        </div>
        <div className='flex place-content-center mt-4 lg:mt-2 xl:mt-4'>
            <p className='text-[12px] lg:text-[16px] text-[#303030] font-[400]'>Already have an account? <Link to="/login" className='text-[#0BB9CD] cursor-pointer font-[600]'>Sign in</Link></p>
        </div>
      </div>
    </>
  )
}

export default InputSection
