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
  ButtonPrimary,
  Text3,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import img from "../../assets/image (1).png";
import BoxUpload from "../BoxUpload";

const MyProfile = ({ setDisplayRealProf, setDisplayEdit }) => {
  const user = {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: ["Marketing", "Administração"],
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "A vida não é um morango",
    id: 1,
  };
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
            <Text1>{user.apelido}</Text1>
            <Text2>{user.nome}</Text2>
          </Div11>
          <BoxUpload />
        </Div1>
        <Div2>
          <Div21>
            <Text1>Area(s)</Text1>
          </Div21>
          <Div22>
            {user.area.map((a, index) => (
              <Text3 key={index}>{a}</Text3>
            ))}
          </Div22>
        </Div2>
        <Div3>
          <Text1>{user.email}</Text1>
        </Div3>
        <Div4>
          <Text1>{user.idade}</Text1>
          <Text1>{user.ano}</Text1>
          <Text1>{user.curso}</Text1>
        </Div4>
        <Div5>
          <Text1>{user.frase}</Text1>
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
