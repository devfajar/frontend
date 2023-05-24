import React, { useState } from 'react'
import { loginFields } from '../constants/formFields'
import FormInput from './FormInput'
import FormActionButton from './FormActionButton'
import FormExtra from './FormExtra'

const fields=loginFields
let fieldsState = {}
fields.forEach(field=>fieldsState[field.id]='')

const Login = () => {

    const [loginState,setLoginState]=useState(fieldsState)

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        authenticateUser()
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }
    
    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field=>
                        <FormInput
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
            </div>

            <FormExtra/>
            <FormActionButton handleSubmit={handleSubmit} text="Login"/>

        </form>
    )
}

export default Login