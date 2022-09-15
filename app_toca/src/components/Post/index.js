import { Centralized, Container, PostAreaTitle, PostText } from "./styles";

const Post = ({ post }) => {
  return (
    <Container>
      <Centralized>
        <PostAreaTitle>
          {post.area.name} - {post.user.nickname}
        </PostAreaTitle>
        <PostText>{post.content}</PostText>
      </Centralized>
    </Container>
  );
};

export default Post;
