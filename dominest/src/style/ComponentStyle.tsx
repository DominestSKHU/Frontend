import styled from "@emotion/styled";

export const ComponentDiv = styled.div`
  margin-left:auto;
  margin-right:auto;
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
`;


export const ComponentTable = styled.table`
border-collapse: collapse;
width: 100%;
top : 100%;
margin-left:auto;
margin-right:auto;

td, th {
  width: auto;
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
