import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactLabel = styled.span`
  font-weight: 500;
  color: #2c3e50;
`;

const ContactLink = styled.a`
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Contact() {
  return (
    <ContactSection>
      <Title>联系方式</Title>
      <ContactInfo>
        <ContactItem>
          <ContactLabel>邮箱：</ContactLabel>
          <ContactLink href="mailto:your.email@example.com">
            your.email@example.com
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>GitHub：</ContactLabel>
          <ContactLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            @yourusername
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>LinkedIn：</ContactLabel>
          <ContactLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourusername
          </ContactLink>
        </ContactItem>
      </ContactInfo>
    </ContactSection>
  );
}

export default Contact; 