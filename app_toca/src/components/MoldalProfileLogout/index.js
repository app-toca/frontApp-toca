import { Button, Container } from "./styles";
import { useNavigate } from "react-router-dom";

const ModalLogoutProfile = ({ setDisplayMyProfile, setDisplayRealProf }) => {
  const nav = useNavigate();

  const goToProfile = () => {
    setDisplayMyProfile(false);
    setDisplayRealProf(true);
  };

  const logout = () => {
    localStorage.clear();
    nav("/");
  };
  return (
    <Container>
      <Button onClick={() => goToProfile()}>Perfil</Button>
      <Button onClick={() => logout()}>Logout</Button>
    </Container>
  );
};
export default ModalLogoutProfile;
