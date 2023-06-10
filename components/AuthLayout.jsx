import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                { children }
            </div>
        </div>
    </div>


  )
}

export default AuthLayout