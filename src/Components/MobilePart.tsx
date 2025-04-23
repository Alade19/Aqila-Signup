import ColoredLogo from '../assets/coloredlogo.png';

const MobilePart = () => {
  return (
    <>
      <div className='lg:hidden mt-8 lg:mt-0'>
        <img src={ColoredLogo} alt="Colored Logo" className='h-auto w-auto' />
        <h1 className='text-[#001F22] text-[24px] font-[500] leading-7 mt-6'>Let’s turn your notes into <br />knowledge.</h1>
        <p className='text-[#001F22] text-[16px] font-[500] leading-5 mt-2'>With Aqila, studying is easier, faster,<br />and smarter.</p>
      </div>
    </>
  )
}

export default MobilePart
