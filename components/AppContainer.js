import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import { AnimatePresence } from 'framer-motion'

function AppContainer({children, router}) {
  return (
    <main>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Alex's homepage" />
            <meta name="author" content="Alex Ngun" />
            <link rel="icon" href="/favicon.ico" />
            <title>Alex Ngun - Personal Website</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Monoton&family=Pacifico&display=swap" rel="stylesheet"/>
        </Head>
        <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={()=>{
                if(typeof window !== 'undefined') {
                    window.scrollTo({ top: 0 })
                }
            }}
        >
            <Navbar path={router.asPath}/>
            {children}
        </AnimatePresence>
        <Footer/>
    </main>
  )
}

export default AppContainer