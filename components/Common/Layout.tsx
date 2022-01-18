import type { NextPage } from 'next'
import styled from "styled-components";

const StyledLayout = styled.div`
  width : 100vw;
  height : 100vh;
  background-color : rgba(34, 34, 34, 0.8);
`;

const Layout: NextPage = ({ children }) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

export { Layout }