import {
  Centered,
  Container,
  TitleDiv,
  Title,
  LeftTitleDiv,
  RightTitleDiv,
  BottomDiv,
  Bottom,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MeetingsContext } from "../../providers/Meetings";
import MeetModal from "../Meet";
import { ButtonSecondary } from "../Button/styles";
import { ButtonPrimary } from "../MyProfile/styles";

export const ListMeetingModal = ({
  setOpenMeetings,
  area_id,
  setOpenSchedule,
  openSchedule,
}) => {
  const { meetingsPerArea, meetings } = useContext(MeetingsContext);
  console.log(meetings);
  useEffect(() => {
    meetingsPerArea(area_id);
  }, []);

  return (
    <Container>
      <Centered>
        <TitleDiv>
          <LeftTitleDiv>
            <Title>Reuniões</Title>
          </LeftTitleDiv>
          <RightTitleDiv>
            <IoMdClose onClick={() => setOpenMeetings(false)} fontSize="25px" />
          </RightTitleDiv>
        </TitleDiv>
        <BottomDiv>
          {meetings.map((meeting) => (
            <MeetModal meeting={meeting} />
          ))}
        </BottomDiv>
        <Bottom>
          <ButtonPrimary
            onClick={() => setOpenSchedule(!openSchedule)}
            height="30px"
            width="40%"
          >
            Melhores horários
          </ButtonPrimary>
          <ButtonSecondary width="40%" height="30px">
            Criar Reunião
          </ButtonSecondary>
        </Bottom>
      </Centered>
    </Container>
  );
};
