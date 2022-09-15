import { Container, PageContainer, Img } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa"; //Adm
import { HiOutlineLightBulb } from "react-icons/hi"; //criacao
import { MdEvent } from "react-icons/md"; //eventos
import { MdPeopleAlt } from "react-icons/md"; //gp
import { GiAbstract050 } from "react-icons/gi"; //mkt
import { useContext, useEffect, useState } from "react";
import { AreasContext } from "../../providers/Areas";

const NavPages = () => {
  const navigate = useNavigate();

  const { allAreas} = useContext(AreasContext)

  return (
    <Container>
      {allAreas.map((page, index) => {
        return (
          <Link key={index} to={`/${page.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}><PageContainer key={index}>
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
