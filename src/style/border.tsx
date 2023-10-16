import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ContainerComplainEdit = styled.div`
  width: 100%;
  margin: 0 auto;

  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  .manytext {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .id {
    width: 10%;
  }
  .title {
    width: 60%;
  }
  .titlecontent {
    text-align: left;
    width: 60%;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  tr {
    &:hover {
      background-color: #999999;
    }
    td {
      border: none;
      border-bottom: 1px solid #e5e5e5;
      padding: 8px;
      text-align: center;
    }
  }
  th {
    border-bottom: 1px solid black;
    background-color: white;
    padding: 8px;
    text-align: center;
  }
`;
