import {
  Container,
  CenteredDiv,
  Div1,
  Div2,
  Div21,
  Text1,
  Div22,
  Div12,
  Div3,
  Div4,
  Div5,
  Div6,
  Div11,
  Text2,
  ButtonPrimary,
  Text3,
  Img,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import img from "../../assets/image (1).png";
import BoxUpload from "../BoxUpload";
import { useContext } from "react";
import { CreateSessionContext } from "../../providers/CreateSession";

const MyProfile = ({ setDisplayRealProf, setDisplayEdit }) => {
  
  const {user} = useContext(CreateSessionContext)


  return (
    <Container>
      <CenteredDiv>
        <Div1>
          <Div11>
            <AiOutlineCloseCircle
              fontSize="30px"
              color="#012B40"
              onClick={() => setDisplayRealProf(false)}
            />
            <Text1>{user.nickname}</Text1>
            <Text2>{user.name}</Text2>
          </Div11>
          <Div12>
            <Img src={user.img.url} alt="user.img" />
          </Div12>
        </Div1>
        <Div2>
          <Div21>
            <Text1>Area(s)</Text1>
          </Div21>
          <Div22>
            {/*user.area.map((a, index) => (
              <Text3 key={index}>{a}</Text3>
            ))*/}
          </Div22>
        </Div2>
        <Div3>
          <Text1>{user.email}</Text1>
        </Div3>
        <Div4>
          <Text1>{user.age}</Text1>
          <Text1>{user.year}</Text1>
          <Text1>{user.course}</Text1>
        </Div4>
        <Div5>
          <Text1>{user.phrase}</Text1>
        </Div5>
        <Div6>
          <ButtonPrimary
            onClick={() => {
              setDisplayRealProf(false);
              setDisplayEdit(true);
            }}
            width="150px"
            height="50px"
            fontSize="20px"
          >
            Editar Perfil
          </ButtonPrimary>
        </Div6>
      </CenteredDiv>
    </Container>
  );
};

export default MyProfile;
