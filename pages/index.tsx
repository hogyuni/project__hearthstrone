import type { ReactElement } from 'react';
import styled from "styled-components";
import Head from 'next/head'

import { Layout } from "../components/index";

const StyledWrapper = styled.div`
  display : grid;
  width : 100%;
  height : 100vh;
  margin : 0 auto;
  overflow : scroll;
  grid-row-gap: 15px;
  @media  (min-width : 751px) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
  };

  @media (min-width : 1080px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

  };

  @media screen and (min-width : 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
  };

  & > div {
    width : 30rem;
    height : 35rem;
    margin : 0 auto;
    border : 1px solid #EBEBEB;
  }
`

const Home = ({ title }: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="@made by ksh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledWrapper>
        <div>
          a
        </div>
        <div>
          a
        </div>
        <div>
          a
        </div>
      </StyledWrapper>
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
