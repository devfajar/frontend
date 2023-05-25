import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='flex flex-auto h-screen'>
          <Sidebar />
          <div className='grow'>
              <Navbar />
              <div className='m-5'>{props.children}</div>
          </div>
      </div>
    </>
  )
}

export default Layout