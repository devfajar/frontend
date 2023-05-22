import React from 'react'
import Register from '../../components/auth/Register'
import Header from '../../components/auth/Header'
import Layout from '../../components/auth/Layout'

const RegisterPage = () => {
  return (
    <Layout title="Register">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Register/>
    </Layout>    
  )
}

export default RegisterPage