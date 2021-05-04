import './styles.scss';
import '../public/styles/home.scss';
// import {Provider} from 'next-auth/client';


export default function MyApp({ Component, pageProps }) {
  return (
    // <Provider
    //   options={{keepAlive: 0, clientMaxAge: 3600}}
    //   session={pageProps.session}
    // >
    <Component {...pageProps} />
    // </Provider>
  )
}

