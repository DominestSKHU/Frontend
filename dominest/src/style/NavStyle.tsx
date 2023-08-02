import styled from "@emotion/styled";

// navbar 최초 div
export const NavStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 6vh;
  background-color: #dcdcdc;
`;

export const LeftNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  width: 30vw;
  li {
    width: 200px;
    text-align: center;
    
    &:hover {
        background-color: black;
        ul{
      
      display:block;
    }}
    ul {
  
        display:none;
 
      align-items: center; 
    }
  }
`;
