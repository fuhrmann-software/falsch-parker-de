import React from 'react';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { InfiniteCarousel } from '@/app/[lang]/home/components/sections/components/infiniteCarousel';
import { Container } from '@/components/container/container';

export const TrustedBySection = () => {
  return (
    <div className='my-[150px]'>
      <Container>
        <div className='py-5'>
          <SectionTitle title='Trusted' />
        </div>
      </Container>
      <div className='mt-3 flex items-center justify-center'>
        <InfiniteCarousel />
      </div>
    </div>
  );
};
