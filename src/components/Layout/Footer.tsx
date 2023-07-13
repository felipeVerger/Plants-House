import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-full h-24 bg-secondaryBg flex flex-col justify-center items-center">
            <div className='flex flex-col justify-center items-center gap-4 py-4'>
                <div className='flex gap-4'>
                    <BsInstagram className='text-textPrimary text-3xl hover:text-black cursor-pointer'/>
                    <BsLinkedin className='text-textPrimary text-3xl hover:text-black cursor-pointer'/>
                    <BsGithub className='text-textPrimary text-3xl hover:text-black cursor-pointer'/>
                </div>
                <p className='text-textPrimary text-xs'>Copyright © 2023 - Felipe Verger</p>
            </div>
    </footer>
  )
}

export default Footer