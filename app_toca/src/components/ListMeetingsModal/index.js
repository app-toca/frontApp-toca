import {
  AreaTitleDiv,
  Container,
  Meeting,
  MeetingDivs,
  MeetingInfoDiv,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MeetingsContext } from "../../providers/Meetings";

export const ListMeetingModal = ({ setOpenMeeting, area_id }) => {
  const { meetingsPerArea } = useContext(MeetingsContext);
  const [meetings, setMeetings] = useState([]);

  useEffect(()=> {
    setMeetings(meetingsPerArea(area_id));
  }, [meetings])

  return (
    <Container>
      <AreaTitleDiv>
        <p>Area</p>
        <p>
          <IoMdClose onClick={() => setOpenMeeting(false)} />
        </p>
      </AreaTitleDiv>
      <MeetingInfoDiv>
        <p>Reunião</p>
        <p>Data</p>
        <p>Ata</p>
      </MeetingInfoDiv>
      <MeetingDivs>
        {meetings?.map((meeting) => {
          return <Meeting>
            <p>{meeting.description}</p>
            <p>{meeting.date_time}</p>
            <a href={meeting.area}>Ata</a>
          </Meeting>;
        })}
      </MeetingDivs>
    </Container>
  );
};
