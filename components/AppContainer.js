import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'


function AppContainer({children, router}) {
  return (
    <main>
        <Head>
            <title>Alex Ngun - Personal Website</title>
        </Head>
        <Navbar path={router.asPath}/>
            {children}
        <Footer/>
    </main>
  )
}

export default AppContainer