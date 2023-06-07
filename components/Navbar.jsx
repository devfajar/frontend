import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiMenuAlt2 } from 'react-icons/hi'
import DarkModeSwitch from './DarkModeSwitch'

const Navbar = ({ showNav, setShowNav }) => {
    return (
        <div className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${ showNav ? "pl-56" : "" }`}>
            <div className="pl-4 md:pl-16">
                <HiMenuAlt2 className="h-8 w-8 text-gray-700 cursor-pointer dark:text-white" onClick={() => setShowNav(!showNav)} />
            </div>
            <div className="flex items-center pr-4 md:pr-16">
                <DarkModeSwitch className="mr-8" />
                <Menu as="div" className="relative inline-block text-left ml-5">
                    <Menu.Button className="inline-flex w-full justify-center items-center">
                        <span className="hidden md:block font-medium text-gray-700 dark:text-white">Nugik</span>
                        <BsChevronDown className="ml-2 h-4 w-4 text-gray-700 dark:text-white" />
                    </Menu.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform scale-95" enterTo="transform scale-100" leave="transition ease-in duration=75" leaveFrom="transform scale-100" leaveTo="transform scale-95">
                        <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
                            <div className="p-1">
                                <Menu.Item>
                                    <Link href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <AiOutlineSetting className="h-4 w-4 mr-2" />Settings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <BiLogOut className="h-4 w-4 mr-2" />Logout
                                    </Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar