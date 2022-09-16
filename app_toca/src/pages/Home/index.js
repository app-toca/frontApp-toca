import { Container, InnerMiddle } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MiddleDiv } from "./styles";
import { useEffect } from "react";
import { useContext } from "react";
import { PostContext } from "../../providers/Posts";
import Post from "../../components/Post";

const Home = () => {
  const { listPostsOwner, allPostsOwner } = useContext(PostContext);

  useEffect(() => {
    listPostsOwner();
  }, []);

  return (
    <Container>
      <Header />
      <MiddleDiv>
        <InnerMiddle>
          {allPostsOwner.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </InnerMiddle>
      </MiddleDiv>
      <Footer />
    </Container>
  );
};

export default Home;
