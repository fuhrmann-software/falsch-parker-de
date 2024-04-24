import React from 'react';
import { Element } from 'react-scroll';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import RefillIcon from '@/images/global/icons/divideIcons/refill.svg';
import CoinIcon from '@/images/global/icons/divideIcons/coin.svg';
import LikeIcon from '@/images/global/icons/divideIcons/like.svg';
import { TheProblemSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/theProblemSection';
import { HowItWorksSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/howItWorksSection';
import { SaveTimeAndMoney } from '@/components/saveTimeAndMoney/saveTimeAndMoney';

export const FuelFraudSection = () => {
  return (
    <Container>
      <Element name='fuel-fraud' className='my-[170px] max-md:my-[60px]'>
        <DivideBanner
          sectionTitles={['Tankflucht']}
          titleComponent='span'
          title='Den Verwaltungsaufwand für Fälle von Tankflucht auf 2 Minuten
              minimieren.'
          subtitle='Unsere digitale Lösung bietet Tankstellenbetreibern die höchste Effizienz bei der Bearbeitung von Tankfluchtverstössen und den damit verbundenen Folgen. Wir übernehmen den gesamten administrativen Aufwand, der bei einem Treibstoffbezug ohne Bezahlung entsteht. Mit nur wenigen Klicks können Sie eine Tankflucht in weniger als 20 Sekunden melden, und wir kümmern uns um den Rest, damit sich Ihre Mitarbeiter auf Ihr Kerngeschäft konzentrieren können.'
          images={[RefillIcon, CoinIcon, LikeIcon]}
        />
      </Element>
      <TheProblemSection />
      <HowItWorksSection />
      <SaveTimeAndMoney />
    </Container>
  );
};
