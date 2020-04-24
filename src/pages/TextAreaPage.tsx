import React from 'react';
import styled from 'styled-components';
import IdusTextArea from '../modules/IdusTextArea';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

const TextAreaBlock = styled.div`
  height: auto;
  margin-bottom: 1rem;
`; // 화면 UI 상 공백 유지용

const TextAreaPage = () => {
  return (
    <Block>
      <TextAreaBlock>
        <IdusTextArea placeholder="기본 상태 입니다." />
      </TextAreaBlock>
      <TextAreaBlock>
        <IdusTextArea placeholder="비활성화 상태입니다" disabled />
      </TextAreaBlock>
      <TextAreaBlock>
        <IdusTextArea placeholder="읽기전용 상태입니다" readOnly />
      </TextAreaBlock>
    </Block>
  );
};

export default TextAreaPage;
