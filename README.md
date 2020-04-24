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
기본 상태에서 입력을 하지 않고 있을 시 save버튼의 text가 회색으로 버튼 비활성화 \
기본 상태에서 입력을 하고 save버튼이 아닌 다른 부분을 눌러 취소할 시 이전 텍스트 내용으로 돌아감 \
save버튼을 누르면 text내용이 바뀜

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

# 카드 UI (IdusCard, IdusCardRow)

```js
import IdusCard, { IdusCardRow } from '../modules/IdusCard';
```

default는 IdusCard(세로형)이며 Row는 별도로 import하면 됩니다.\
default와 row의 필수값이 다르다고 생각하여 별도로 import하는 방식으로 설계했습니다.

## IdusCard Props

### `width`: number (px)

> 가로 크기 입력 (min - 300px, default: 300px)

### `label`: string, `Essential`

> 필수 입력 사항, 카드 라벨

### `title`: string, `Essential`

> 필수 입력 사항, 카드 타이틀

### `hilight`: string, `Essential`

> 필수 입력 사항, 무슨 의미의 text인지는 잘 모르겠습니다..

### `crossout`: string, `Essential`

> 필수 입력 사항, 무슨 의미의 text인지는 잘 모르겠습니다..

### `score` : number

> 평점

### `content` : string

> 카드 내용

---

## IdusCardRow Props

### `width`: number (px)

> 가로 크기 입력 (min - 500px, default: 500px)

### `title`: string, `Essential`

> 필수 입력 사항, 카드 타이틀

### `content`: string, `Essential`

> 필수 입력 사항 , 카드 내용

### `score`: number

> 평점

### `author`: string;

> 저자
