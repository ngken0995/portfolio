import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Kenneth
        </SectionTitle>
        <SectionText>
        I'm a Full Stack Developer based in New York City, NY and have extensive knowledge in Python, Django, JavaScript and React. In my spare time I'm a yogi and climber.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;