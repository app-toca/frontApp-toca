import { Button, Container } from "./styles";
import { useContext } from "react";
import { CreateSessionContext } from "../../providers/CreateSession";

const ModalLogoutProfile = ({ setDisplayMyProfile, setDisplayRealProf }) => {


  const { exitUser } = useContext(CreateSessionContext)

  const goToProfile = () => {
    setDisplayMyProfile(false);
    setDisplayRealProf(true);
  };

  const logout = () => {
    exitUser()
  };
  return (
    <Container>
      <Button onClick={() => goToProfile()}>Perfil</Button>
      <Button onClick={() => logout()}>Logout</Button>
    </Container>
  );
};
export default ModalLogoutProfile;
