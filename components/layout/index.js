import React from 'react'
import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>fantom blog</title>
            </Head>

            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout