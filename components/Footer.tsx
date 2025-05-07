import Image from 'next/image'
import twitter from '../public/twitter.png';
import github from '../public/github.png';
import linkedin from '../public/linkedin.png';

export default function Footer() {
  return (
    <footer className="flex h-32.5 bg-gray-200 flex-col items-center md:h-20 md:w-full xl:h-18">
      <div className="flex w-full h-32.5 md:h-20 xl:h-18">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center text-gray-700 gap-3 
          md:flex-row md:pr-10 md:pl-10 md:w-full md:justify-between md:mx-0 md:max-w-none
          lg:pr-12 lg:pl-12 
          xl:pl-16 xl:pr-16
          2xl:pl-20 2xl:pr-20">
          <div className="flex items-center justify-center gap-3">
            <a href="https://x.com/Vascain0Nato" target="_blank" rel="noopener noreferrer">
              <Image src={twitter} alt="Twitter" className='w-12 transition ease-in-out duration-800 hover:scale-[1.05] cursor-pointer'/>
            </a>
            <a href="https://github.com/VascainoNato" target="_blank" rel="noopener noreferrer">
              <Image src={github} alt="Github" className='w-12 transition ease-in-out duration-800 hover:scale-[1.05] cursor-pointer'/>
            </a>
            <a href="https://www.linkedin.com/in/rafael-pereira-satyro/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin} alt="Linkedin" className='w-12 transition ease-in-out duration-800 hover:scale-[1.05] cursor-pointer'/>
            </a>
          </div>
          <p className="text-sm transition ease-in-out duration-800 hover:scale-[1.05] md:text-md lg:text-base">© 2025 Rafael Satyro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  