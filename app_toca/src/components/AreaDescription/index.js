import {
  Centralized,
  Container,
  DescriptionText,
  DescriptionTitle,
} from "./styles";

const AreaDescription = ({ text }) => {
  return (
    <Container>
      <Centralized>
        <DescriptionTitle>DESCRIÇÃO</DescriptionTitle>
        <DescriptionText>{text}</DescriptionText>
      </Centralized>
    </Container>
  );
};

export default AreaDescription;
