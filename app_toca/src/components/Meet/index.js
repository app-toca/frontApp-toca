import { Container, LeftDiv, RightDiv, Text } from "./styles";
import { ButtonPrimary } from "../MyProfile/styles";

const MeetModal = ({ meeting }) => {
  const goToAta = () => {};
  return (
    <Container>
      <LeftDiv>
        <Text>{meeting.description}</Text>
        <Text>{meeting.date_time}</Text>
      </LeftDiv>
      <RightDiv>
        <ButtonPrimary onClick={() => goToAta()}>ATA</ButtonPrimary>
      </RightDiv>
    </Container>
  );
};
export default MeetModal;
