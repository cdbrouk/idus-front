import React from 'react';
import styled from 'styled-components';
import { IdusCardProps } from './IdusCard';

const img = require('../../assets/images/idus.png'); /** Test용 이미지 */

const Block = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: auto;
  min-width: 500px;
  border: 0.5px solid #bbbbbb;
`;

const FlexibleImage = styled.img`
  display: flex;
  position: relative;
  width: 30%;
  ::before {
    display: block;
    padding-top: 120%;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
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

const CardTitle = styled.h1`
  font-size: 1rem;
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

const IdusCardRow = ({ score, content }: IdusCardProps) => {
  return (
    <Block>
      <FlexibleImage src={img} />
      <InfoBlock>
        <LabelTitleBlock>
          <CardTitle>CardTitle</CardTitle>
        </LabelTitleBlock>
      </InfoBlock>
      {(score || content) && (
        <BottomBlock>
          {score && (
            <ScoreBlock>
              {[1, 2, 3, 4, 5].map((number) => (
                <Score color={score >= number ? '#FF9D0C' : '#bbbbbb'} />
              ))}
            </ScoreBlock>
          )}
          {content && <Content>{content}</Content>}
        </BottomBlock>
      )}
    </Block>
  );
};

export default IdusCardRow;
