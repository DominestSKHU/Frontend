import React from "react";
import "../app/globals.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled"; // styled 함수 임포트
import Navber from "@/components/AdminNavbar";

const ImageInputStyle = css`
  #ex9 .upload-box {
    width: 500px;
    height: 300px;
    border: 1px solid gray;
    box-shadow: 2px 3px 9px hsl(0, 0%, 47%);
    padding: 10px;
  }
`;

// styled 함수를 사용하여 스타일이 적용된 컴포넌트 생성
const ImageInputContainer = styled.div`
  ${ImageInputStyle}
`;

export default function imguploadform() {
  return (
    <div>
      <Navber page="이미지 업로드 form" />
      <ImageInputContainer>
        <label>제목</label> <input type="text" />
        <section id="ex9">
          <h1>파일업로드 : DND & Trigger</h1>
          <div className="upload-box">
            <button className="btn-upload">파일선택</button>
            <input className="btn-file d-none" type="file" />
          </div>
        </section>
      </ImageInputContainer>
    </div>
  );
}
