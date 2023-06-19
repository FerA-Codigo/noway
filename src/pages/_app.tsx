import '@metronews/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Layout from '@metronews/components/Layout';
import Context from '@metronews/store/newsContext';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
},[])
  return (
    <Context>
      <main className={roboto.className}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </main>
    </Context>
  )
}
