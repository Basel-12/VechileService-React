
import Navbar from './NavBar/Navbar'
import Footer from './Footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}
