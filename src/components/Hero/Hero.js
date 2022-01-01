import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi I am <br /> 
      Brandon de Bruyn
    </SectionTitle>

    <SectionText>
    I'm a South-African based Software Developer, Fun fact: I'm a hardworking individual
    </SectionText>

    <Button onClick ={() => window.location = 'https://google.com'}> Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;