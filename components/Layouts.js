import nprogress from 'nprogress'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import Navbar from './Navbar'
const Layout =({children, footer=true})=>{
    const router = useRouter();
    useEffect(()=>{
        const handlerChange = url=>{
            console.log(url);
            nprogress.start();
        }

        router.events.on('routeChangeStart',handlerChange)
        router.events.on('routeChangeComplete',()=>nprogress.done());
        return ()=>{
            router.events.off('routeChangeStart',handlerChange);
        }
    })
    return (
    <>
        <Navbar/>
        <main className="container py-4">
            {children}
        </main>
        {
            footer && (
                <footer className="bg-light text-dark text-center">
                    <div className="container p-4">
                        <h1>&copy; Jorge Callisaya Portfolio</h1>
                        <p>2000 -{new Date().getFullYear()}</p>
                        <p>All rights Reserverd.</p>
                    </div>
                </footer>
            )
        }
        
    </>
    )
}

export default Layout;