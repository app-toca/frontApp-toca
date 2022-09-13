import { Container } from "./styles";
import { api } from "../../services/data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ListMeetingModal = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    api
      .get(`/meetings`)
      .then((res) => setMeetings(res.data))
      .catch((err) => toast.error(err));
  }, [meetings]);

  return (
    <Container>
      <div>
        <h1>Area</h1>
      </div>
      <div>
        <h3>Reunião</h3>
        <h3>Data</h3>
        <h3>Ata</h3>
      </div>
      <div>DivMeeting</div>
    </Container>
  );
};
