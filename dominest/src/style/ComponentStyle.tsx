import styled from "@emotion/styled";

export const ComponentDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 80%;
  height: 500px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const CardKeyUploadStyle = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: auto;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`;

export const ComponentDiv2 = styled.div`
  width: 95%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;

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

export const StudentComponent = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  width: 80%;
  height: 500px;
  min-height: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
`;

export const CardKeyDiv = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: auto;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  input {
    width: 400px;
    height: 30px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 10px;
    margin-right: 10px;
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
  select {
    width: 100px;
    height: 30px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
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
  margin-left: 30%;
  margin-top: 522%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    white-space: nowrap;
  }
  button {
    font-size: 8px;
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

export const ButtonDiv = styled.div`
  margin-right: 10%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const StudentAddStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100px;
    height: 30px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  button {
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    width: auto;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }
`;

export const StudentEditStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100px;
    height: 30px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  button {
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    width: auto;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }
`;

export const StudentEditStyle2 = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  table {
    border-collapse: collapse;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    td,
    th {
      border: 1px solid #dddddd;
      white-space: nowrap;
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
  }
`;
