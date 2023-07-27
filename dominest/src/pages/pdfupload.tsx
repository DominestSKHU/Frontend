import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function pdfupload() {
  return (
    <UploadForm>
      <div className="upload">
        <label htmlFor="file">파일 업로드</label>
        <input type="file" id="file" accept=".zip" />
        <div className="time">
          <select>
            <option value="">연도 선택</option>
            <option value="S2023">2023년</option>
            <option value="S2024">2024년</option>
            <option value="S2025">2025년</option>
            <option value="S2026">2026년</option>
            <option value="S2027">2027년</option>
            <option value="S2028">2028년</option>
            <option value="S2029">2029년</option>
            <option value="S2030">2030년</option>
          </select>
          <select>
            <option value="">차수 선택</option>
            <option value="_1">1학기</option>
            <option value="_SUMMER">여름학기</option>
            <option value="_2">2학기</option>
            <option value="_WINTER">겨울학기</option>
          </select>
        </div>
        <button>업로드 </button>
      </div>
    </UploadForm>
  );
}
const UploadForm = styled.div`
  .time {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    select {
      margin-left: 10px;
      border-radius: 10px;
    }
  }
  .upload {
    margin: 30px;

    display: flex;
    justify-content: center;
    width: 100%;
    input {
      padding-left: 10px;
      width: 50%;
      height: 50px;
      border: 1px solid rgb(77, 77, 77);
      border-radius: 0px 10px 10px 0px;
      text-align: left;
      line-height: 50px;
    }
    label {
      line-height: 50px;
      padding: auto;
      text-align: center;
      width: 10%;
      height: 50px;
      border: 1px solid rgb(77, 77, 77);
      border-radius: 10px 0px 0px 10px;
      cursor: pointer;
      &:hover {
        background: rgb(77, 77, 77);
        color: #fff;
      }
    }
    input[type="file"]::file-selector-button {
      display: none;
    }
  }
  button {
    margin-left: 20px;
    border-radius: 10px;
    width: 80px;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }
`;
