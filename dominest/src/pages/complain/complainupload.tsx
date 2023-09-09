import React from "react";
import Navbar from "@/components/AdminNavbar";
import { Container, Table, ButtonContainer } from "@/style/border";
import RoomSelector from "@/utils/room/roomnumber";
export default function ComplainUpload() {
  return (
    <div>
      <Navbar page="민원 작성" />
      <Container>
        <h3>민원 작성</h3>
        <div>
          <label>방번호</label>
          <RoomSelector />
        </div>

        <Table>
          <thead>
            <tr>
              <th>방번호</th>
              <th>민원 내역</th>
              <th>민원 답변</th>
              <th>민원 결과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
        <ButtonContainer>
          <button>작성</button>
        </ButtonContainer>
      </Container>
    </div>
  );
}
