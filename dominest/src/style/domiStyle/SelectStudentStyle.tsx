import styled from "@emotion/styled";

export const InModal = styled.div`
  width: 48%;
  height: 39%;
  position: absolute;
  top: 27%;
  left: 17%;
  border: 1px solid;
  border-radius: 10px;
`;
export const ResidentList = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem auto;
  width: 80%;
  border-radius: 10px;
  border: 1px solid;

`;
export const DormitoryDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
export const CheckOn = styled(DormitoryDetail)`
  border: 1px solid;
`;


export const StudentButton = styled.button`
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  &:hover {
    background: rgb(77, 77, 77);
    color: #fff;
  }
`;
