/* eslint-disable @typescript-eslint/indent */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

interface TextAreaProps {
  placeholder?: string;
  width?: number;
  height?: number;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
}

// TextArea와 SaveButton까지 감싸는 Block Component
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

// TextArea와 남은 글자수 표시를 감싸는 Block Component
const TextAreaBlock = styled.div`
  display: flex;
  position: relative;
  min-width: 500px;
  transition: width 0.2s ease-in-out;
  width: ${(props: TextAreaProps) =>
    props.width ? `${props.width}px` : '100%'};
  :focus-within {
    width: ${(props: TextAreaProps) => {
      if (props.readOnly) {
        return '100%';
      }
      if (props.width) {
        return `${props.width - 200}px`;
      }
      return '85%';
    }};
    min-width: 300px;
    ${media.xlarge} {
      width: ${(props: TextAreaProps) => {
        if (props.readOnly) {
          return '100%';
        }
        if (props.width) {
          return `${props.width - 200}px`;
        }
        return '80%';
      }};
    }
    ${media.tablet} {
      width: ${(props: TextAreaProps) => {
        if (props.readOnly) {
          return '100%';
        }
        if (props.width) {
          return `${props.width - 200}px`;
        }
        return '70%';
      }};
    }
  }
`;

// TextArea Component
const TextArea = styled.textarea`
  font-family: 'NanumGothic';
  font-size: 1.5rem;
  resize: none;
  width: 100%;
  border-color: ${(props: TextAreaProps) =>
    (props.disabled && '#EC8A89') || (props.readOnly && '#008080')};

  ::placeholder {
    color: ${(props: TextAreaProps) =>
      (props.disabled && '#EC8A89') || (props.readOnly && '#008080')};
  }
`;

// 남은 글자수 표시 Tag
const WordCount = styled.h1`
  font-size: 0.7rem;
  color: gray;
  z-index: 10;
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

// 저장버튼 Component
interface SaveButtonProps {
  onSave: boolean;
}

const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  border: 1px solid gray;
  background-color: white;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props: SaveButtonProps) => (props.onSave ? '#81d8d0' : '#bbbbbb')};
  cursor: ${(props: SaveButtonProps) => (props.onSave ? 'pointer' : 'default')};
`;

const IdusTextArea = ({
  placeholder = '텍스트를입력해주세요',
  width,
  height,
  maxLength = 500,
  disabled = false,
  readOnly = false,
}: TextAreaProps) => {
  const [value, setValue] = useState<string>('');
  const [prevText, setPrevText] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [onSave, setOnSave] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState<number>(maxLength);

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOnSave(true);
    if (e.target.value.length > maxLength)
      setValue(e.target.value.substring(0, maxLength));
    else setValue(e.target.value);
  };

  const onFocus = () => {
    if (readOnly) return;
    setIsFocus(true);
  };

  const onSaveClick = () => {
    if (!onSave) return;
    setPrevText(value);
    setOnSave(false);
  };

  const onBlur = () => {
    setIsFocus(false);
    setOnSave(false);
    setValue(prevText);
  };

  useEffect(() => {
    setWordCount(maxLength - value.length);
  }, [value, maxLength]);

  return (
    <Block width={width} height={height}>
      <TextAreaBlock width={width} readOnly={readOnly}>
        <TextArea
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={(e) => onChangeValue(e)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <WordCount>{wordCount}</WordCount>
      </TextAreaBlock>

      {isFocus && (
        <SaveButton onSave={onSave} onMouseDown={onSaveClick}>
          Save
        </SaveButton>
      )}
    </Block>
  );
};

export default IdusTextArea;
