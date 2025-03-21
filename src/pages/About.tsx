import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  max-width: 800px;
  margin: 6rem auto 2rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Content = styled.div`
  line-height: 1.8;
`;

const About: React.FC = () => {
  return (
    <AboutSection>
      <Title>关于我</Title>
      <Content>
        <p>在这里写一些关于您自己的介绍...</p>
        <p>您可以描述您的专业背景、技能、兴趣爱好等。</p>
        <p>也可以分享一些个人经历和故事。</p>
      </Content>
    </AboutSection>
  );
};

export default About; 