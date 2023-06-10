import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { register } from '../pages/api/api'
import { useRouter } from 'next/router'

const RegisterInput = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [error, setError] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        register({name, email, password, password_confirmation})
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h3 className="text-4xl font-bold text-gray-600 text-center mb-2">Register</h3>
            <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 undefined">Name</label>
                <div className="flex flex-col items-start">
                    <input type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" value={name} onChange={handleNameChange} />
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Email</label>
                <div className="flex flex-col items-start">
                    <input type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" value={email} onChange={handleEmailChange} />
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 undefined">Password</label>
                <div className="flex flex-col items-start">
                    <input type="password" name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 undefined">Confirm Password</label>
                <div className="flex flex-col items-start">
                    <input type="password" name="password_confirmation" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" value={password_confirmation} onChange={handlePasswordConfirmationChange} />
                </div>
            </div>
            {error && <p>{error}</p>}
            <div className="flex items-center justify-end mt-4">
                <Link className="text-sm text-gray-600 underline hover:text-gray-900" href="/login">Already registered?</Link>
                <button type="submit" className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false">Register
                </button>
            </div>
        </form>
    )
}

export default RegisterInput