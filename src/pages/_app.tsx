import type { AppProps } from "next/app";
// Styles
import "../styles/react-dat-gui.scss";
import "../styles/styles.global.scss";

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />;
}

export default MyApp;
