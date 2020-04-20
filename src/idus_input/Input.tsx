import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder?: string;
  width?: number;
}

const Block = styled.div`
  display: flex;
  width: ${(props: InputProps) => (props.width ? `${props.width}px` : '100%')};
  height: 8rem;
  justify-content: space-between;
`;

const InputBox = styled.input`
  width: ${(props: InputProps) => (props.width ? `${props.width}px` : '100%')};

  font-family: 'NanumGothic';
  :focus {
    width: ${(props: InputProps) => (props.width ? props.width * 0.8 : '80%')};
  }
`;

const SaveButton = styled.div`
  width: ${(props: InputProps) => (props.width ? props.width * 0.12 : '12%')};
  background-color: blue;
`;

const Input = ({ placeholder = '텍스트를입력해주세요', width }: InputProps) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <Block width={width}>
      <InputBox
        placeholder={placeholder}
        width={width}
        value={value}
        onChange={(e) => onChangeValue(e)}
        onFocus={() => setIsFocus(true)}
        onBlur={(e) => setIsFocus(false)}
      />
      {isFocus && <SaveButton />}
    </Block>
  );
};

export default Input;
