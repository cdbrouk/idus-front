import React from 'react';
import styled from 'styled-components';
import Input from '../idus_input/Input';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const InputPage = () => {
  return (
    <Block>
      <Input placeholder="hello" width={500} />
    </Block>
  );
};

export default InputPage;
