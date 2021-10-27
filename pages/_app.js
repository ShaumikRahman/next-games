import "../styles/globals.scss";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div id="main">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
