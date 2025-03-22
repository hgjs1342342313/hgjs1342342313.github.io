import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #2c3e50, #3498db);
  color: white;
  border-radius: 10px;
  margin: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const Home: React.FC = () => {
  return (
    <HeroSection>
      <Title>鼠鼠我啊，才刚毕业捏</Title>
      <Subtitle>工程之路就像爬天梯，什么时候才能P8+呢？</Subtitle>
    </HeroSection>
  );
};

export default Home; 