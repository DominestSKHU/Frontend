import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/AdminNavbar";
import styled from "@emotion/styled";
import axios from "axios";
import "../..//app/globals.css";
export default function imgPage() {
  const router = useRouter();
  const { id } = router.query;
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    if (!router.query.id) {
      <p>잠시만 기다리세요</p>;
      return;
    }
    axios
      .get(`http://domidomi.duckdns.org/posts/image-types/${router.query.id}`)
      .then((response) => {
        setImageData(response.data.data.postDetail);
      })
      .catch((error) => {
        console.error("이미지 정보를 가져오는 동안 오류 발생:", error);
        console.log(router.query.id);
      });
  }, [router.query.id]);

  return (
    <div>
      <Navbar />
      <Container>
        <div>
          {imageData ? (
            <div>
              <h1>제목 {imageData.title}</h1>
              <hr />
              <TextContent>
                <p>작성자 {imageData.writer}</p>
                <p>작성 시간 {imageData.createTime}</p>
                <p>수정 시간 {imageData.updateTime}</p>
              </TextContent>
              <hr />
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
        </div>
      </Container>
      <button>수정</button>
      <button>삭제</button>
    </div>
  );
}
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;

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
    max-width: 500px;
    max-height: 500px;
    margin: 10px;
  }
`;
const TextContent = styled.div`
  display: flex;
  justify-content: right;
  p {
    margin-left: 20px;
    font-size: 15px;
  }
`;
