import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio Website
        </SectionTitle>
        <SectionText>
        I'm a 19 year old Computer Science Student based in Belfast, Northern Ireland.
        </SectionText>
        <Link href="#about"><Button>Learn More</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;