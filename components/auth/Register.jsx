import React, { useState } from 'react'
import { signupFields } from '../constants/formFields'
import FormInput from './FormInput'
import FormActionButton from './FormActionButton'
import Router from 'next/router'
import axios from 'axios'

const Register = () => {
  const fields = signupFields

  // define state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  //define state validation
  const [validation, setValidation] = useState([])

  //function "registerHanlder"
  const registerHandler = async (e) => {
    e.preventDefault()
    
    //initialize formData
    const formData = new FormData()

    //append data to formData
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('password_confirmation', passwordConfirmation)

    //send data to server
    await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/register`, formData)
    .then(() => {

        //redirect to logi page
        Router.push('/login')
    })
    .catch((error) => {

        //assign error to state "validation"
        setValidation(error.response.data)
    })
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={registerHandler}>
      <div className="">
        {
          fields.map(field=>
                  <FormInput
                      key={field.id}
                      // handleChange={handleChange}
                      // value={signupState[field.id]}
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
        <FormActionButton handleSubmit={registerHandler} text="Signup" />
      </div>
  </form>
  )
}

export default Register