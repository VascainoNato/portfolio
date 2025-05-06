'use client'
import Image from "next/image"
import Logo from "../public/logo.png"
import { useState } from "react";

export default function Header() {
    const [lang, setLang] = useState<'pt' | 'en'>('pt');
    return (
      <header className="flex h-20 items-center pl-8 pr-8 bg-gray-50 justify-between border-b border-gray-200 w-full shadow-sm border-opacity-90 md:pl-10 md:pr-10 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16 xl:h-20 2xl:pl-20 2xl:pr-20 2xl:h-20 ">
        <div className="flex items-center gap-2">
          <>
          <Image 
            src={Logo}
            alt="Logo"
            className="w-10 xl:w-12 transition ease-in-out duration-800 hover:scale-[1.05]"
          />
           <h1 className="hidden md:flex md:text-sm md:text-neutral-800 xl:text-base md:transition md:ease-in-out md:duration-800 md:hover:scale-[1.05]">Rafael Satyro</h1>
          </>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <h1 className="text-sm text-neutral-800 xl:text-base transition ease-in-out duration-800 hover:scale-[1.05] cursor-pointer">About</h1>
          <h1 className="text-sm text-neutral-800 xl:text-base transition ease-in-out duration-800 hover:scale-[1.05] cursor-pointer">Projects</h1>
          <h1 className="text-sm text-neutral-800 xl:text-base transition ease-in-out duration-800 hover:scale-[1.05] cursor-pointer">Contact</h1>
          <div className="flex md:flex md:items-center md:gap-4">
            <button
              onClick={() => setLang(prev => (prev === 'pt' ? 'en' : 'pt'))}
              className="text-sm text-neutral-800 xl:text-base cursor-pointer transition ease-in-out duration-800 hover:scale-[1.05]"
            >
            {lang === 'pt' ? 'EN' : 'PT-BR'}
            </button>
          </div>
        </div>
      </header>
    )
  }
  