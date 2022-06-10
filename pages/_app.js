import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import AppContainer from '../components/AppContainer'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AppContainer router={router}>
      <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={()=>{
                if(typeof window !== 'undefined') {
                    window.scrollTo({ top: 0 })
                }
            }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
    </AppContainer>
  )
}

export default MyApp
