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
        <IdusCard
          label="Card Label"
          title="CardTitle"
          hilight="Hilight"
          crossout="Cross out"
        />
      </CardBlock>
      <CardBlock>
        <Comment>with score, width = 350</Comment>
        <IdusCard
          label="Card Label"
          title="CardTitle"
          hilight="Hilight"
          crossout="Cross out"
          width={350}
          score={3}
        />
      </CardBlock>
      <CardBlock>
        <Comment>with content</Comment>
        <IdusCard
          label="Card Label"
          title="CardTitle"
          hilight="Hilight"
          crossout="Cross out"
          content="Lorem Ipsum dolor sit amet consectetur adipisicing elit"
        />
      </CardBlock>
      <CardBlock>
        <Comment>with score, content, width = 400</Comment>
        <IdusCard
          label="Card Label"
          title="CardTitle"
          hilight="Hilight"
          crossout="Cross out"
          score={3}
          width={400}
          content="Lorem Ipsum dolor sit amet consectetur adipisicing elit"
        />
      </CardBlock>
      <CardBlock>
        <Comment>row (default)</Comment>
        <IdusCardRow
          title="Lorem Ipsum dolor sit amet consectetur adipisicing elit"
          content="Lorem Ipsum dolor sit amet consectetur adipisicing elit. this is testing text for line number 3 with ellipsis, overflow-hidden"
        />
      </CardBlock>
      <CardBlock>
        <Comment>row (score)</Comment>
        <IdusCardRow
          title="Lorem Ipsum dolor sit amet consectetur adipisicing elit"
          content="Lorem Ipsum dolor sit amet consectetur adipisicing elit. this is testing text for line number 3 with ellipsis, overflow-hidden"
          score={2}
        />
      </CardBlock>
      <CardBlock>
        <Comment>row (width = 800, author, score)</Comment>
        <IdusCardRow
          title="Lorem Ipsum dolor sit amet consectetur adipisicing elit"
          content="Lorem Ipsum dolor sit amet consectetur adipisicing elit. this is testing text for line number 3 with ellipsis, overflow-hidden"
          score={2}
          width={800}
          author="John Doe"
        />
      </CardBlock>
    </Block>
  );
};

export default CardPage;
