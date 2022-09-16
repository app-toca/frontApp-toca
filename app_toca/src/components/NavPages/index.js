import { Container, PageContainer } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa"; //Adm

import { useContext } from "react";
import { AreasContext } from "../../providers/Areas";

const NavPages = () => {
  const navigate = useNavigate();

  const { allAreas, setCurrentArea } = useContext(AreasContext);

  return (
    <Container>
      {allAreas.map((page, index) => {
        return (
          <Link
            style={{ width: "95%" }}
            key={index}
            to={`/${page.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")}`}
            onClick={() => setCurrentArea({ name: page.name, id: page.id })}
          >
            <PageContainer key={index}>
              {<FaMoneyBillWave color="white" fontSize="25px" />}
              {page.name}
            </PageContainer>
          </Link>
        );
      })}
    </Container>
  );
};

export default NavPages;
