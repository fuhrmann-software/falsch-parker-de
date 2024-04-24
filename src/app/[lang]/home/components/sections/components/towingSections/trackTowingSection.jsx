'use client';

import React from 'react';
import Image from 'next/image';
import MobileAppMap from '@/images/home-page/mobile-app-map.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import { useRouter } from 'next/navigation';

export const TrackTowingSection = () => {
  const router = useRouter();

  const openApp = () => {
    window.open('https://app.falsch-parker.ch/', '_blank');
  };

  const goToTowingPage = () => {
    router.push('/towing');
  };

  return (
    <div className='flex w-full gap-5 max-md:flex-col'>
      <div className='relative h-[730px] overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-lg:h-[450px] md:w-1/2'>
        <div className='absolute top-0 z-[1] flex w-full flex-col p-8 text-center text-dark max-md:text-3xl md:text-4xl lg:text-6xl'>
          <span>Ankunft des Fahrers über GPS mitverfolgen.</span>
        </div>
        <Image
          src={MobileAppMap}
          fill
          alt='No Parking'
          className='object-cover'
        />
        <CornerButtonContainer>
          <RoundButton
            onClick={goToTowingPage}
            icon={ArrowRight}
            className='bg-[#858585] text-white'
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>

      <div className='relative h-[730px] rounded-bl-card rounded-tl-card rounded-tr-card bg-green max-lg:h-[450px] md:w-1/2'>
        <div className='gradient-text top-0 z-[1] flex h-full w-full items-center justify-center bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent'>
          <span className='px-3 text-center max-md:text-4xl md:text-5xl lg:text-7xl'>
            Möchten Sie Abschlepp-Partner werden?
          </span>
        </div>

        <div className='absolute bottom-[19px] right-[90px] z-[1] text-base text-light'>
          <span>Jetzt anmelden</span>
        </div>
        <CornerButtonContainer>
          <RoundButton
            onClick={openApp}
            icon={ArrowRight}
            className='bg-green text-white'
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>
    </div>
  );
};
