import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { FullControl } from '@/components/fullControl/fullControl';

import FullControlTowing from '@/images/full-fraud/towing.png';
import FullControlTowingMobile from '@/images/full-fraud/towing-mobile.png';

import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/global/icons/divideIcons/eye.svg';
import PhotoIcon from '@/images/global/icons/divideIcons/photo.svg';
import TowingIcon from '@/images/global/icons/divideIcons/towing.svg';
import { Uber } from '@/components/uber/uber';
import { WrongParkers } from '@/components/wrongParkers/wrongParkers';
import { LargeImageWithDesc } from '@/components/largeImageWithDesc/largeImageWithDesc';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { TowingPool } from '@/app/[lang]/towing/components/towingPool';
import { towingData } from '@/components/faq/faqData';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata('towing');

const TowingPage = () => {
  return (
    <Container>
      <section>
        <div className='mt-20 max-md:mt-[60]'>
          <DivideBanner
            titleComponent='h1'
            title='Jetzt auf Firmen- und Privatparkplätze abschleppen.'
            subtitle='Unser Abschleppdienstleister-Netzwerk besteht aus verschiedenen Unternehmen in Ihrer Umgebung. Durch die automatische Erfassung der nahegelegenen Abschleppfahrer mittels GPS-Signal wird eine schnelle Ankunftszeit des Abschleppwagens am Einsatzort sichergestellt.'
            images={[EyeIcon, PhotoIcon, TowingIcon]}
          />
        </div>
        <div className='mt-[170px] max-md:mt-[100px]'>
          <Uber />
        </div>
      </section>

      <section>
        <SeeHowItWorks />
        <LargeImageWithDesc
          image={MobileParkingCar}
          mobileClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[16%] max-md:mt-[5%]'
          desktopClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[18%] max-md:mt-[5%]'
          descDesktop={
            <div className='flex flex-col justify-between py-5 text-dark'>
              <h3 className='pb-9 text-5xl max-xl:text-3xl'>
                Abschleppwagen anfordern.
              </h3>
              <span className='text-xl'>
                Rasch und unbürokratisch einen Abschleppwagen in nur 20 Sekunden
                anfordern, ohne persönlich vor Ort sein zu müssen.
              </span>
            </div>
          }
          descMobile={
            <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
              <h3 className='pb-9 text-6xl max-md:text-4xl'>
                Abschleppwagen anfordern.
              </h3>
              <span className='text-xl'>
                Rasch und unbürokratisch einen Abschleppwagen in nur 20 Sekunden
                anfordern, ohne persönlich vor Ort sein zu müssen.
              </span>
            </div>
          }
        />

        <div className='mt-5'>
          <WrongParkers />
        </div>

        <div className='mt-5'>
          <FullControl
            smallCover={FullControlTowingMobile}
            cover={FullControlTowing}
            subtitle='Verfolgen Sie in Echtzeit den aktuellen Standort des Fahrers, um die genaue Ankunftszeit zu ermitteln.'
          />
        </div>

        <div className='mt-5'>
          <TowingPool />
        </div>
      </section>

      <FaqSection data={towingData} />
    </Container>
  );
};

export default TowingPage;
