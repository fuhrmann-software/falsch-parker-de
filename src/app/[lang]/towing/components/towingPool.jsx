'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TowingPoolImage from '@/images/towing/towing-pool.png';
import GreenGradientImage from '@/images/towing/green-gradient.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { ArrowRight } from '@/components/icons/arrowRight';

const RenderTowingPool = () => {
  const [isFirstScreen, setIsFirstScreen] = useState(true);

  return (
    <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[350px] max-md:w-full '>
      <div className='absolute z-[2] p-10'>
        <h5 className='text-4xl !leading-tight text-white max-xl:text-3xl max-lg:text-3xl max-[1000px]:text-2xl max-[870px]:text-xl max-md:text-4xl max-sm:text-3xl max-[480px]:text-2xl max-[410px]:text-xl'>
          Grösste Abschleppdienstleister-Pool.
        </h5>
      </div>
      <Image
        src={TowingPoolImage}
        className='object-cover object-left'
        fill
        alt='Towing pool'
      />
      <CornerButtonContainer>
        <RoundButton
          icon={isFirstScreen ? Cross : ArrowLeft}
          onClick={() => setIsFirstScreen((prev) => !prev)}
          theme='dark'
          className='relative z-[1]'
          animation={`group-hover:scale-125 ${isFirstScreen ? 'group-hover:-rotate-90' : 'group-hover:-rotate-45'} `}
        />
      </CornerButtonContainer>
    </div>
  );
};

const RenderGreenGradient = () => {
  return (
    <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[350px] max-md:w-full '>
      <div className='absolute z-[2] flex h-full flex-col content-between justify-between p-[40px]'>
        <span className='text-4xl !leading-tight text-white max-xl:text-3xl max-[1000px]:text-2xl max-[870px]:text-xl max-md:text-4xl max-sm:text-3xl max-[480px]:text-2xl max-[410px]:text-xl lg:text-[33px] xl:text-[44px]'>
          Sind sie ein Abschleppuntenehmen?
        </span>

        <div className='text-2xl text-white max-xl:text-[20px] max-md:text-base'>
          Schliessen sie sich <br />
          jetzt unserem Netzwerk an und <br />
          erhalten sie Abschleppaufträge <br />
          über unsere App.
        </div>
      </div>
      <Image
        src={GreenGradientImage}
        className='object-cover object-left'
        fill
        alt='Towing pool'
      />
      <CornerButtonContainer>
        <div className='relative z-[2]'>
          <RoundButton
            icon={ArrowRight}
            onClick={() => {}}
            className='relative bg-[#63B2B3] text-white'
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </div>
      </CornerButtonContainer>
    </div>
  );
};

export const TowingPool = () => {
  return (
    <div className='flex h-full w-full gap-5 max-md:flex-col'>
      {RenderTowingPool()}
      {RenderGreenGradient()}
    </div>
  );
};
