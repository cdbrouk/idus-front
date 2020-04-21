import React from 'react';
import styled from 'styled-components';
import IdusTextArea from '../modules/IdusTextArea';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const TextAreaPage = () => {
  return (
    <Block>
      <IdusTextArea placeholder="기본 상태 입니다." />
    </Block>
  );
};

export default TextAreaPage;
