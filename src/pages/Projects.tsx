import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 2rem;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: '项目一',
    description: '这是一个示例项目描述',
    link: '#'
  },
  {
    title: '项目二',
    description: '这是另一个示例项目描述',
    link: '#'
  },
  {
    title: '项目三',
    description: '这是第三个示例项目描述',
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <Title>我的项目</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link}>了解更多</ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects; 