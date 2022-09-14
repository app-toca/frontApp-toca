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
import {useParams} from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Forgot = () => {
  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Sua senha deve ter pelo menos 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "Senhas não combinam")
  });

  let { token, email } = useParams();

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async(data) => {
    console.log(token)
    console.log(data.password)
    console.log(email)

    const response = await axios.post(
      `https://app-toca.herokuapp.com/login/change-password/${email}`,
      {newPassword: data.password},
      {
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      }
    );

    console.log(response)
  };

  return (
    <Container>
      <UpperDiv>
        <Img alt="logo" src={Logo} />
      </UpperDiv>
      <BottomDiv onSubmit={handleSubmit(onSubmitFunction)}>
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

        <InputErrorDiv>
          {errors.confirmPassword && <MiniErrors>{errors.confirmPassword.message}</MiniErrors>}
          <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirme a senha" {...register("confirmPassword")} />
          <button onClick={(e) => {
            e.preventDefault()
            setShowConfirmPassword(!showConfirmPassword)

          }}>{showConfirmPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}</button>
        </InputErrorDiv>

        <Button type="submit" width="150px" height="50px" fontSize="20px">
          Mudar senha
        </Button>
      </BottomDiv>
    </Container>
  );
};

export default Forgot;
