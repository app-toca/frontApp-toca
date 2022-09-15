import { IoMdClose } from "react-icons/io";
// import { AreaTitleDiv } from "../ListMeetingsModal/styles";
import { Container, CreateMeetingForm } from "./styles";

export const CreateMeetingModal = ({ setOpenMeeting }) => {
  return (
    <Container>
      {/* <AreaTitleDiv>
        <p>Meeting</p>
        <p>
          <IoMdClose onClick={() => setOpenMeeting(false)} />
        </p>
      </AreaTitleDiv> */}
      <CreateMeetingForm>
        <label>Descrição</label>
        <textarea className="description_input" />
        <label>Duração</label>
        <input />
        <label>Data</label>
        <input />
        <label>Link Ata</label>
        <input />
        <button>Enviar</button>
      </CreateMeetingForm>
    </Container>
  );
};
