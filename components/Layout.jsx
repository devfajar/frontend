import React from 'react'
import Navigation from './Navigation'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navigation />
      <div className='container mx-auto'>
        {props.children}
      </div>
    </>
  )
}

export default Layout