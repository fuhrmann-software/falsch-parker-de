import React from 'react';
import { Element } from 'react-scroll';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { ProductCard } from '@/components/cards/productCard';

export const OurProductsSection = () => {
  return (
    <Container>
      <Element name='ourProducts' className='pb-9'>
        <SectionTitle title='Hauptfunktionen' />
      </Element>
      <div className='no-scrollbar relative w-full overflow-x-scroll'>
        <div className='flex w-fit gap-3'>
          <ProductCard
            type='parkingFines'
            targetElement='parking-ticket'
            className='bg-[#6A797F]'
            title='Digitale Parkbusse.'
            subtitle='Umtriebsentschädigung gesetzeskonform in digitaler Form ausstellen. Für Firmen und Privatpersonen.'
          />
          <ProductCard
            type='requestTruck'
            targetElement='towing'
            className='bg-[#111E28]'
            title='Abschleppwagen anfordern.'
            subtitle='Grösster Abschleppdienstleister-Pool der Schweiz mit schnellster Reaktionszeit.'
          />
          <ProductCard
            type='fuelFraud'
            targetElement='fuel-fraud'
            className='bg-[#353D4B]'
            title='Tankflucht.'
            subtitle='Effizientes Tool für Tankstellenbetreiber zur Behandlung von Tankfluchtverstössen.'
          />
        </div>
      </div>
    </Container>
  );
};
