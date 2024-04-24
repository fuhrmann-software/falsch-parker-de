'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MobileFuelReport from '@/images/home-page/mobile-fuel-report.png';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';

export const HowItWorksSection = () => {
  const [isFirstScreen, setIsFirstScreen] = useState(true);

  return (
    <div className='relative '>
      <SeeHowItWorks />
      <div className='flex w-full rounded-card bg-dark max-md:h-[580px] max-md:flex-col md:h-[700px]'>
        <div className='relative hidden h-full w-full md:flex'>
          <div className='relative h-full max-md:w-full md:w-1/2 '>
            <Image
              src={MobileFuelReport}
              fill
              alt='Report'
              className='object-contain object-center py-12'
            />
          </div>
          <div className='flex h-full w-1/2 items-center max-md:w-full md:w-1/2'>
            <div className='max-w-[480px] pr-10 text-white'>
              <div className='pb-9 text-4xl'>
                Tankflucht mit wenigen klicks melden.
              </div>
              <div className='text-lg'>
                Das Hochladen des Beweismaterials, bestehend aus einem Foto des
                Videoclips aus Ihrem Überwachungssystem und des Tankbelegs.
              </div>
            </div>
          </div>
        </div>

        <div className='relative hidden h-full w-full max-md:flex'>
          {isFirstScreen ? (
            <div className='relative h-full w-full max-md:w-full '>
              <Image
                src={MobileFuelReport}
                fill
                alt='Report'
                className='object-contain object-center py-12'
              />
            </div>
          ) : (
            <div className='flex h-full w-full items-center p-10'>
              <div className='w-full text-white '>
                <div className='pb-9 text-5xl max-sm:text-3xl'>
                  Unbürokratische Bearbeitung von Tanktflucht.
                </div>
                <div className='text-xl max-sm:text-base'>
                  Das Hochladen des Beweismaterials, bestehend aus einem Foto
                  des Videoclips aus Ihrem Überwachungssystem und des
                  Tankbelegs.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='md:hidden'>
          <CornerButtonContainer>
            <RoundButton
              theme='dark'
              icon={isFirstScreen ? Cross : ArrowLeft}
              onClick={() => setIsFirstScreen((prev) => !prev)}
              animation={`group-hover:scale-125 ${isFirstScreen && 'group-hover:-rotate-90'}`}
            />
          </CornerButtonContainer>
        </div>
      </div>
    </div>
  );
};
