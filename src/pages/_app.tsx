import GlobalStyle from '@/styles/globals'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </RecoilRoot>
  )
}
