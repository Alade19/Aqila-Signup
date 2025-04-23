import InputSection from "../Components/InputSection"
import MobilePart from "../Components/MobilePart"
import SidebarInputs from "../Components/SidebarInputs"


const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="hidden lg:block bg-gradient-to-b from-[#0BB9CD] to-[#001F22] min-h-screen">
          <SidebarInputs />
        </div>
        <div className="bg-[#FFFFFF] h-screen col-span-2">
          <div className=" h-fit w-full lg:w-[450px] xl:w-[500px] px-4 md:px-24 lg:px-0 md:mt-16 lg:mt-8 xl:mt-20 lg:ml-12 xl:ml-20">
            <div><MobilePart /></div>
            <div><InputSection/></div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
