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
        <p>我是一个普通的代码开发者。所掌握的技能不多，但是很多东西都会一点点。</p>
        <p>我本科毕业于大连理工大学，研究生就读于香港大学。研究生期间在阿里云与SenseAI实习，毕业后加入了哔哩哔哩，参与云原生相关研发。</p>
        <p>很多时候，我和我的同学上次见面就是永别了，只是我可能到老才会反应过来这件事吧。</p>
      </Content>
    </AboutSection>
  );
};

export default About; 