import Layout from '../components/Layout';
// import Transition from '../components/Transition';
import '../styles/globals.scss';
import '../styles/transition.scss';

function MyApp({ Component, pageProps }) {
  return (
    // <Transition>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Transition>
  );
}

export default MyApp;
