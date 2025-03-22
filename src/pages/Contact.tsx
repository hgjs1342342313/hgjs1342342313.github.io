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

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <Title>联系方式</Title>
      <ContactInfo>
        <ContactItem>
          <ContactLabel>邮箱：</ContactLabel>
          <ContactLink href="sygradeandy@gmail.com">
            sygradeandy[at]gmail[dot]com
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>GitHub：</ContactLabel>
          <ContactLink href="https://github.com/hgjs1342342313" target="_blank" rel="noopener noreferrer">
            @hgjs1342342313
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>QQGroup：</ContactLabel>
          <ContactLabel>
            460811281
          </ContactLabel>
        </ContactItem>
      </ContactInfo>
    </ContactSection>
  );
};

export default Contact; 