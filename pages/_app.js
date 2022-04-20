import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => { /* On route change, check url and edit <body> style accordingly */
    
    const body = document.getElementsByTagName("body")[0];
    const handleRouteChange = (url) => {
      if(url == "/portfolio/job-listing"){
        body.classList="bg-white";
      }
      else{
        body.classList="bg-myDark text-white overflow-x-hidden"
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />;
}

export default MyApp;
