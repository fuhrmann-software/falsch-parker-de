import React from 'react';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { WhatClientsSay } from '@/components/whatClientsSay/whatClientsSay';
import { JoinSection } from '@/app/[lang]/home/components/sections/components/testimonialsSections/joinSection';
import User1 from '@/images/home-page/user_1.png';
import User2 from '@/images/home-page/user_2.png';
import User3 from '@/images/home-page/user_3.png';

const usersInfo = [
  {
    userImage: User1,
    userName: 'John Smith',
    userInfo: 'Facility Manager, GreenTech Solutions',
    userComment:
      '“Die Falsch-Parker-App hat unsere Parkraumbewirtschaftung revolutioniert. Die App ist benutzerfreundlich und unglaublich effizient. Seit ihrer Einführung sind die Probleme mit illegalem Parken deutlich zurückgegangen.”',
  },
  {
    userImage: User2,
    userName: 'Emily Johnson',
    userInfo: 'Head of Operations, Urban Real Estate',
    userComment:
      '“Die Implementierung dieser App in unseren Wohnsiedlungen war ein Paradigmenwechsel. Die einfache Meldung und Bearbeitung von Falschparkern hat die Parkplatzüberwachung wesentlich einfacher und effektiver gemacht.”',
  },
  {
    userImage: User3,
    userName: 'Mark Lee',
    userInfo: 'Security Supervisor, Shopping Center',
    userComment:
      '“Die Falschparker-App, zusammen mit ihren Park Guards, hat unsere Parkplatzsicherheit verbessert. Das QR-Ticketsystem ist innovativ und hat unbefugtes Parken erheblich reduziert.”',
  },
];

export const TestimonialsSection = () => {
  return (
    <Container>
      <div className='mb-[170px] max-md:mb-[100px]'>
        <div className='mb-9'>
          <SectionTitle title='Referenzen' />
        </div>
        <WhatClientsSay usersInfo={usersInfo} />
      </div>
      <div className='mb-20'>
        <JoinSection />
      </div>
    </Container>
  );
};
