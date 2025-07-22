
## 프로젝트 소개

이 프로젝트는 Next.js 기반의 상품 목록/상세/장바구니 데모입니다. 
- 헤더의 Home, Products 링크를 통해 화면 전환을 할 수 있습니다.
- Products 페이지에서 보이는 상품 페이지에서 상품을 클릭해 상세 화면으로 이동할 수 있습니다.
- 상품 상세 화면에서는 "장바구니에 추가" 버튼으로 localStorage의 장바구니를 업데이트할 수 있습니다.

## 실행 방법


```bash
npm install

npm run build
npm run start
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

---

## 페이지별 렌더링 방식 및 선택 이유

### 상품 목록 페이지 (`/products`)
- SSR 방식 사용
- `fetch('/api/products', { cache: 'no-store' })`로 항상 최신 상품 목록을 서버에서 받아옵니다.
- **선택 이유**: 상품 목록은 자주 변경될 수 있으므로, 항상 최신 데이터를 보여주기 위해 SSR을 선택했습니다.
- **장점**: 항상 최신 데이터를 보여주며, SEO에 유리합니다.
- **단점**: 매 요청마다 서버에서 렌더링하므로 트래픽이 많으면 서버 부하가 증가할 수 있습니다.

### 상품 상세 페이지 (`/products/[id]`)
- ISR 방식 사용
- `generateStaticParams`로 모든 상품 id에 대해 정적 페이지를 미리 생성합니다.
- **선택 이유**: 자주 바뀌지 않으면서도, 빠른 응답성과 SEO를 만족시키기 위해 ISR을 선택했습니다.
- **장점**: 응답이 빠르고 SEO에 유리하며, 서버 부하가 적고 데이터 변경에도 자동 갱신이 가능합니다.
- **단점**: 갱신 주기 내에서는 최신 데이터가 반영되지 않을 수 있습니다.

---

## 장바구니 기능 및 클라이언트 상태 관리

- **장바구니 상태**는 [zustand](https://github.com/pmndrs/zustand)를 사용해 전역 store(`src/store/cart.ts`)에서 관리합니다.
    - useCartStore의 addCart 함수를 통해 상품 추가 시 zustand store와 localStorage를 업데이트합니다.
    - 페이지를 새로고침하거나 나갔다 와도 localStorage에서 initCart함수로 cart를 복원합니다.
- **CartBadge** 컴포넌트에서 zustand store의 cart 개수를 구독해 헤더에 뱃지로 표시합니다.
- **AddCartButton**에서 zustand의 addCart를 호출해 상품을 장바구니에 추가합니다.

---

## 구현 중 겪었던 어려움과 해결 과정

서버 없이 api 호출을 흉내내기 위해 route api를 추가해서 개발했습니다.
products 페이지에서 상품 리스트를 가져오는 것은 문제가 없었지만 상품 상세 페이지에 SSG를 적용하는 과정에서
빌드 중에는 route api를 사용할 수 없기 때문에 정적 페이지를 생성할 수 없었습니다.
이를 해결하기 위해 `src/mocks/api/products.ts`에 서버 api를 흉내내는, promise를 리턴하는 함수를 추가하고
이 함수를 사용하도록 변경했습니다. 추후 실제 서버와 연동할 때에 `getProduct`, `getAllProducts`를 사용하는 곳에서 수정이 필요합니다.


