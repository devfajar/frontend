import { Switch } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { BsSun, BsMoonStars } from 'react-icons/bs'

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkMode])
    
    return (
        <Switch checked={darkMode} onChange={setDarkMode} className={`${ darkMode ? 'bg-orange-500' : 'bg-gray-900' } relative inline-flex h-6 w-11 items-center rounded-full`}>
            <span className="sr-only">Enable notifications</span>
            <span className={`${ darkMode ? 'translate-x-6' : 'translate-x-1' } inline-block h-4 w-4 transform rounded-full transition`}>
              { darkMode ? <BsSun className='text-white' /> : <BsMoonStars className='text-white' /> }
            </span>
        </Switch>
  )
}

export default DarkModeSwitch