import '@metronews/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Layout from '@metronews/components/Layout';
import Context from '@metronews/store/newsContext'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
},[])
  return (
    <Context>
      <main>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </main>
    </Context>
  )
}
