import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import { ComponenComplaints } from "@/style/ComponentStyle";
import RoomSelector from "@/utils/room/roomnumber"; // 수정된 import 경로
import { complainborderList } from "@/utils/border/borderlist";
import { Button, Containerright } from "@/style/InputStyle";
import "../../app/globals.css";
import { Container, Table, ButtonContainer } from "@/style/border";

export default function Complaints(props: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await complainborderList(props.idname, currentPage);
        console.log(response.data.data);
        setPosts(response.data.data.complaints);
        setCurrentPage(response.data.data.page.currentPage);
        setTotalPages(response.data.data.page.totalPages);
        setCategoryName(response.data.data.category.categoryName);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      <ComponenComplaints>
        <div>
          <h1>민원접수 내역</h1>
        </div>
        <div>
          <div>
            <select>
              <option value="전체 조회">전체 조회</option>
              <option value="호실 조회">호실 조회</option>
              <option value="민원 조회">민원 조회</option>
              <option value="처리 조회">처리 조회</option>
            </select>
            <RoomSelector />
            <input type="text" placeholder="검색어를 입력하세요" />
            <button>조회</button>
            <button>추가</button>
          </div>
        </div>
      </ComponenComplaints>
      <Container>
        <h3>{categoryName}</h3>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>방번호</th>
              <th>민원 내역</th>
              <th>민원 답변</th>
              <th>민원 결과</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.roomNo}</td>
                  <td>{post.complaintCause}</td>
                  <td>{post.complaintResolution}</td>
                  <td>{post.processState}</td>
                  <td>{post.createdBy}</td>
                  <td>{post.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* 글작성 버튼 */}
        <Containerright>
          <Button>글 생성</Button>
        </Containerright>

        {/* 페이지 넘기기 */}
        <ButtonContainer>
          {currentPage > 1 && (
            <Button onClick={() => setCurrentPage(currentPage - 1)}>
              이전 페이지
            </Button>
          )}
          {currentPage < totalPages && (
            <Button onClick={() => setCurrentPage(currentPage + 1)}>
              다음 페이지
            </Button>
          )}
        </ButtonContainer>
      </Container>
    </div>
  );
}
