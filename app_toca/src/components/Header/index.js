import { Centralized, Container, Img, ProfileImg } from "./styles";
import NavPages from "../NavPages";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/LOGO.svg";
import MyProfile from "../MyProfile";
import { useState } from "react";
import ModalLogoutProfile from "../MoldalProfileLogout";
import MyProfileUpdate from "../MyProfileUpdate";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [displayMyProfile, setDisplayMyProfile] = useState(false);
  const [displayRealProf, setDisplayRealProf] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);

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
          src={Logo}
          onClick={() => setDisplayMyProfile(!displayMyProfile)}
        />
      </Centralized>
    </Container>
  );
};

export default Header;
