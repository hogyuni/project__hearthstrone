import { ReactElement, SetStateAction, useCallback, useEffect } from 'react';
import { useState, useRef, RefObject } from "react";
import styled from "styled-components";
import Head from 'next/head'
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  cardListState,
  characterFilterState
} from "../states/atom";
import { Layout, Classifier } from "../components/index";
import { characterList, cardContent } from "../constants/dummy";
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledCardModal = styled.div`
  display : none;
  position : absolute;
  top : 0;
  width : 100vw;
  height : 100vh;  
  & > div {
    width : 32rem;
    background-color : #FFF
  }
  &.active {
    display : flex;
    justify-content: center;
    align-items: center;
  }
`;

interface CardModalProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  item: any
}

const CardModal = ({
  setShowModal,
  showModal,
  item
}: CardModalProps) => {
  const divRef = useRef<HTMLDivElement>();
  const isActive = showModal ? "active" : "";

  useOutsideClick(divRef, () => {
    if (showModal) setShowModal(false)
  });

  return (
    <StyledCardModal
      className={isActive}
    >
      <div ref={divRef as RefObject<HTMLDivElement>} onClick={() => window.location.href = "/detail/1"} >
        aaa
      </div>
    </StyledCardModal >
  )
}

const StyledContainer = styled.div`
  width : 100%;
  height : 100%;
  overflow : scroll;
  background-color : rgba(34, 34, 34, 0.8);
`;

const StyledWrapper = styled.div`
  display : grid;
  padding : 1.5rem 0;
  width : 100%;
  margin : 0 auto;
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
`;

const StyledCard = styled.div`
  display : block;
  width : 30rem;
  height : 35rem;
  margin : 0 auto;
  border-radius: 3px;
  color : #FFF;
  cursor : pointer;
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
`;

const Home = ({ title, list, character }: { title: string; list: any[]; character: any[] }) => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const setCardList = useSetRecoilState(cardListState)
  const alist = useRecoilValue(characterFilterState);
  const [cardInfo, setCardInfo] = useState<any>({});

  useEffect(() => {
    setCardList(list);
  }, []);

  const handleModal = useCallback((item: any) => {
    setShowModal(true);
    setCardInfo(item)
  }, [showModal])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledContainer>
        <Classifier list={character} />
        <StyledWrapper>
          {
            alist.map((el: any, idx: number) => {
              const {
                name,
                fkey_name,
                rank
              } = el;
              return (
                <StyledCard
                  key={idx.toString()}
                  className={rank}
                  onClick={() => {
                    handleModal(el)
                  }}>
                  카드명 : {name} <br />
                  카테고리 명 : {fkey_name}
                </StyledCard>
              )
            })
          }
        </StyledWrapper>
        <CardModal setShowModal={setShowModal} showModal={showModal} item={cardInfo} />
      </StyledContainer>
    </>
  )
}

export const getServerSideProps = async () => {
  const list = cardContent;
  const character = characterList;
  return {
    props: {
      title: "Welcome to the Jungle!",
      list,
      character,
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

export default Home;
