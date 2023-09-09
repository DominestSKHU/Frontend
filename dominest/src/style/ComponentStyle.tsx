import styled from "@emotion/styled";

export const ComponentDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 500px;
  margin-bottom: 20px;
`;

export const ComponentDiv2 = styled.div`
  margin: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: auto;
  border: 1px solid black;
  h1 {
    text-align: center;
  }
`;
export const ComponentDiv3 = styled.div`
  margin: 20px;
  width: 100%;
  align-items: center;
  overflow: auto;
  h1 {
    text-align: center;
  }
`;

export const ComponenComplaints = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  select {
    width: 100px;
    height: 30px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 10px;
  }

  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    select {
      width: 100px;
      height: 30px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding-left: 10px;
    }
    input {
      width: 400px;
      height: 30px;
      margin-right: 10px;
      margin-left: 10px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding-left: 10px;
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
  }
`;

export const ComponentTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  top: 100%;
  margin-left: auto;
  margin-right: auto;

  td,
  th {
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

export const StudentDataTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  top: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 250%;

  td,
  th {
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
