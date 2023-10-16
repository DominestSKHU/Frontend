import React, { useState, useRef, useEffect } from "react";
import "../../app/globals.css";
import { useRouter } from "next/router";

import Navbar from "@/components/AdminNavbar";
import Image from "next/image";
import {
  Inputt,
  Container,
  TitleInput,
  ImageInput,
} from "@/style/ImgUploadStyle";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";

export default function ImageUploadForm() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const [idname, setIdname] = useState(router.query.id);

  const Token = useAuth();
  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  const handleUpload = () => {
    if (selectedFiles.length > 0 && !isUploading) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("title", title);
      for (const file of selectedFiles) {
        formData.append("postImages", file);
      }
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname}/posts/image-types`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then((response) => {
          setIsUploading(false);
          setSelectedFiles([]);
          window.location.href = `/categories/${idname}/posts/image-types`;
          return alert("성공적으로 업로드 되었습니다.");
        })
        .catch((error) => {
          console.log(error);
          setIsUploading(false);
        });
    }
  };
  const handleTitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) {
      return;
    }

    const files = Array.from(fileList);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleUploadTextClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div>
      <Navbar page="이미지 업로드 Form" />
      <Container>
        <section id="ex9">
          <h1>사진</h1>
          <TitleInput>
            <label>제목</label>{" "}
            <input type="text" value={title} onChange={handleTitleChange} />
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
                  accept="image/*"
                  onChange={handleFileChange}
                  multiple
                />
                {selectedFiles.length > 0 ? (
                  <div>
                    <div className="viewer">
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
                    <Image
                      src="/cloude.png"
                      alt="클라우드 이미지"
                      width={300}
                      height={300}
                    />
                    <p>사진을 끌어서 넣거나 클릭해주세요</p>
                  </div>
                )}
              </Inputt>
            </div>
          </ImageInput>
          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={isUploading} // 업로드 중일 때 버튼을 비활성화
          >
            {isUploading ? "업로드 중..." : "등록"}
          </button>
        </section>
      </Container>
    </div>
  );
}
