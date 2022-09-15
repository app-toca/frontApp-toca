import {
  Container,
  CenteredDiv,
  Div1,
  Div2,
  Div21,
  Text1,
  Div22,
  Div3,
  Div4,
  Div5,
  Div6,
  Div11,
  Text2,
  Div12,
  Input,
  Img,
} from "./styles";
import { Button, ButtonSecondary } from "../Button/styles";
import BoxUpload from "../BoxUpload";
import { useContext } from "react";
import { CreateSessionContext } from "../../providers/CreateSession";

const MyProfileUpdate = ({ setDisplayRealProf, setDisplayEdit }) => {

  const {user} = useContext(CreateSessionContext)

  return (
    <Container>
      <CenteredDiv>
        <Div1>
          <Div11>
            <Input width="88%" height="30px" placeholder={user.nickname} />
            <Input width="88%" height="30px" placeholder={user.name} />
          </Div11>
          <Div12>
            <BoxUpload url={user.img.url} />
          </Div12>
        </Div1>
        <Div2>
          <Div21>
            <Text1>Area(s)</Text1>
          </Div21>
          <Div22>
            {/*user.area.map((a, index) => (
              <Text2 key={index}>{a}</Text2>
            ))*/}
          </Div22>
        </Div2>
        <Div3>
          <Input width="100%" height="45px" placeholder={user.email} />
        </Div3>
        <Div4>
          <Input width="25%" height="45px" placeholder={user.age} />
          <Input width="25%" height="45px" placeholder={user.year} />
          <Input width="25%" height="45px" placeholder={user.course} />
        </Div4>
        <Div5>
          <Input width="100%" height="45px" placeholder={user.phrase} />
        </Div5>
        <Div6>
          <Button width="150px" height="50px" fontSize="20px">
            Salvar
          </Button>
          <ButtonSecondary
            width="150px"
            height="50px"
            fontSize="20px"
            onClick={() => setDisplayEdit(false)}
          >
            Cancelar
          </ButtonSecondary>
        </Div6>
      </CenteredDiv>
    </Container>
  );
};

export default MyProfileUpdate;
