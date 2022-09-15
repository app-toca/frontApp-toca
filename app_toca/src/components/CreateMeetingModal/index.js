import { IoMdClose } from "react-icons/io";
// import { AreaTitleDiv } from "../ListMeetingsModal/styles";
import { AreaTitleDiv, Container, CreateMeetingForm } from "./styles";

export const CreateMeetingModal = ({ data_time, setCreateMeeting }) => {
  return (
    <Container>
      <AreaTitleDiv>
        <p>Meeting</p>
        <p>
          <IoMdClose onClick={() => setCreateMeeting(false)} />
        </p>
      </AreaTitleDiv>
      <CreateMeetingForm>
        <label>Descrição</label>
        <textarea className="description_input" />
        <label>Duração</label>
        <input />
        <label>Data</label>
        <input value={data_time} disabled />
        <label>Link Ata</label>
        <input />
        <button>Enviar</button>
      </CreateMeetingForm>
    </Container>
  );
};
