import React from 'react';
import styled from 'styled-components';
import IdusCard, { IdusCardRow } from '../modules/IdusCard';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5rem;
`;

const CardBlock = styled.div`
  height: auto;
  margin-bottom: 1rem;
`;

const Comment = styled.h1`
  font-size: 1rem;
`;

const CardPage = () => {
  return (
    <Block>
      <CardBlock>
        <Comment>default</Comment>
        <IdusCard />
      </CardBlock>
      <CardBlock>
        <Comment>with score</Comment>
        <IdusCard score={3} />
      </CardBlock>
      <CardBlock>
        <Comment>with content</Comment>
        <IdusCard content="Lorem Ipsum dolor sit amet consectetur adipisicing elit" />
      </CardBlock>
      <CardBlock>
        <Comment>with score, content</Comment>
        <IdusCard
          score={3}
          content="Lorem Ipsum dolor sit amet test content text"
        />
      </CardBlock>
      <CardBlock>
        <Comment>row</Comment>
        <IdusCardRow score={3} />
      </CardBlock>
    </Block>
  );
};

export default CardPage;
