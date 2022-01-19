import Head from 'next/head';
import styled from "styled-components";
import { useRouter } from 'next/router';

const Detail = ({ title }: { title: string; }) => {

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>상세 화면</title>
      </Head>
      <div>
        상세 화면{id}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      title: "Welcome to the Jungle!",
    }
  }
}


export default Detail;