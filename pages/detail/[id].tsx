import type { ReactElement } from "react";
import Head from 'next/head';
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Layout } from "../../components/index"

const StyledWrapper = styled.div`
  width : 100%;
  height : 100%;
  overflow : scroll;
`

const Detail = ({ title }: { title: string; }) => {

  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>상세 화면</title>
      </Head>
      <StyledWrapper>

      </StyledWrapper>
    </>
  )
}

const getLayout = (page: ReactElement) => {

  return (
    <Layout>
      {page}
    </Layout>
  )
}

Detail.getLayout = getLayout

export const getServerSideProps = async () => {

  return {
    props: {
      title: "Welcome to the Jungle!",
    }
  }
}


export default Detail;