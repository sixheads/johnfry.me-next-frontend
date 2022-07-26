import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Transition from '../components/Transition';

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper grid page">
        <div></div>
        <Nav />
      </div>
      <Transition>
        <div className="wrapper grid page">
          <Header />
          <>{children}</>
          <Footer />
        </div>
      </Transition>
    </>
  );
}
