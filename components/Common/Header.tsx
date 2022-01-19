import type { NextPage } from 'next'
import styled from "styled-components";

const StyledHeader = styled.div`
  position: fixed;
  display : flex;
  align-items: center;
  padding : 0 10px;
  top :0;
  width : 100vw;
  height : 6rem;
  border-style: solid;
  border-width :0px;
  border-bottom-width : 2px;
  border-bottom-color : #EBEBEB;
  background-color : rgba(34, 34, 34, 0.8);
  & > div.logo {
    width :5rem;
    height : 5rem;
    border-radius : 50%;
    border : 1px solid #EBEBEB;
  }
  & > div.title {
    font-size : 1.6rem;
    font-weight : 600;
    color : #FFF;
    padding : 0px 10px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo" onClick={() => window.location.href = "/"}>
        logo
      </div>
      <div className="title">
        Hearth Info
      </div>
    </StyledHeader>
  )
}

export { Header }