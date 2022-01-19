import type { ReactElement } from 'react';
import styled from "styled-components";
import Head from 'next/head'

import { Layout } from "../components/index";
import { cardContent } from "../constants/dummy";
import { classNameBind } from "../utils/utils";

const StyledWrapper = styled.div`
  display : grid;
  width : 100%;
  height : 100%;
  padding : 1.5rem 0;
  margin : 0 auto;
  overflow : scroll;
  grid-row-gap: 15px;
  @media  (min-width : 751px) {
    grid-template-columns: 1fr;
  };

  @media (min-width : 1080px) {
    grid-template-columns: 1fr 1fr;

  };

  @media screen and (min-width : 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  };
`

const Home = ({ title, list }: { title: string; list: any[] }) => {

  const StyledCard = styled.div`
  width : 30rem;
  height : 35rem;
  margin : 0 auto;
  
  border-radius: 3px;

  &.orange {
    border : 1px solid ${props => props.theme.orange};
    box-shadow : 0px 3px 15px 0px ${props => props.theme.orange};
  }
  &.purple {
    border : 1px solid ${props => props.theme.purple};
    box-shadow : 0px 3px 15px 0px ${props => props.theme.purple};
  }
  &.sapphire {
    border : 1px solid ${props => props.theme.sapphire};
    box-shadow : 0px 3px 15px 0px ${props => props.theme.sapphire};
  }
  &.silver {
    border : 1px solid ${props => props.theme.silver};
    box-shadow : 0px 3px 15px 0px ${props => props.theme.silver};
  }
`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledWrapper>
        {
          list.map((el) => {
            const {
              name,
              rank
            } = el;
            return (
              <StyledCard className={rank}>
                {name}
              </StyledCard>
            )
          })
        }
      </StyledWrapper>
    </>
  )
}

export const getServerSideProps = async () => {
  const list = cardContent;
  return {
    props: {
      title: "Welcome to the Jungle!",
      list,
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
