import Link from 'next/link'
import React from 'react'

const LoginInput = () => {
  return (
    <>
        <form>
            <h3 className="text-4xl font-bold text-gray-600 text-center mb-2">Login</h3>
            <div className="mb-2">
                <label for="email" className="block text-sm font-semibold text-gray-800">Email</label>
                <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <div className="mb-2">
                <label for="password" className="block text-sm font-semibold text-gray-800">Password</label>
                <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Login</button>
            </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">Dont have an account?
            <Link href="/register" className="font-medium text-gray-600 hover:underline"> Register</Link>
        </p>
    </>
  )
}

export default LoginInput