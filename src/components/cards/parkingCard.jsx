import React from 'react';
import Image from 'next/image';
import BusinessParking from '@/images/home-page/business-parking.png';
import PrivateParking from '@/images/home-page/private-parking.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';

export const ParkingCard = ({ type, text, onClick }) => {
  let src = null;
  let alt = '';

  switch (type) {
    case 'businessParking':
      src = BusinessParking;
      alt = 'Business-parking';
      break;
    case 'privateParking':
      src = PrivateParking;
      alt = 'Private-parking';
      break;
  }

  return (
    <div className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card'>
      <div className='absolute left-0 top-0 z-[1] p-4 text-xl text-white'>
        {text}
      </div>
      <Image
        src={src}
        fill
        alt='Falsch-parker logo'
        className='object-cover object-bottom'
      />
      <CornerButtonContainer>
        <RoundButton
          icon={ArrowRight}
          onClick={onClick}
          className='bg-[#0D0F11] text-white'
          animation='group-hover:scale-125 group-hover:-rotate-45'
        />
      </CornerButtonContainer>
    </div>
  );
};
