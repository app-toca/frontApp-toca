import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  AreaTitle,
  ButtonsDiv,
  Container,
  MembersDiv,
  MiddleDiv,
  PostDiv,
} from "../AreaPagesStyle/styles.js";
import { Button, ButtonSecondary } from "../../components/Button/styles";
import Post from "../../components/Post";
import AreaMembers from "../../components/AreaMembers";
import AreaDescription from "../../components/AreaDescription";
import { useContext, useEffect, useState } from "react";
import { AreasContext } from "../../providers/Areas";
import { CreateSessionContext } from "../../providers/CreateSession";
import { PostContext } from "../../providers/Posts";
import { CreateMeetingModal } from "../../components/CreateMeetingModal";
import ModalSchedule from "../../components/ModalSchedules";


const AreaPage = ({ area }) => {
  const [openMeetings, setOpenMeetings] = useState(false);

  const { listUsersFromArea, users } = useContext(AreasContext);
  const { user } = useContext(CreateSessionContext);
  const { listPostsFromArea, postsFromArea } = useContext(PostContext);

  useEffect(() => {
    listUsersFromArea(area.id);
    listPostsFromArea(area.id);
    //ver como pegar o ultimo post
  }, []);

  return (
    <Container>
      <Header />
      <MiddleDiv>
        <AreaTitle>{area?.name}</AreaTitle>
        <MembersDiv>
          <AreaMembers members={users} />
        </MembersDiv>
        <AreaDescription text={area?.description} />
        <PostDiv>
          {postsFromArea.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </PostDiv>
        <ButtonsDiv>
          {user.is_owner && (
            <Button width="30%" height="40px" fontSize="17px">
              Criar post
            </Button>
          )}
          <ButtonSecondary width="30%" height="40px" fontSize="17px">
            Reuniões
          </ButtonSecondary>
        </ButtonsDiv>
      </MiddleDiv>
      {/*<ModalSchedule area_id={area.id}/>*/}
      
      <Footer />
    </Container>
  );
};

export default AreaPage;
