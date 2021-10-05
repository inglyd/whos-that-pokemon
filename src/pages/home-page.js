import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #314982;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  color: #f7cc46;
  font-family: 'Potta One', cursive;
  font-size: 54px;
  margin-bottom: 50px;
  line-height: 100%;
  letter-spacing: 0.2em;
`;

const Subtitle = styled.p`
  color: #f7cc46;
  font-family: 'Potta One', cursive;
  font-size: 80px;
  line-height: 80px;
  text-shadow: 1px 1px 1px #3e5ca2, -8px 1px 1px #3e5ca2, 1px -8px 1px #3e5ca2, -8px -8px 1px #3e5ca2;
  margin-bottom: 50px;
`;

const Button = styled.button`
  height: 53px;
  width: 273px;
  border-radius: 20px;
  background: #cd3529;
  color: #fff;
  font-family: 'Potta One', cursive;
  font-size: 24px;
  border: none;
  cursor: pointer;
`;

const HomePage = () => {
  return (
      <Container>
        <Title>Quem é esse</Title>
        <Subtitle>POKÉMON</Subtitle>
        <Subtitle>?</Subtitle>
        <Button>COMEÇAR</Button>
      </Container>
  );
};

export default HomePage;
