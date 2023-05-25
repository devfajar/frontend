import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'

const Logo = () => {
  return (
    <nav className='border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800'>
                <div className='flex items-center'>
                    <Image src={logo} width={28} height={28} className='h-7 mr-3 ' alt='medium.ia logo' />
                    <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                        Medium.ai
                    </span>
                </div>

        </nav>
  )
}

export default Logo