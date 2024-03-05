import styled from "styled-components";
import { useForm } from "react-hook-form";

import Header from "../components/header";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 3.3125rem;
  padding: 0px 15rem;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
  span {
    margin: 0.625rem 0px;
    font-weight: bolder;
  }
  input {
    border: 0.0625rem solid #f2f0f2;
    border-radius: 0.3125rem;
    height: 1.875rem;
    font-size: 1rem;
  }

  .form_content {
    min-height: 25rem;
    overflow: scroll;
  }

  button {
    background-color: #215ce4;
    margin-top: 1.25rem;
    height: 1.875rem;
    border: none;
    border-radius: 10px;
  }
`;

const Post = () => {
  const { register, handleSubmit } = useForm();

  const onValid = () => {
    // DB에 해당 게시글을 올릴 API 로직 구성
    console.log("OK");
  };

  return (
    <Container>
      <Header></Header>
      <Content>
        <PostForm onSubmit={handleSubmit(onValid)}>
          <span>제목</span>
          <input className="form_title" {...register("title", { required: true })} />
          <span>요약</span>
          <input className="form_subscript" {...register("subscript", { required: true })} />
          <span>내용</span>
          <input className="form_content" {...register("content", { required: true })} />
          <button>
            <span>제출</span>
          </button>
        </PostForm>
      </Content>
    </Container>
  );
};

export default Post;
