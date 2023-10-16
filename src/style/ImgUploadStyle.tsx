import styled from "@emotion/styled";

export const Inputt = styled.div`
  input {
    display: none;
  }
`;

export const TitleInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  input {
    margin-left: 10px;
    width: 90%;
    height: 30px;
    border: 1px solid gray;
    border-radius: 10px;
  }
`;
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  section {
    width: 100%;
    height: 100%;
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      margin-top: 20px;
      width: 100%;
      height: 40px;
      border-radius: 10px;
      border: none;
      background: rgb(77, 77, 77);
      color: #fff;
      &:hover {
        background: rgb(0, 0, 0);
      }
    }
  }
`;

export const ImageInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  .file-preview {
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
  }
  .file-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .file-preview + .file-preview {
    margin-left: 10px;
  }
  .file-preview:first-of-type {
    margin-left: 0;
  }
  .file-preview:last-of-type {
    margin-right: 0;
  }

  .viewer {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .upload-box {
    width: 100%;
    height: 300px;
    border: 1px solid gray;
    box-shadow: 2px 3px 9px hsl(0, 0%, 47%);
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
    .noneimg {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        margin-top: 10px;
      }
    }
  }
`;
