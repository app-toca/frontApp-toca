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
  TextArea,
} from "./styles";
import { Button, ButtonSecondary } from "../Button/styles";
import BoxUpload from "../BoxUpload";
import { useContext } from "react";
import { CreateSessionContext } from "../../providers/CreateSession";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UsersContext } from "../../providers/Users";
import { toast } from "react-toastify";

const MyProfileUpdate = ({ setDisplayRealProf, setDisplayEdit }) => {
  const { user } = useContext(CreateSessionContext);
  const { areasUser, updateUser } = useContext(UsersContext);

  const formSchema = yup.object().shape({
    nickname: yup.string(),
    name: yup.string(),
    age: yup.number(),
    year: yup.number(),
    course: yup.string(),
    phrase: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <CenteredDiv onSubmit={handleSubmit(onSubmitFunction)}>
        <Div1>
          <Div11>
            <Input
              width="88%"
              height="30px"
              placeholder={user.nickname}
              {...register("nickname")}
            />
            <Input
              width="88%"
              height="30px"
              placeholder={user.name}
              {...register("name")}
            />
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
            {areasUser.map((a, index) => (
              <Text2 key={index}>{a.name}</Text2>
            ))}
          </Div22>
        </Div2>
        <Div3>
          <Text1>{user.email}</Text1>
        </Div3>
        <Div4>
          <Input
            width="25%"
            height="45px"
            placeholder={user.age}
            {...register("age")}
          />
          <Input
            width="25%"
            height="45px"
            placeholder={user.year}
            {...register("year")}
          />
          <Input
            width="25%"
            height="45px"
            placeholder={user.course}
            {...register("course")}
          />
        </Div4>
        <Div5>
          <TextArea
            width="100%"
            height="100%"
            placeholder={user.phrase}
            {...register("phrase")}
          />
        </Div5>
        <Div6>
          <Button type="submit" width="150px" height="50px" fontSize="20px">
            Salvar
          </Button>
          <ButtonSecondary
            width="150px"
            height="50px"
            fontSize="20px"
            type="button"
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
