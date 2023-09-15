import styled from "@emotion/styled";
export const CardKeyInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  input {
    width: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding-left: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    label {
      text-align: right;
      margin-right: 5px;
      width: 100px;
    }

    select {
      width: 100px;
      height: 30px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
    }
  }
`;
export const CardKeyTextbox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    label {
      text-align: right;
      margin-right: 10px;
      width: 100px;
    }

    textarea {
      width: 600px;
      height: 100px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding-left: 10px;
    }
  }
`;
export const ButtonStyle = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
  margin-right: 20%;
  button {
    width: 100px;
    height: 30px;
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    &:hover {
      background-color: #d9d9d9;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      transition: 0.5s;
    }
  }
`;
