import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CreateMeetingModal } from "../../components/CreateMeetingModal";

const Home = () => {
  return (
    <Container>
      <Header />
      <Footer />
      <CreateMeetingModal/>
    </Container>
  );
};

export default Home;
