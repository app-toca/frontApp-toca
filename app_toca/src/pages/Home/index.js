import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CreateMeetingModal } from "../../components/CreateMeetingModal";
import { ListMeetingModal } from "../../components/ListMeetingsModal";

const Home = () => {
  return (
    <Container>
      <Header />
      <ModalSchedule />
      <Footer />
      <CreateMeetingModal/>
    </Container>
  );
};

export default Home;
