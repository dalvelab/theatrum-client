/* eslint-disable @next/next/no-img-element */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { chakra, ChakraProvider, extendTheme } from '@chakra-ui/react'

import { Navbar } from '@/widgets/Navbar'
import { Footer } from '@/widgets/Footer'
import { GolosFont, PlayfairFont } from '@/shared/fonts';
import { YAMetrika } from '@/shared/components'

import './styles.css'

const sizes = {
  colors: {
    brand: {
      100: '#E9D5CD',
      200: '#477A7B',
      300: '#583D3E',
      400: '#E6C7B3'
    }
  },
  fonts: {
    body: GolosFont.style.fontFamily,
    heading: GolosFont.style.fontFamily,
    mono: GolosFont.style.fontFamily,
    title: PlayfairFont.style.fontFamily,
  },
  sizes: {
    container: {
      xl: '1440px'
    }
  }
}

const theme = extendTheme({...sizes})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Theatrum — частный универсальный гастрольный театр</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Theatrum — частный универсальный гастрольный театр. Верхняя Пышма, Александра Козицына, 2" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="color-scheme" content="light only" />
        {process.env.NEXT_PUBLIC_METRIKA === 'production' && (
          <noscript>
            <div>
              <img src="https://mc.yandex.ru/watch/93393151" style={{position: "absolute", left: "-9999px"}} alt="" />
            </div>
          </noscript>
        )}
      </Head>
      <YAMetrika />
      <ChakraProvider theme={theme}>
        <Navbar />
        <chakra.main>
          <Component {...pageProps} />
        </chakra.main>
        <Footer />
      </ChakraProvider>
    </>
  )
}
