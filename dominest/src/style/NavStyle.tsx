import styled from "@emotion/styled";

// navbar 최초 div
export const NavStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 56px;
  background-color: #dcdcdc;

  .Link {
    text-decoration: none;
    color: inherit;

    align-items: center;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 45%;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-left: 0px;

  li {

    text-align: center;
    width: 170px;
    &:hover {
      background-color: #c4c4c4;
      
      p {
        font-weight: bold;
      }
      ul {
    
        display: block;
      }
    }
    ul {
      box-shadow: 5px 5px 5px gray;
      border:   1px solid #c4c4c4;
      width: 169px;
      top:56px;
      position: absolute;
      display: none;
      background-color: white;
      border-radius: 0px 0px 5px 5px;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: center;

      
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

  button {
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
export const NavItem = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;
