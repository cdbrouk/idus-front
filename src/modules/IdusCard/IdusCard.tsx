import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: block;
  width: 400px;
  height: auto;
  min-width: 500px;
  background-color: pink;
`;

const FlexibleImage = styled.img`
  position: relative;
  width: 100%;
  ::before {
    display: block;
    padding-top: 120%;
  }
`;

const IdusCard = () => {
  return (
    <Block>
      <FlexibleImage src={require('../../assets/images/idus.png')} />
    </Block>
  );
};

export default IdusCard;
