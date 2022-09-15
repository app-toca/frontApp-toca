import { Container, MemberContainer, Circle, Name, UserImg } from "./styles";

const AreaMembers = ({ members }) => {
  return (
    <Container>
      {members?.map((user, index) => {
        return (
          <MemberContainer key={index}>
            <Circle>
              <UserImg alt="userImg" src={user.img.url} />
            </Circle>
            <Name>{user.nickname}</Name>
          </MemberContainer>
        );
      })}
    </Container>
  );
};

export default AreaMembers;
