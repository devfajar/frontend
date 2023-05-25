import React, { useState } from "react"
import Link from "next/link"
import foto from '../public/owi.jpg'
import Image from 'next/image'

export default function Navbar() {
    const Menus = ['Profile', 'Logout']
    const [isOpen, setIsOpen] = useState(false)

    const openHandler = () => {
      setIsOpen(!isOpen)
    }

    return (
    <nav className='bg-gray-100 border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex justify-between items-center mx-auto pt-3'>

        <div className='flex items-center mx-auto'>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>Welcome</span>
        </div>

        <div className='flex items-center justify-end pr-4'>
          <div className="relative">
            <Image src={foto} width={40} height={40} alt="foto profile" className="h-10 w-10 object-cover border-1 border-gray-400 rounded-full cursor-pointer" onClick={openHandler} />
            { isOpen && (
                <div className="bg-white p-4 w-40 shadow-lg rounded-sm absolute -left-28 top-11">
                  <ul>
                    {Menus.map((menu) => (
                      <li key={menu} className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100">{menu}</li>
                    ))}
                  </ul>
                </div>
            )}
          </div>
        </div>

      </div>
    </nav>
    );
}