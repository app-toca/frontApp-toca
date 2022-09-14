import { BottomDiv, Container, UpperDiv, Img, InputErrorDiv } from "./styles";
import { Input } from "../../components/Input/styles";
import { Button } from "../../components/Button/styles";
import { MiniErrors } from "../../components/MiniErrors/styles";
import Logo from "../../assets/LOGO.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";



const Login = () => {

  const [showPassword, setShowPassword] = useState(false)


  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Formato de e-mail inválido")
      .required("E-mail obrigatório"),
    password: yup.string().required("Senha origatória"),
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

  const onTryingChangePassword = async (data) => {
    const testChange = await axios.post(
      `https://app-toca.herokuapp.com/login/forgot-password/${data.email}`,
      {url: "http://localhost:3000/forgot-password"},
      {
        headers: { "Content-Type": "application/json" },
      })

      console.log(testChange)
  }

  return (
    <Container>
      <UpperDiv>
        <Img alt="logo" src={Logo} />
      </UpperDiv>
      <BottomDiv onSubmit={handleSubmit(onSubmitFunction)}>
        <InputErrorDiv>
          {errors.email && <MiniErrors>{errors.email.message}</MiniErrors>}
          <Input placeholder="E-mail" {...register("email")} />
        </InputErrorDiv>
        <InputErrorDiv>
          {errors.password && (
            <MiniErrors>{errors.password.message}</MiniErrors>
          )}
          <Input
            placeholder="Senha"
          type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button onClick={(e) => {
            e.preventDefault()
            setShowPassword(!showPassword)

          }}>{showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}</button>
        </InputErrorDiv>

        <Button type="submit" width="150px" height="50px" fontSize="20px">
          Login
        </Button>
        <button onClick={handleSubmit(onTryingChangePassword)}>Esqueci a senha</button>
      </BottomDiv>
    </Container>
  );
};

export default Login;
