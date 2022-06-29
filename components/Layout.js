import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='wrapper grid'>
      <Nav />
      <Header />
      <>{children}</>
      <Footer />
    </div>
  )
}
