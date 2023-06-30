import GlobalStyle, { Palette } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { Slide, ToastContainer, toast } from 'react-toastify'
import { RecoilRoot } from 'recoil'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        autoClose={700}
        pauseOnHover={true}
        position={toast.POSITION.TOP_RIGHT}
        transition={Slide}
        toastStyle={{
          backgroundColor: Palette.BACKGROUND_CARD,
          color: Palette.NEUTRAL_N1,
        }}
      />
    </RecoilRoot>
  )
}
