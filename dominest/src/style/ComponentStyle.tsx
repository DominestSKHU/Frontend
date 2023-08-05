import styled from "@emotion/styled";

export const ComponentDiv = styled.div`
  margin-left:auto;
  margin-right:auto;
  width: 80%;
`;

export const ComponentTable = styled.table`
border-collapse: collapse;
width: 100%;
margin-left:auto;
margin-right:auto;
td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    }
button {
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    width: 100px;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
    background: rgb(77, 77, 77);
    color: #fff;
    }
}

`;
