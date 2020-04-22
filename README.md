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

## Stack

- react
- typescript
- styled-component

# 입력폼 UI (IdusTextArea)

Inherits textarea form

```js
import IdusTextArea from './modules/IdusTextArea';
```

## Props

### `placeholder` : string

> `textarea`의 placeholder와 동일

### `width` : number (px)

> 가로 크기 입력 (min - 500px, default: 100%)

### `height` : number (px)

> 세로 크기 입력 (min - 5rem, default: 5rem);

### `maxLength` : number

> 최대 글자수 설정 (default: 10)

### `disabled` : boolean

> 비활성화 상태 (default: false)

### `readOnly` : boolean

> 읽기전용 상태, Save Button 비활성화 (default: false)
