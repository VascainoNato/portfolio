'use client'
import Image from "next/image"
import Logo from "../public/logo.png"
import { useState } from "react";

export default function Header() {
    const [lang, setLang] = useState<'pt' | 'en'>('pt');
    return (
      <header className="flex h-20 items-center pl-8 pr-8 bg-gray-100 justify-between md:pl-10 md:pr-10 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16 xl:h-22 2xl:pl-20 2xl:pr-20">
        <Image 
            src={Logo}
            alt="Logo"
            className="h-12 w-12 xl:w-14 xl:h-14"
        />
        <div className="flex items-center gap-4 md:gap-6">
            <h1 className="text-sm text-neutral-800 xl:text-base">About</h1>
            <h1 className="text-sm text-neutral-800 xl:text-base">Projects</h1>
            <h1 className="text-sm text-neutral-800 xl:text-base">Contact</h1>
            <div className="flex md:flex md:items-center md:gap-4">
                <button
                    onClick={() => setLang(prev => (prev === 'pt' ? 'en' : 'pt'))}
                    className="text-sm text-neutral-800 transition xl:text-base cursor-pointer"
                    >
                    {lang === 'pt' ? 'EN' : 'PT-BR'}
                </button>
            </div>
        </div>
      </header>
    )
  }
  