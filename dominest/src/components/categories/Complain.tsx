import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import { ComponenComplaints } from "@/style/ComponentStyle";
import RoomSelector from "@/utils/room/roomnumber";
import { complainborderList } from "@/utils/border/borderlist";
import { Button, Containerright } from "@/style/InputStyle";
import "../../app/globals.css";
import { Container, Table, ButtonContainer } from "@/style/border";
import Link from "next/link";
interface Post {
  id: number;
  title: string;
  roomNo: string;
  createTime: string;
  type: string;
  lastModifiedBy: string;
  lastModifiedTime: string;
  complaintCause: string;
  complaintResolution: string;
  processState: string;
  createdBy: string;
  date: string;
}

export default function Complaints(props: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [status, setStatus] = useState("민원 조회");
  const urlLink = `/complain/complainupload/${props.idname[0]}`;
  const [serch, setSerch] = useState("");
  const [statusresult, setStatusresult] = useState("처리중");
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

  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const onChangeSerch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerch(e.target.value);
  };
  const onChangeStatusresult = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusresult(e.target.value);
  };

  return (
    <div>
      <ComponenComplaints>
        <div>
          <h1>민원접수 내역</h1>
        </div>
        <div>
          <div>
            <select onChange={onChangeStatus}>
              <option value="민원 조회">민원 조회</option>
              <option value="호실 조회">호실 조회</option>
              <option value="처리 조회">처리 조회</option>
            </select>
            {status === "민원 조회" ? (
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                onChange={onChangeSerch}
              />
            ) : status === "호실 조회" ? (
              <RoomSelector />
            ) : (
              <select onChange={onChangeStatusresult}>
                <option value="처리중">처리중</option>
                <option value="처리완료">처리완료</option>
              </select>
            )}

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
                  <td
                    style={{
                      color: post.processState === "처리중" ? "red" : "black",
                      fontWeight:
                        post.processState === "처리중" ? "bold" : "normal",
                    }}
                  >
                    {post.processState}
                  </td>
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
          <Link href={urlLink}>
            <Button>글 작성</Button>
          </Link>
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
