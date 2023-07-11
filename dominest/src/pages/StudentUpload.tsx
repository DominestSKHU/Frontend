import { css } from "@emotion/react";
import React, { useState } from "react";

import "../app/globals.css";
/** @jsxImportSource @emotion/react */

export default function studentupload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // 파일 업로드 로직 구현
    if (selectedFile) {
      // 선택한 파일을 서버로 업로드하는 코드를 작성하세요
      console.log("파일 업로드:", selectedFile);
    }
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          background-color: yellow;
          width: 80%;
          height: 100%;
        `}
      >
        <p>학생정보 업로드</p>
        <div
          css={css`
            text-align: center;
          `}
        >
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileChange}
            css={css`
              margin-bottom: 10px;
            `}
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            css={css`
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 16px;

              &:disabled {
                background-color: #ccc;
                cursor: not-allowed;
              }
            `}
          >
            업로드
          </button>
        </div>
      </div>
    </div>
  );
}
