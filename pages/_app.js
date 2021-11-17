import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import Jump from "../components/Jump";
import Footer from "../components/Footer";
import { useEffect, useRef} from 'react'

function MyApp({ Component, pageProps }) {

  const main = useRef();

  useEffect(() => {
    if (localStorage.getItem('dark') === null) {
      localStorage.setItem('dark', 'false');
    }
  
    if (localStorage.getItem('dark') === 'true') {
      main.current.classList.add('dark');
    } else {
      main.current.classList.remove('dark');
    }
  });

  return (
    <div id="main" ref={main}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Jump />
    </div>
  );
}

export default MyApp;
