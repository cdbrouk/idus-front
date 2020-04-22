import React from 'react';
import styled from 'styled-components';
import IdusCard from '../modules/IdusCard';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardBlock = styled.div`
  height: auto;
  margin-bottom: 1rem;
`;

const CardPage = () => {
  return (
    <Block>
      <CardBlock>
        <IdusCard />
      </CardBlock>
    </Block>
  );
};

export default CardPage;
