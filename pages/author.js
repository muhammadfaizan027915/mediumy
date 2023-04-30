import React from 'react'
import Profilecontainer from '@/components/profilecontainer/profilecontainer'
import Container from '@/components/container/container'
import Skills from '@/components/skills/skills';

export default function Author() {
  return (
    <Container>
      <Profilecontainer />
      <Skills />
    </Container>
  );
}
