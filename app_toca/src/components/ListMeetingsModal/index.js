import {
  AreaTitleDiv,
  Container,
  Meeting,
  MeetingDivs,
  MeetingInfoDiv,
} from "./styles";
import { api } from "../../services/data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";

export const ListMeetingModal = ({ openModal }) => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    api
      .get(`/meetings`)
      .then((res) => setMeetings(res.data))
      .catch((err) => toast.error(err));
  }, [meetings]);

  return (
    <Container>
      <AreaTitleDiv>
        <p>Area</p>
        <p>
          <IoMdClose onClick={openModal} />
        </p>
      </AreaTitleDiv>
      <MeetingInfoDiv>
        <p>Reunião</p>
        <p>Data</p>
        <p>Ata</p>
      </MeetingInfoDiv>
      <MeetingDivs>
        {meetings.map((meeting) => {
          return <Meeting></Meeting>;
        })}
      </MeetingDivs>
    </Container>
  );
};
