import React from 'react'
import AuthLayout from '../components/AuthLayout'
import RegisterInput from '../components/RegisterInput'
import { useRouter } from 'next/router'
import { register } from './api/api'
// import FormHeader from '../components/auth/FormHeader'
// import FormLayout from '../components/auth/FormLayout'
// import Register from '../components/auth/Register'

const RegisterPage = () => {
  const router = useRouter()

  const onRegisterHandler = async (user) => {
    const { error } = await register(user)
    if (!error) {
      router.push('/login') // Menggunakan router.push untuk mengarahkan pengguna ke halaman yang diinginkan
    }
  }

  return (
    // <FormLayout title="Register">
    //   <FormHeader
    //     heading="Signup to create an account"
    //     paragraph="Already have an account? "
    //     linkName="Login"
    //     linkUrl="/login"
    //   />
    //   <Register/>
    // </FormLayout>

    <AuthLayout>
      <RegisterInput register={onRegisterHandler} />
    </AuthLayout>
  )
}

export default RegisterPage