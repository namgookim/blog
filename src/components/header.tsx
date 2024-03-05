import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  border-bottom: 3px solid #f9f7f9;
  width: 100%;
  height: 3.125rem;
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bolder;
  }
`;

const Nav = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 6.25rem;
  span {
    white-space: nowrap;
    margin-left: 2.5rem;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div></div>
      <span 
        onClick={() => {
          navigate("/");
        }}
      >
        Blog
      </span>
      <Nav>
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          글쓰기
        </span>
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          게시판
        </span>
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          프로필
        </span>
      </Nav>
    </Container>
  );
};

export default Header;
