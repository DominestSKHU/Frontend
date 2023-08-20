import React, { useState, useEffect } from "react";
import Navbar from "@/components/AdminNavbar";
import styled from "@emotion/styled";
import axios from "axios";
import "../app/globals.css";

export default function ImgForm() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    axios
      .get("http://domidomi.duckdns.org/posts/image-types/111")
      .then((response) => {
        setImageData(response.data.data.postDetail);
      })
      .catch((error) => {
        console.error("이미지 정보를 가져오는 동안 오류 발생:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <h3>이미지 정보</h3>
        {imageData ? (
          <div>
            <p>제목: {imageData.title}</p>
            <p>작성자: {imageData.writer}</p>
            <p>작성 시간: {imageData.createTime}</p>
            <p>업데이트 시간: {imageData.updateTime}</p>
            <ImageContainer>
              {imageData.imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  src={`http://domidomi.duckdns.org/posts/image-types/images?filename=${imageUrl}`}
                  alt={`Image ${index}`}
                />
              ))}
            </ImageContainer>
          </div>
        ) : (
          <p>이미지 데이터를 불러오는 중...</p>
        )}
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  text-align: center;

  p {
    font-size: 18px;
    margin: 10px 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    max-width: 100%;
    height: auto;
    margin: 10px;
  }
`;
