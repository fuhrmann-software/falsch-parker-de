'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import UberTowing1 from '@/images/global/uber-towing-1.png';
import UberTowing2 from '../../../public/images/global/uber-towing-2.png';
import UberTowing1Mobile from '@/images/global/uber-towing-1-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';

export const Uber = () => {
  const [isFirstScreen, setIsFirstScreen] = useState(true);
  return (
    <>
      <div className='relative h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[580px]'>
        {isFirstScreen ? (
          <div className='relative h-full w-full'>
            <div className='absolute z-[1] flex flex-col p-[100px] text-8xl text-white max-md:p-10 max-md:text-3xl'>
              <h2 className='text-white'>
                <span className='text-white/50'>Uber</span>
                <br />
                <span>für Abschleppen.</span>
              </h2>
              <span className='text-xl max-md:text-lg max-sm:mt-5 max-sm:max-w-[150px] max-sm:text-lg sm:mt-12'>
                Für ein rasches Eintreffen eines Abschleppwagens.
              </span>
            </div>
            <Image
              src={UberTowing1}
              fill
              alt='No Parking'
              className='object-cover object-bottom max-sm:hidden'
            />
            <Image
              src={UberTowing1Mobile}
              fill
              alt='No Parking'
              className='object-cover object-bottom sm:hidden'
            />
          </div>
        ) : (
          <div className='relative flex h-full w-full bg-dark'>
            <div className='relative flex h-full items-center justify-center max-lg:w-1/2 max-md:hidden md:visible lg:w-[40%]'>
              <div className='relative flex h-full w-full max-lg:top-[150px] lg:top-[200px]'>
                <Image
                  src={UberTowing2}
                  className='object-contain'
                  alt='No Parking'
                />
              </div>
            </div>
            <div className='right-0 z-[1] flex h-full flex-col justify-center text-2xl text-white max-lg:w-1/2 max-md:w-full max-md:text-lg lg:w-[60%]'>
              <div className='flex flex-col p-5 max-md:w-full lg:max-w-[700px]'>
                <span className='py-5 text-white/50'>
                  Eine benutzerfreundliche App, um gegen Falschparker
                  vorzugehen.
                </span>
                <span>
                  Auf Ihren Geschäfts- und Privatparkplätzen dürfen Sie
                  Falschparker mit Parkbussen (Umtriebsentschädigungen) belegen.
                  Unsere App bietet Ihnen die Infrastruktur, um Parkbussgelder
                  mit nur wenigen Klicks zu verhängen. Unsere App ist
                  vollständig automatisiert, und wir kümmern uns um alles, was
                  nach der Erstellung der Parkbusse & Abschleppauftrags
                  passiert.
                </span>
              </div>
            </div>
          </div>
        )}
        <CornerButtonContainer>
          <RoundButton
            icon={isFirstScreen ? Cross : ArrowLeft}
            onClick={() => setIsFirstScreen((prev) => !prev)}
            theme='dark'
            className='relative z-[1]'
            animation={`group-hover:scale-125 ${isFirstScreen && 'group-hover:-rotate-90'}`}
          />
        </CornerButtonContainer>
      </div>
    </>
  );
};
