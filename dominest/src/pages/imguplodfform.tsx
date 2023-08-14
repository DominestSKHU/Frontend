import React, { useState } from "react";
import "../app/globals.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Navbar from "@/components/AdminNavbar";
import Image from "next/image";

const ImageInputStyle = css`
  .upload-box {
    width: 500px;
    height: 300px;
    border: 1px solid gray;
    box-shadow: 2px 3px 9px hsl(0, 0%, 47%);
    padding: 10px;
  }
`;

const Inputt = styled.div`
  input[type="file"]::file-selector-button {
    display: none;
  }
`;

const ImageInputContainer = styled.div`
  ${ImageInputStyle}
`;

const PreviewContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px; /* 조절하여 이미지 사이의 간격 설정 */
`;

export default function ImageUploadForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <div>
      <Navbar pageTitle="이미지 업로드 Form" />
      <ImageInputContainer>
        <label>제목</label> <input type="text" />
        <section id="ex9">
          <h1>파일 업로드: DND & Trigger</h1>

          <div
            className="upload-box"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Inputt>
              <input
                className="btn-file d-none"
                type="file"
                onChange={handleFileChange}
                multiple
              />
              {selectedFiles.length > 0 ? (
                <div>
                  <p>미리보기:</p>
                  <PreviewContainer>
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="file-preview">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={`미리보기 ${index + 1}`}
                          width={100}
                          height={100}
                        />
                      </div>
                    ))}
                  </PreviewContainer>
                </div>
              ) : (
                <p>여기에 파일을 드래그 앤 드롭하세요.</p>
              )}
            </Inputt>
          </div>
        </section>
      </ImageInputContainer>
    </div>
  );
}
