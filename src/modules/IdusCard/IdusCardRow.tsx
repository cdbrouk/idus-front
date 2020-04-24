import React from 'react';
import styled from 'styled-components';

const img = require('../../assets/images/idus.png'); /** Test용 이미지 */

interface IdusCardRowProps {
  score?: number;
  content: string;
  title: string;
  width?: number;
  author?: string;
}

interface BlockProps {
  width?: number;
}

const Block = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props: BlockProps) => (props.width ? `${props.width}px` : '300px')};
  height: auto;
  min-width: 500px;
  border: 0.5px solid #bbbbbb;
`;

const FlexibleImage = styled.img`
  display: flex;
  position: relative;
  width: 35%;
  ::before {
    display: block;
    padding-top: 120%;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  height: auto;
  min-height: 150px;
  border-bottom: 0.5px solid #bbbbbb;
`;

const CardTitle = styled.h1`
  font-size: 1rem;
  font-family: consolas;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ScoreBlock = styled.div`
  display: flex;
  height: auto;
  align-items: center;
`;

interface ScoreProps {
  color: string;
}

const Score = styled.div`
  margin-top: 0.2rem;
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  background-color: ${(props: ScoreProps) => props.color};
`;

const Author = styled.p`
  color: #bbbbbb;
  font-size: 1rem;
`;

const Content = styled.p`
  display: -webkit-box;
  font-family: consolas; /** NanumGothic Chrome Version 에선 ellipsis 중앙에 표시되는 문제로 폰트 변경 */
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const IdusCardRow = ({
  score,
  content,
  title,
  width,
  author,
}: IdusCardRowProps) => {
  return (
    <Block width={width}>
      <FlexibleImage src={img} />
      <InfoBlock>
        <CardTitle>{title}</CardTitle>
        {content && <Content>{content}</Content>}
        {score && (
          <ScoreBlock>
            {[1, 2, 3, 4, 5].map((number) => (
              <Score
                color={score >= number ? '#FF9D0C' : '#bbbbbb'}
                key={number}
              />
            ))}
            {author && <Author>{`| ${author}`}</Author>}
          </ScoreBlock>
        )}
      </InfoBlock>
    </Block>
  );
};

export default IdusCardRow;
