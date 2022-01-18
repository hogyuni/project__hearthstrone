import type { NextPage } from 'next'
import styled from "styled-components";

const StyledHeader = styled.div`
  position: fixed;
  top :0;
  width : 100vw;
  height : 6rem;
  border-bottom-width : 1px;
  border-bottom-color : #EBEBEB;
`;

const Header: NextPage = () => {
  return (
    <StyledHeader>

    </StyledHeader>
  )
}

export { Header }