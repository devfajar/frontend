import React from 'react'
import Header from '../../components/auth/Header'
import Login from '../../components/auth/Login'
import Layout from '../../components/auth/Layout'

const LoginPage = () => {
  return (
    <Layout>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </Layout>
  )
}

export default LoginPage