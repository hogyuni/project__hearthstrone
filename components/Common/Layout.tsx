import type { NextPage } from 'next'
import styled from "styled-components";
import { Header } from "./Header";

const StyledLayout = styled.div`
  width : 100vw;
  height : calc(100vh - 6rem);
  margin-top : 6rem;
`;

const Layout: NextPage = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  )
}

export { Layout }