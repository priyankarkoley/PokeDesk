import React from 'react'
import Head from 'next/head'

export default function Layout({title, children}) {
  return (
      <>
      <Head>
        <title>{title}</title>
      </Head>
      
      <div className='max-w-4xl xl:max-w-5xl mx-auto m-11'>
        {children}
      </div>
    </>
  )
}