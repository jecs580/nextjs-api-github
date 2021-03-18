import Navbar from './Navbar'
import Head from 'next/head'
const Layout =(props)=>(
    <>
        <Navbar/>
        <main className="container py-4">
            {props.children}
        </main>
    </>
)

export default Layout;