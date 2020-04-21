/* eslint-disable @typescript-eslint/indent */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from '../styles/media';

interface TextAreaProps {
  placeholder?: string;
  width?: number;
  height?: number;
  maxLength?: number;
}

const Block = styled.div`
  display: flex;
  min-width: 500px;
  min-height: 5rem;
  width: ${(props: TextAreaProps) =>
    props.width ? `${props.width}px` : '100%'};
  height: ${(props: TextAreaProps) =>
    props.height ? `${props.height}px` : '5rem'};
  justify-content: space-between;
  position: relative;
`;

const TextAreaBlock = styled.div`
  display: flex;
  position: relative;
  min-width: 500px;
  transition: width 0.2s ease-in-out;
  width: ${(props: TextAreaProps) =>
    props.width ? `${props.width}px` : '100%'};
  :focus-within {
    width: ${(props: TextAreaProps) =>
      props.width ? `${props.width - 200}px` : '85%'};
    min-width: 300px;
    ${media.xlarge} {
      width: ${(props: TextAreaProps) =>
        props.width ? `${props.width - 200}px` : '80%'};
    }
    ${media.tablet} {
      width: ${(props: TextAreaProps) =>
        props.width ? `${props.width - 200}px` : '70%'};
    }
  }
`;

const TextArea = styled.textarea`
  font-family: 'NanumGothic';
  font-size: 1.5rem;
  resize: none;
  width: 100%;
`;

const WordCount = styled.h1`
  font-size: 0.7rem;
  color: gray;
  z-index: 10;
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  border: 1px solid gray;
  background-color: white;
  font-weight: bold;
  font-size: 1.5rem;
  color: #81d8d0;
  cursor: pointer;
`;

const IdusTextArea = ({
  placeholder = '텍스트를입력해주세요',
  width,
  height,
  maxLength = 10,
}: TextAreaProps) => {
  const [value, setValue] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState<number>(maxLength);
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > maxLength)
      setValue(e.target.value.substring(0, maxLength));
    else setValue(e.target.value);
  };

  useEffect(() => {
    setWordCount(maxLength - value.length);
  }, [value, maxLength]);

  return (
    <Block width={width} height={height}>
      <TextAreaBlock width={width}>
        <TextArea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeValue(e)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <WordCount>{wordCount}</WordCount>
      </TextAreaBlock>

      {isFocus && (
        <SaveButton onMouseDown={() => console.log('saved')}>Save</SaveButton>
      )}
    </Block>
  );
};

export default IdusTextArea;
