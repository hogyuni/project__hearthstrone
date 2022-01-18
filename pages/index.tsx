import type { NextPage } from 'next';
import type { ReactElement } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import { Layout, Header } from "../components/index";

const Home = ({ title }: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="@made by ksh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      title: "Welcome to the Jungle!"
    }
  }
}

const getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

Home.getLayout = getLayout

export default Home
