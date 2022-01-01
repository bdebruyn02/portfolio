import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
<Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color:"white"}}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
    //github
      <SocialIcons href="https://github.com/LordTiger">
        <AiFillGithub size="3rem" />
      </SocialIcons>

    // linkedin
      <SocialIcons href="https://www.linkedin.com/in/bdebruyn/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    //Instagram 
      <SocialIcons href="https://www.instagram.com/woahh.b_/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
</Container>
);

export default Header;
