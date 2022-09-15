import { Centralized, Container, Img, ProfileImg } from "./styles";
import NavPages from "../NavPages";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/LOGO.svg";
import MyProfile from "../MyProfile";
import { useContext, useState } from "react";
import ModalLogoutProfile from "../MoldalProfileLogout";
import MyProfileUpdate from "../MyProfileUpdate";
import { CreateSessionContext } from "../../providers/CreateSession";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [displayMyProfile, setDisplayMyProfile] = useState(false);
  const [displayRealProf, setDisplayRealProf] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);

  const { user } = useContext(CreateSessionContext);

  return (
    <Container>
      <Centralized>
        <AiOutlineMenu
          onClick={() => setDisplayNav(!displayNav)}
          color="white"
          fontSize="35px"
        />
        {displayMyProfile && (
          <ModalLogoutProfile
            setDisplayMyProfile={setDisplayMyProfile}
            setDisplayRealProf={setDisplayRealProf}
            displayRealProf={displayRealProf}
          />
        )}
        {displayRealProf && (
          <MyProfile
            setDisplayRealProf={setDisplayRealProf}
            setDisplayEdit={setDisplayEdit}
          />
        )}
        {displayEdit && (
          <MyProfileUpdate
            displayRealProf={displayRealProf}
            setDisplayRealProf={setDisplayRealProf}
            displayEdit={displayEdit}
            setDisplayEdit={setDisplayEdit}
          />
        )}
        {displayNav && <NavPages />}
        <Img alt="logo" src={Logo} />
        <ProfileImg
          alt="profileImg"
          src={user.img.url}
          onClick={() => setDisplayMyProfile(!displayMyProfile)}
        />
      </Centralized>
    </Container>
  );
};

export default Header;
