/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [content, setContent] = useState("09:00 DUOS ON 업무 안내");
  const [time, setTime] = useState("10분 전입니다.");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    console.log("Component", Component);
    console.log("pageProps", pageProps);
  }, [pageProps, Component]);

  return (
    <div>
      <Component {...pageProps} />
      <div css={main}>
        {/*미구현 단계*/}
        <div css={Timer}>
          <div>
            <h1>{content}</h1>
            <h3>{time}</h3>

            <button>나중에 알림</button>
            <button>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const main = css`
  display: none;
`;

const Timer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
  border-radius: 30px;
  width: 450px;
  height: 300px;
  position: fixed;
  bottom: 5px;
  right: 25px;
  div {
    text-align: center;
  }
`;
