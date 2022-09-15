import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import { useContext } from "react";
import { CreateSessionContext } from "../../providers/CreateSession";
import { useEffect } from "react";
import { AreasContext } from "../../providers/Areas";

const Home = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
};

export default Home;
