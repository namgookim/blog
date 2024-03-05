import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-top: 3.3125rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 31.25rem;
`;

const Item = styled.div`
  border-bottom: 1px solid black;
  padding: 30px 0px;
`;

const PostHead = styled.div`
  display: flex;
  align-items: center;
  div {
    background-color: antiquewhite;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  span {
    margin: 0px 0.3125rem;
    opacity: 0.6;
  }
`;
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 0.625rem;
  }
  .title {
    font-size: 1.25rem;
    font-weight: bolder;
    &:hover {
      cursor: pointer;
    }
  }
`;
const PostEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 1.25rem;
  span {
    font-size: 0.875rem;
    margin-left: 10px;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

interface MyComponentProps {
  title: string;
  content: string;
  email: string;
  date: string;
  time: string;
}

const PostList = ({ datas }: { datas: MyComponentProps[] }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {datas.map((item) => {
        return (
          <Item
            onClick={() => {
              navigate("/detail");
            }}
            id={`${item}`}
          >
            <PostHead>
              <div></div>
              <span>{item.email}</span>
              <span>{item.date}</span>
              <span>{item.time}</span>
            </PostHead>
            <PostContent>
              <span className="title">{item.title}</span>
              <span className="content">{item.content}</span>
            </PostContent>
            <PostEdit>
              <span>수정</span>
              <span>삭제</span>
            </PostEdit>
          </Item>
        );
      })}
    </Container>
  );
};

export default PostList;
