import React, { useState, useRef } from "react";
import "../app/globals.css";
import styled from "@emotion/styled";
import Navbar from "@/components/AdminNavbar";
import Image from "next/image";

const Inputt = styled.div`
  input {
    display: none;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
`;
const TitleInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  input {
    margin-left: 10px;
    width: 80%;
    height: 30px;
    border: 1px solid gray;
    border-radius: 10px;
  }
`;

const ImageInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  .file-preview {
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
  }
  .file-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .file-preview + .file-preview {
    margin-left: 10px;
  }
  .file-preview:first-of-type {
    margin-left: 0;
  }
  .file-preview:last-of-type {
    margin-right: 0;
  }


  .upload-box {
    width: 80%;
    height: 300px;
    border: 1px solid gray;
    box-shadow: 2px 3px 9px hsl(0, 0%, 47%);
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
  }
  .noneimg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
    }
    p {
      margin-top: 10px;
    }
  }

`;

export default function ImageUploadForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleUploadTextClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Navbar pageTitle="이미지 업로드 Form" />
      <div>
        <section id="ex9">
          <h1>사진</h1>
          <TitleInput>
            <label>제목</label> <input type="text" />
          </TitleInput>
          <ImageInput>
            <div
              className="upload-box"
              onDrop={handleDrop}
              onClick={handleUploadTextClick}
              onDragOver={(e) => e.preventDefault()}
            >
              <Inputt>
                <input
                  ref={fileInputRef}
                  className="btn-file d-none"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
                {selectedFiles.length > 0 ? (
                  <div>
                    <p>미리보기:</p>
                    <div>
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
                    </div>
                  </div>
                ) : (
                  <div className="noneimg">
                    <img src="/cloude.png" alt="클라우드 이미지" />
                    <p>사진을 끌어서 넣거나 클릭해주세요</p>
                  </div>
                )}
              </Inputt>
            </div>
          </ImageInput>
        </section>
      </div>
    </div>
  );
}
