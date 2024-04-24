'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ParkingTicket from '@/images/home-page/parkingTicket.png';
import ParkingTicketMobile from '@/images/home-page/parking-ticket-mobile.png';
import WhiteLabelSolution from '@/images/home-page/white-label-solution.png';
import WhiteLabelSolutionMobile from '@/images/home-page/white-label-solution-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowRight } from '@/components/icons/arrowRight';
import { ArrowLeft } from '@/components/icons/arrowLeft';

export const ParkingTicketSection = () => {
  const router = useRouter();
  const [isTwoScreen, setIsTwoScree] = useState(false);

  const background = isTwoScreen ? 'bg-dark' : 'bg-white';
  const goToParkingTicket = () => {
    router.push('/parking-ticket');
  };

  return (
    <div className='flex h-full w-full gap-5 max-sm:flex-col'>
      <div
        className={`${background} relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-lg:h-[440px] max-sm:w-full`}>
        {isTwoScreen ? (
          <div className='absolute z-[2] flex h-full w-full flex-col justify-center p-[80px] text-white max-lg:p-8 max-md:text-base md:text-xl lg:text-2xl'>
            <span className='py-2 text-white/50'>
              Die Vorteile eines White Labels
            </span>
            <span className='py-2'>
              Unsere White Label Lösung bietet Ihnen eine Vielzahl von
              Vorteilen, die Ihre Marke stärken. Eine konsistente
              Markendarstellung schafft Glaubwürdigkeit und sorgt dafür, dass
              Ihre Mitarbeiter die App als eine natürliche Erweiterung Ihres
              Arbeitsinstruments betrachten.
            </span>
          </div>
        ) : (
          <>
            <div className='absolute z-[2] p-[80px] text-7xl text-dark max-lg:p-10 max-lg:text-4xl'>
              <span>White label Lösung.</span>
            </div>
            <Image
              src={WhiteLabelSolution}
              fill
              alt='White label solution'
              className='object-cover object-right max-sm:hidden'
            />
            <Image
              src={WhiteLabelSolutionMobile}
              fill
              alt='White label solution'
              className='object-cover sm:hidden'
            />
          </>
        )}
        <CornerButtonContainer>
          <div className='relative z-[2]'>
            <RoundButton
              className='relative'
              theme={isTwoScreen ? 'dark' : 'light'}
              icon={isTwoScreen ? ArrowLeft : Cross}
              onClick={() => setIsTwoScree((prev) => !prev)}
              animation={`group-hover:scale-125 ${!isTwoScreen && 'group-hover:-rotate-90'}`}
            />
          </div>
        </CornerButtonContainer>
      </div>

      <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-lg:h-[440px] max-sm:w-full'>
        <div className='absolute z-[2] p-20 text-7xl text-dark max-lg:p-10 max-lg:text-4xl'>
          <h5>QR-Code Parkbusse.</h5>
        </div>
        <Image
          src={ParkingTicket}
          fill
          alt='Parking tocket'
          className='object-cover max-sm:hidden'
        />
        <Image
          src={ParkingTicketMobile}
          fill
          alt='Parking tocket'
          className='object-cover sm:hidden'
        />
        <CornerButtonContainer>
          <RoundButton
            onClick={goToParkingTicket}
            icon={ArrowRight}
            theme='light'
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>
    </div>
  );
};
