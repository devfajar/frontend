import React from 'react'
import FormHeader from '../components/auth/FormHeader'
import FormLayout from '../components/auth/FormLayout'
import Register from '../components/auth/Register'

const RegisterPage = () => {
  return (
    <FormLayout title="Register">
      <FormHeader
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Register/>
    </FormLayout>    
  )
}

export default RegisterPage