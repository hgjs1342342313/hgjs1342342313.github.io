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

function Home() {
  return (
    <HeroSection>
      <Title>欢迎来到我的个人主页</Title>
      <Subtitle>这里是我展示作品和分享想法的地方</Subtitle>
    </HeroSection>
  );
}

export default Home; 