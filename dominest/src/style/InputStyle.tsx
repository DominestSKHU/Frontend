import styled from "@emotion/styled";

/*
파일 업로드 관련 CSS
    <label htmlFor="file">파일 업로드</label>
    <input type="file" id="file" accept=".zip" />
    <button>업로드 </button>
위 양식사용을 기준으로 제작
    */

export const FileUpload = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  input {
    padding-left: 10px;
    width: 40%;
    height: 100%;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 0px 10px 10px 0px;
    text-align: left;
    line-height: 40px;
  }
  label {
    line-height: 40px;
    padding: auto;
    text-align: center;
    width: 10%;
    height: 100%;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }
  input[type="file"]::file-selector-button {
    display: none;
  }
  button {
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
    border-radius: 10px;
    width: 100px;
    height: 100%;
    margin: 0px;
    margin-left: 10px;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }
`;

export const DormitoryYear = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  select {
    width: 180px;
    height: 41px;
    margin: 5px;
    border-radius: 5px;
    background-color: #f7f7f7;
  }
`;
export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  margin-left: 20px;

  border-radius: 10px;
  width: 180px;
  height: 40px;
  &:hover {
    background: rgb(77, 77, 77);
    color: #fff;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Containerright = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
  width: 100%;
`;
