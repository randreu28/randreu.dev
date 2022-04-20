import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    /* In order to have a default <body> and <html> styles,
     rewrites all previous styles on route change.
    
    This way, whatever changes I make to the <body> or the <html> on specific rooutes,
     they won't be preserved on all routes. */
    const handleRouteChange = (url) => {
      document.getElementsByTagName("body")[0].classList =
        "bg-myDark text-white overflow-x-hidden";
      document.getElementsByTagName("html")[0].classList = "";
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
