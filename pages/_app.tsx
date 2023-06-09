import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import Navbar from '../components/Navbar'
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <MainLayout>

    <Component {...pageProps} />

  </MainLayout>
}

export default MyApp
