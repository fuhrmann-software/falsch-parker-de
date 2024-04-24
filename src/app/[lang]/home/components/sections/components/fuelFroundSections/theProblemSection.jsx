import React, { useState } from 'react';
import Image from 'next/image';
import RefillImage from '../../../../../../../../public/images/global/refill.png';
import RefillMobileImage from '../../../../../../../../public/images/global/refill-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { Cross } from '@/components/icons/cross';

export const TheProblemSection = () => {
  const [isTwoScreen, setIsTwoScree] = useState(false);
  return (
    <div className='relative h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card bg-black'>
      {isTwoScreen ? (
        <div className='absolute top-0 z-[1] flex h-full w-full flex-col items-center justify-center'>
          <div className='max-w-[650px] text-2xl text-white max-md:px-5 max-md:text-xl'>
            <div className='pb-6 text-white/50 '>
              Fahrzeughalter beziehen Treibstoff ohne zu bezahlen
            </div>
            <div>
              Das Problem, dass Konsumenten ihre Autos mit Kraftstoff füllen und
              nicht bezahlen, ist zu einem erheblichen Anliegen geworden. Dies
              verursacht finanzielle Verluste und administrative Belastungen für
              Tankstellen sowie mögliche Preiserhöhungen für ehrliche Kunden.
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='absolute top-0 z-[1] flex flex-col p-20 max-sm:p-10'>
            <span className='self-start rounded-full bg-white/10 px-4 py-3 text-white max-sm:px-4 max-sm:py-3 max-sm:text-[14px]'>
              Das Problem
            </span>
            <h4 className='mt-6 max-w-[800px] text-8xl text-white max-lg:text-5xl max-sm:text-3xl'>
              <span className='text-white/50'>Kraftstoffbezug</span>
              <br />
              ohne zu bezahlen.
            </h4>
          </div>

          <Image
            src={RefillImage}
            fill
            alt='Refill'
            className='object-cover object-right max-sm:hidden'
          />

          <Image
            src={RefillMobileImage}
            fill
            alt='Refill'
            className='object-cover object-right sm:hidden'
          />
        </>
      )}

      <CornerButtonContainer>
        <RoundButton
          className='relative z-[1]'
          theme='dark'
          icon={isTwoScreen ? ArrowLeft : Cross}
          onClick={() => setIsTwoScree((prev) => !prev)}
          animation={`group-hover:scale-125 ${!isTwoScreen && 'group-hover:-rotate-90'}`}
        />
      </CornerButtonContainer>
    </div>
  );
};
