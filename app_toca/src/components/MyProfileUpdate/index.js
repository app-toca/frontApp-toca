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
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button, ButtonSecondary } from "../Button/styles";
import img from "../../assets/image (1).png";

const MyProfileUpdate = ({ setDisplayRealProf, setDisplayEdit }) => {
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
            <Input width="88%" height="30px" placeholder={user.apelido} />
            <Input width="88%" height="30px" placeholder={user.nome} />
          </Div11>
          <Div12>
            <Img src={user.img} alt="userImage" />
          </Div12>
        </Div1>
        <Div2>
          <Div21>
            <Text1>Area(s)</Text1>
          </Div21>
          <Div22>
            {user.area.map((a, index) => (
              <Text2 key={index}>{a}</Text2>
            ))}
          </Div22>
        </Div2>
        <Div3>
          <Input width="100%" height="45px" placeholder={user.email} />
        </Div3>
        <Div4>
          <Input width="25%" height="45px" placeholder={user.idade} />
          <Input width="25%" height="45px" placeholder={user.ano} />
          <Input width="25%" height="45px" placeholder={user.curso} />
        </Div4>
        <Div5>
          <Input width="100%" height="45px" placeholder={user.frase} />
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
