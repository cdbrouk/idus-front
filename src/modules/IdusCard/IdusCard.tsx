import React from 'react';
import styled from 'styled-components';

const img = require('../../assets/images/idus.png'); /** Test용 이미지 */

interface IdusCardProps {
  score?: number;
  content?: string;
  width?: number;
  label: string;
  title: string;
  hilight: string;
  crossout: string;
}

interface BlockProps {
  width?: number;
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: BlockProps) => (props.width ? `${props.width}px` : '300px')};
  height: auto;
  min-width: 300px;
  border: 0.5px solid #bbbbbb;
`;

const FlexibleImage = styled.img`
  display: flex;
  position: relative;
  width: 100%;
  ::before {
    display: block;
    padding-top: 120%;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  height: auto;
  min-height: 150px;
  border-bottom: 0.5px solid #bbbbbb;
`;

const LabelTitleBlock = styled.div`
  width: auto;
  height: auto;
`;

const CardLabel = styled.p`
  color: #bbbbbb;
  font-size: 0.5rem;
`;

const CardTitle = styled.h1`
  font-size: 1rem;
`;

const HilightCrossOutBlock = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  align-items: center;
`;

// Hilight는 뭔지 모르겠어서 예시 스펠링 그대로 하였습니다.
const Hilight = styled.p`
  font-size: 1rem;
  color: red;
  margin-right: 0.5rem;
`;

const CrossOut = styled.p`
  text-decoration: line-through;
  font-size: 0.6rem;
  color: #bbbbbb;
`;

const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  padding: 1rem 0.8rem;
`;

const ScoreBlock = styled.div`
  display: flex;
`;

interface ScoreProps {
  color: string;
}

const Score = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  background-color: ${(props: ScoreProps) => props.color};
`;

const Content = styled.p`
  font-family: consolas; /** NanumGothic Chrome Version 에선 ellipsis 중앙에 표시되는 문제로 폰트 변경 */
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const IdusCard = ({
  score,
  content,
  label,
  width,
  title,
  hilight,
  crossout,
}: IdusCardProps) => {
  return (
    <Block width={width}>
      <FlexibleImage src={img} />
      <InfoBlock>
        <LabelTitleBlock>
          <CardLabel>{label}</CardLabel>
          <CardTitle>{title}</CardTitle>
        </LabelTitleBlock>
        <HilightCrossOutBlock>
          <Hilight>{hilight}</Hilight>
          <CrossOut>{crossout}</CrossOut>
        </HilightCrossOutBlock>
      </InfoBlock>
      {(score || content) && (
        <BottomBlock>
          {score && (
            <ScoreBlock>
              {[1, 2, 3, 4, 5].map((number) => (
                <Score
                  color={score >= number ? '#FF9D0C' : '#bbbbbb'}
                  key={number}
                />
              ))}
            </ScoreBlock>
          )}
          {content && <Content>{content}</Content>}
        </BottomBlock>
      )}
    </Block>
  );
};

export default IdusCard;
