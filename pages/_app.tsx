import type { ReactElement, ReactNode } from 'react'
import '../styles/globals.css';
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log("App page onboard!")

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </ThemeProvider>

  )
}

export default App
