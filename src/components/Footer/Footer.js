import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call:</LinkTitle>
          <LinkItem href="tel:+2773-494-2610">+27 073-494-2610</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email:</LinkTitle>
          <LinkItem href="mailto:b.debruyn02@gmail.com">b.debruyn02@gmail.com</LinkItem>
        </LinkColumn>
        
        <LinkColumn>
          <LinkTitle>CV:</LinkTitle>
          <LinkItem href="https://drive.google.com/file/d/1ivT9rXfcjPebL6HAlUwQv1k0iCfkuaff/view" target="_blank">Download CV</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialIcons href="https://github.com/LordTiger" target="_blank">
        <AiFillGithub size="3rem" />
        </SocialIcons>
        
        <SocialIcons href="https://www.linkedin.com/in/bdebruyn/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
    
        <SocialIcons href="https://www.instagram.com/woahh.b_/" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
