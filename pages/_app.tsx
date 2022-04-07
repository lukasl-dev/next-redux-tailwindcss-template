import '@/styles/globals.css'
import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Router } from 'next/router'
import nProgress from 'nprogress'

nProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => nProgress.start())

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  nProgress.done()

  return <Component {...pageProps} />
}

// noinspection JSUnusedGlobalSymbols
export default App
