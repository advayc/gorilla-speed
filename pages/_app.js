import '@/styles/globals.css';
import '@/styles/Home.module.css';
import '@/styles/navbar.css';
import '@/styles/footer.css';
import AnimatedCursor from "react-animated-cursor"

function App({ Component, pageProps }) {
  <AnimatedCursor />

  return <Component {...pageProps} />;
}

export default App;