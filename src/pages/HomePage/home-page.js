import { Container, Title, Subtitle } from "./style.js";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Buttons/styles.js";

const HomePage = () => {
  const history = useHistory();
  return (
    <Container>
      <Title>Quem é esse</Title>
      <Subtitle>POKÉMON</Subtitle>
      <Subtitle>?</Subtitle>
      <Button onClick={() => history.push("/game")}>COMEÇAR</Button>
    </Container>
  );
};

export default HomePage;
