import styled from "@emotion/styled";

// navbar 최초 div
export const NavStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 7.5vh;
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
  width: 70%;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-left: 0px;

  li {
    width: 150px;
    text-align: center;
    width: 200px;
    &:hover {
      p {
        font-weight: bold;
      }
      ul {
        width: 200px;
        display: block;
      }
    }
    ul {
      top: 7vh;
      align-items: center;
      position: absolute;
      display: none;
      justify-content: center;
      background-color: #dcdcdc;
      border-radius: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: center;

      li {
        width: 100%;
        &:hover {
          background-color: #fff;
          padding-left: auto;
          padding-right: auto;
        }
      }
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
