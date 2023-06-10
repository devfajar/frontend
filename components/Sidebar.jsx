import React, { forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'
import { FaUserGraduate } from 'react-icons/fa'

const Sidebar = forwardRef(({ showNav }, ref) => {
    const router = useRouter()
    
    return (
        <div ref={ref} className='fixed w-56 h-full bg-white shadow-sm dark:shadow-sm dark:shadow-white dark:bg-gray-900 transition-all duration-[400ms]'>
            <div className='flex justify-center mt-6 mb-14'>
                <h1 className='uppercase text-2xl font-bold dark:text-white'>skripsi</h1>
            </div>
    
            <div className='flex flex-col'>
                <Link href='/'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${ router.pathname == '/' ? 'bg-orange-100 text-orange-500' : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500' }`}>
                        <div className='mr-2'>
                            <AiOutlineHome className='h-5 w-5' />
                        </div>
                        <div>
                            <p>Home</p>
                        </div>
                    </div>
                </Link>
                <Link href='/mahasiswa'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${ router.pathname == '/mahasiswa' ? 'bg-orange-100 text-orange-500' : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500' }`}>
                        <div className='mr-2'>
                            <FaUserGraduate className='h-5 w-5' />
                        </div>
                        <div>
                            <p>Mahasiswa</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
      )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar