import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--blue-400);
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  color: #f7cc46;
  font-family: 'Potta One', cursive;
  font-size: 54px;
  margin-bottom: 50px;
  line-height: 100%;
  letter-spacing: 0.2em;
`;

export const Subtitle = styled.p`
  color: #f7cc46;
  font-family: 'Potta One', cursive;
  font-size: 80px;
  line-height: 80px;
  text-shadow: 1px 1px 1px #3e5ca2, -8px 1px 1px #3e5ca2, 1px -8px 1px #3e5ca2, -8px -8px 1px #3e5ca2;
  margin-bottom: 50px;
`;
