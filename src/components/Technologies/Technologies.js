import React from 'react';
import { DiFirebase, DiReact, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of Technologies in the web and software development world.
    From Back-end to Design
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          <ul>
            <li>React.js</li>
          </ul>
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          <ul>
            <li>Node.js</li>
            <li>MariaDB/MySQL</li>
          </ul>
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiCode size="3rem" />
      <ListContainer>
        <ListTitle>Coding Languages</ListTitle>
        <ListParagraph>
          Experience with <br />
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>Lua</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>T-SQL</li>
          </ul>
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
