import React from 'react'
import Head from 'next/head'

export default function Layout({title, children}) {
  return (
      <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex justify-center max-w-4xl xl:max-w-5xl mx-auto my-12'>
        {children}
      </div>
    </>
  )
}