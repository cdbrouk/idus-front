# idus-front

반응형 디자인을 고려하긴 하였으나 크롬 기준 768px (Tablet) 화면 까지만 설계하였습니다. \
그보다 작은 디자인은 따로 처리하진 않았습니다.

## 입력폼 UI

Inherits textarea form

### Props

- `placeholder` : `textarea`의 placeholder와 동일
- `width` : 가로 크기 입력 (최소값 500px)
- `height` : 세로 크기 입력 (최소값 5rem);
- `maxLength` : 최대 글자수 설정 (한글 기준, 기본값 10)

### Todo

maxLength 처리 부분 수정 필요
