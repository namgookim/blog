import Header from "../components/header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 3.3125rem;
  padding: 6.25rem 25rem;

  > div:nth-child(2),
  > div:nth-child(3) {
    border-bottom: 3px solid #fbfafb;
    padding: 1rem 0px;
  }

  .title {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  .date {
    display: flex;

    span {
      margin-left: 0.75rem;
      opacity: 0.6;
    }
    span:first-child {
      opacity: 1;
    }
  }

  .edit {
    span {
      margin-right: 0.5rem;
      opacity: 0.6;
      cursor: pointer;
    }
  }

  .content {
    padding: 30px 0px;
  }
`;

const AddComment = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .comment_head {
    font-weight: 900;
  }

  .comment_form {
    margin: 0 auto;
    border: 1px solid black;
    width: 62.5rem;
    min-height: 6.25rem;
    margin: 1.25rem 0px;
  }

  .comment_submit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.625rem;
    height: 3.125rem;
    border-radius: 1.25rem;
    background-color: #215ce4;

    span {
      color: white;
    }
  }
`;

const Comments = styled.div``;

const Detail = () => {
  const data = {
    title: "게시판 제목",
    content: "게시판 UI 테스트를 위한 글입니다.",
    email: "abcde@naver.com",
    date: "2012-02-12",
    time: "06:12:54",
  };

  return (
    <Container>
      <Header></Header>
      <Content>
        <span className="title">{data.title}</span>
        <div className="date">
          <span>{data.email}</span>
          <span>{data.date}</span>
          <span>{data.time}</span>
        </div>
        <div className="edit">
          <span>수정</span>
          <span>삭제</span>
        </div>
        <div className="content">
          <span>{data.content}</span>
        </div>
        <AddComment>
          <span className="comment_head">댓글 입력</span>
          <div className="comment_form"></div>
          <div className="comment_submit">
            <span>제출</span>
          </div>
        </AddComment>
        <Comments></Comments>
      </Content>
    </Container>
  );
};

export default Detail;
