This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 시작가이드

처음 시작시 아래 cmd에 아래 명령어를 치시오
```bash
npm install
```

개발 서버 작동시킬때 아래 명령어를 치시오

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

열기는 [http://localhost:3000](http://localhost:3000) 주소로 열립니다.

시작페이지는  `app/page.tsx`. 가해당됩니다.

이 프로젝트는  [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) 맞춤 Google 글꼴인 Inter를 자동으로 로드합니다.
<hr/>

 
## 페이지 구조

<pre>
📦 pages                    --> 페이지
 ┣ 📂 categories            --> 게시글 목록 조회
 ┃ ┗ 📜 [...id].tsx
 ┣ 📂 data              
 ┃ ┗ 📜 complaints.tsx      --> 민원대장
 ┣ 📂 image-types         
 ┃ ┗ 📜 [id].tsx            --> imge-type 게시글 작성
 ┣ 📂 imgform           
 ┃ ┗ 📜 [...id].tsx         --> imge-type 게시글 보기
 ┣ 📂 infodata
 ┃ ┗ 📜 studentupload.tsx   --> 사생 데이터 조회/ 수정/ 삭제
 ┣ 📂 pdf
 ┃ ┣ 📜 admissionform.tsx   --> 입관신청서 업로드 페이지
 ┃ ┗ 📜 departureform.tsx   --> 퇴관신청서 업로드 페이지
 ┣ 📂 undelivered-parcel
 ┃ ┗ 📜 [...id].tsx         --> 장기 미수령 택배대장
 ┗ 📂 user
   ┣ 📜 categoryManage.tsx  --> 카테고리 메니저
   ┣ 📜 login.tsx           --> 로그인
   ┣ 📜 losePassword.tsx    --> 패스워드 찾기
   ┗ 📜 signup.tsx          --> 회원가입
<pre>
