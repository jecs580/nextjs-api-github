import Navbar from './Navbar'
const Layout =(props)=>(
    <>
        <Navbar/>
        {props.children}
    </>
)

export default Layout;