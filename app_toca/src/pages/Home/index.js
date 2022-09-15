import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CreateMeetingModal } from "../../components/CreateMeetingModal";
import { ListMeetingModal } from "../../components/ListMeetingsModal";
import ModalSchedule from "../../components/ModalSchedules";

const Home = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
};

export default Home;
