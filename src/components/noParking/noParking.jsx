'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import NoParkingImage from '@/images/global/no-parking.png';
import NoParkingMobileImage from '@/images/global/no-parking-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowDown } from '@/components/icons/arrowDown';

export const NoParking = ({ targetElement = null }) => {
  const openApp = () => {
    window.open('https://app.falsch-parker.ch/', '_blank');
  };
  return (
    <div className='relative h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card  rounded-tr-card max-md:h-[580px]'>
      <div className='absolute left-0 z-[1] flex flex-col p-16 max-md:p-8 max-sm:h-full max-sm:justify-between'>
        <div className='mb-16 w-2/3 text-7xl leading-[1.2] text-red-600 max-lg:mb-12 max-lg:text-5xl max-md:mb-6 max-md:w-full max-md:text-3xl'>
          <h2 className='pb-10 text-white'>Falschparker jetzt büssen?</h2>
          <span className='text-white/50'>Wir haben es einfach gemacht.</span>
        </div>

        <OpenAppButton onClick={openApp} />
      </div>
      <Image
        src={NoParkingImage}
        fill
        alt='No Parking'
        className='object-cover object-right-bottom max-sm:hidden'
      />
      <Image
        src={NoParkingMobileImage}
        fill
        alt='No Parking'
        className='object-cover object-right-bottom sm:hidden'
      />
      <CornerButtonContainer>
        {targetElement ? (
          <Link to={targetElement} smooth={true} offset={-75} duration={1000}>
            <RoundButton
              icon={ArrowDown}
              animation='group-hover:scale-125'
              className='bg-[#0D0F11] text-white'
            />
          </Link>
        ) : (
          <RoundButton
            icon={ArrowDown}
            animation='group-hover:scale-125'
            className='bg-[#0D0F11] text-white'
          />
        )}
      </CornerButtonContainer>
    </div>
  );
};
