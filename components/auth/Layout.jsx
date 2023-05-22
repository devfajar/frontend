import React from 'react'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            {props.children}
        </div>
    </div>
    </>
  )
}

export default Layout