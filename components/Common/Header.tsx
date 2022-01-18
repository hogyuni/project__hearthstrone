import type { NextPage } from 'next'
import styled from "styled-components";

const StyledHeader = styled.div`
  position: fixed;
  top :0;
  width : 100vw;
  height : 6rem;
  border-style: solid;
  border-bottom-width : 2px;
  border-bottom-color : #EBEBEB;
  background-color : rgba(34, 34, 34, 0.8);
`;

const Header: NextPage = () => {
  return (
    <StyledHeader>

    </StyledHeader>
  )
}

export { Header }