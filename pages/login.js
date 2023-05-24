import React from 'react'
import FormHeader from '../components/auth/FormHeader'
import FormLayout from '../components/auth/FormLayout'
import Login from '../components/auth/Login'

const login = () => {
  return (
    <FormLayout title="Login">
      <FormHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/register"
      />
      <Login />
    </FormLayout>
  )
}

export default login