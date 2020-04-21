# idus-front

반응형 디자인을 고려하였으나 크롬 기준 768px (Tablet) 화면 까지만 설계하였습니다.
\
그보다 작은 디자인은 따로 처리하진 않았습니다.\
`modules directory`에 컴포넌트를 저장해두었습니다.\
다른 directory는 보시기 편하기 위한 과제 별도의 UI 입니다.

## Getting Started

```sh
yarn (or npm install)
yarn start
```

## Statck

- react
- typescript
- styled-component

# 입력폼 UI (IdusTextArea)

Inherits textarea form

## Props

### `placeholder` : string

> `textarea`의 placeholder와 동일

### `width` : number

> 가로 크기 입력 (최소값 500px)

### `height` : number

> 세로 크기 입력 (최소값 5rem);

### `maxLength` : number

> 최대 글자수 설정 (기본값 10)
