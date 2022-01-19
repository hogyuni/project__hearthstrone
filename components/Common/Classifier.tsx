import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { charaterState } from "../../states/atom";

interface ClassfierProps {
  title?: string;
  list: any[];
}

const StyledClassifier = styled.div`
  width : 100%;
  & > div.title {
    font-size : 1.4rem;
    color : #FFF;
  }
  & > div.list-view {
    display : flex;
    & > div {
      border-radius : 30%;
      border : 1px solid #EBEBEB;
      padding : 0 10px;
      margin-right : 10px;

      :last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const Classifier = ({
  title = "Default Title",
  list
}: ClassfierProps) => {

  const setCharacter = useSetRecoilState(charaterState);

  return (
    <StyledClassifier>
      <div className="title">
        {title}
      </div>
      <div className="list-view" >
        {
          list.map((el: any, idx: number) => {
            const {
              id,
              name
            } = el;
            return (
              <div key={idx.toString()} onClick={(e) => {
                e.stopPropagation();
                setCharacter(id)
              }}>
                {name}
              </div>
            )
          })
        }
      </div>
    </StyledClassifier>
  )
}

export { Classifier }