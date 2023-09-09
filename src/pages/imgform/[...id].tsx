import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/AdminNavbar";
import styled from "@emotion/styled";
import { Imageborder } from "@/utils/border/Imagborder";
import Image from "next/image";
import "../../app/globals.css";
import { Button, Containerright } from "@/style/InputStyle";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";
interface ImagePost {
  id: number;
  title: string;
  writer: string;
  createTime: string;
  updateTime: string;
  imageUrls: string[];
}

export default function ImgPage() {
  const router = useRouter();
  const [imageData, setImageData] = useState<ImagePost>();
  const [idname, setIdname] = useState<any>(router.query.id);

  const Token = useAuth();
  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        if (idname) {
          const response = await Imageborder(idname);
          setImageData(response.data.data.postDetail);
        }
      } catch (error) {
        console.error("이미지 데이터를 불러오는 동안 오류 발생:", error);
      }
    };

    fetchImageData();
  }, [idname]);

  const imgDelete = () => {
    if (idname) {
      axios
        .delete(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/image-types/${idname[1]}`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
          alert("성공적으로 삭제되었습니다.");
          window.location.href = `/categories/${idname[1]}/posts/image-types/`;
        })
        .catch((error) => {
          console.error("이미지 삭제 오류 발생:", error);
        });
    }
  };

  return (
    <div>
      <Navbar page="게시물" />
      <Container>
        <div>
          {imageData ? (
            <div>
              <h1>{imageData.title}</h1>
              <hr />
              <TextContent>
                <p>작성자 {imageData.writer}</p>
                <p>작성 시간 {imageData.createTime}</p>
                <p>수정 시간 {imageData.updateTime}</p>
              </TextContent>
              <hr />
              <ImageContainer>
                {imageData.imageUrls.map((imageUrl, index) => (
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/posts/image-types/images?filename=${imageUrl}`}
                    alt={`Image ${index}`}
                    width={450}
                    height={450}
                  />
                ))}
              </ImageContainer>
            </div>
          ) : (
            <p>이미지 데이터를 불러오는 중...</p>
          )}
        </div>
        <Containerright>
          <Button>수정</Button>
          <Button onClick={imgDelete}>삭제</Button>
        </Containerright>
      </Container>
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
`;
const TextContent = styled.div`
  display: flex;
  justify-content: right;
  p {
    margin-left: 20px;
    font-size: 15px;
  }
`;
