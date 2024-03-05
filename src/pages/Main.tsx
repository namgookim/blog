import styled from "styled-components";

import Header from "../components/header";
import PostList from "../components/PostList";

const Container = styled.div`
  position: relative;
  display: flex;
`;

const Main = () => {
  const datas = [
    {
      title: "게시판 글",
      content: "게시판 UI 테스트를 위한 글입니다.",
      email: "abcde@naver.com",
      date: "2012-02-12",
      time: "06:12:54",
    },
    {
      title: "게시판 글",
      content: "게시판 UI 테스트를 위한 글입니다.",
      email: "abcde@naver.com",
      date: "2012-02-12",
      time: "06:12:54",
    },
    {
      title: "게시판 글",
      content: "게시판 UI 테스트를 위한 글입니다.",
      email: "abcde@naver.com",
      date: "2012-02-12",
      time: "06:12:54",
    },
  ];

  return (
    <Container>
      <Header></Header>
      <PostList datas={datas}></PostList>
    </Container>
  );
};

export default Main;
