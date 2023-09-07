import styled from "@emotion/styled";
export const ParcelInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    label {
      text-align: right;
      margin-right: 10px;
      width: 100px;
    }
    input {
      width: 140  px;
      height: 30px;
      margin-right: 30px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding-left: 10px;
    }
    select {
      width: 100px;
      height: 30px;

      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding-left: 10px;
    }
    textarea {
      width: 200px;
      height: 100px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding-left: 10px;
    }
  }
`;
export const ParcelTextbox = styled.div`
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
      width: 800px;
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
  margin-right: 112px;
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
