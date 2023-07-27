import { css } from "@emotion/react";
import Link from "next/link";
/** @jsxImportSource @emotion/react */

const body = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const formContainer = css`
  width: 20%;
  background-color: #fff;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
`;

const formSubmitBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  color: #fff;
  background-color: #212121;
  border: none;
  width: 100%;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);

  &:hover {
    background-color: #313131;
  }

  &:active {
    scale: 0.95;
  }
`;

const logoContainer = css`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

const form = css`
  display: flex;
  flex-direction: column;
`;

const formGroup = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const formGroupLabel = css`
  display: block;
  margin-bottom: 5px;
`;

const formGroupInput = css`
  width: auto;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid #ccc;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: #1778f2;
  }
`;

const link = css`
  color: #1778f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const signupLink = css`
  align-self: center;
  font-weight: 500;
  width: auto;
`;

const signupLinkText = css`
  font-weight: 400;
`;
export default function losePassword() {
  return (
    <div css={body}>
      <div css={formContainer} className="form-container">
        <div css={logoContainer} className="logo-container">
          비밀번호 재발급하기
        </div>

        <form css={form} className="form">
          <div css={formGroup} className="form-group">
            <label css={formGroupLabel} htmlFor="email">
              Email
            </label>
            <input
              css={formGroupInput}
              type="text"
              id="email"
              name="email"
              placeholder="이메일을 작성해주세요"
            />
          </div>

          <button css={formSubmitBtn} className="form-submit-btn" type="submit">
            새로운 비밀번호 요청
          </button>
        </form>

        <p className="signup-link" css={signupLink}>
          계정이 없으신가요?
          <br />
          <Link
            css={[link, signupLinkText]}
            href="/signup"
            className="signup-link link"
          >
            회원가입 하러 가기
          </Link>
        </p>
      </div>
    </div>
  );
}
