import '../styles/globals.css'
import AppContainer from '../components/AppContainer'


function MyApp({ Component, pageProps, router }) {
  return (
    <AppContainer router={router}>
      <Component {...pageProps} />
    </AppContainer>
  )
}

export default MyApp
