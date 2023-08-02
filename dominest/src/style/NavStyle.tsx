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

  li {
    width: 200px;
    text-align: center; 
   
    &:hover {
        ul{
      width: 200px;
      display:block;
     
    }}
    ul {
      align-items: center; 
      position: absolute;
    
      display: flex;
      justify-content: center;
    }
  }
`;
export const LoginState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  
  button{
    background-color: white;
    border: none;
  }
  & > .loginIcon,
  span {
    width: fit-content;
  }
  & > .logout {
    display: none;
  }
  &:hover {
    & > .loginIcon,
    span {
      display: none;
    }
    & > .logout {
      display: block;
    }
  }
`;