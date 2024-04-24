'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ParkingGuard from '@/images/parking-ticket/parking-guard.png';
import ParkingTicket from '@/images/parking-ticket/parking-ticket.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { Cross } from '@/components/icons/cross';

export const ParkingCards = () => {
  const [isLeftBackSideScreen, setIsLeftBackSideScreen] = useState(false);
  const [isRightBackSideScreen, setIsRightBackSideScreen] = useState(false);

  return (
    <div className='relative flex  w-full gap-5 max-md:flex-col'>
      <div className='relative h-[730px] w-full max-w-[670px] overflow-hidden max-xl:h-[440px]'>
        <div className='h-full w-full overflow-hidden rounded-card'>
          {isLeftBackSideScreen ? (
            <div className='flex h-full w-full flex-col justify-center bg-dark p-[20px] text-[16px] text-white max-md:text-[17px] lg:p-[80px] lg:text-[18px] xl:text-[22px]'>
              <span className='pb-6 text-white/50'>Umtriebsentschädigung</span>
              <span>
                Unsere Partner profitieren von einem dedizierten
                Dashboard-Zugang, der es ihnen ermöglicht, sämtliche Aufträge
                einzusehen, zu bearbeiten und abzurufen. Dies gewährt ihnen eine
                umfassende Transparenz über alle Vorgänge auf ihren Parkplätzen.
                Zusätzlich kann die Umtriebsentschädigung digital erfasst
                werden, sowohl mit als auch ohne QR-Rechnung.
              </span>
            </div>
          ) : (
            <div>
              <div className='absolute z-[2] flex flex-col p-10 text-white max-sm:p-6'>
                <span className='mb-5 self-start  rounded-full bg-black/10 p-4 text-dark max-sm:p-2 max-sm:text-[14px]'>
                  Parkbusse
                </span>
              </div>

              <Image
                src={ParkingTicket}
                alt='Parking Ticket'
                className='rounded-card object-cover'
                fill
              />
            </div>
          )}

          <CornerButtonContainer>
            <div className='relative z-[2]'>
              <RoundButton
                className='relative'
                theme={isLeftBackSideScreen ? 'dark' : 'light'}
                icon={isLeftBackSideScreen ? ArrowLeft : Cross}
                onClick={() => setIsLeftBackSideScreen((prev) => !prev)}
                animation={`group-hover:scale-125 ${!isLeftBackSideScreen && 'group-hover:-rotate-90'}`}
              />
            </div>
          </CornerButtonContainer>
        </div>
      </div>

      <div className='relative h-[730px] w-full max-w-[670px] overflow-hidden max-xl:h-[440px]'>
        <div className='h-full w-full overflow-hidden rounded-card'>
          {isRightBackSideScreen ? (
            <div className='flex h-full w-full flex-col justify-center bg-dark p-[20px] text-[15px] text-white max-md:text-[17px] max-sm:text-[14px] lg:text-[18px] xl:p-[80px] xl:text-[22px]'>
              <span className='pb-6 text-white/50'>
                Parkkontrolle durch unser geschultes Personal
              </span>
              <span>
                Verlassen Sie sich auf die professionelle Parkkontrolle durch
                unser geschultes Personal. Unsere erfahrenen Mitarbeiter sorgen
                für die Sicherheit und Ordnung auf Ihren Parkplätzen, indem sie
                regelmäßige Patrouillen durchführen und Verstöße gegen
                Parkregeln effektiv überwachen. Mit ihrer Fachkenntnis und
                Sensibilität gewährleisten wir ein angenehmes Parkumfeld für
                alle Nutzer. Vertrauen Sie auf unsere Expertise, um die
                Effizienz und den reibungslosen Ablauf Ihrer Parkanlage zu
                optimieren.
              </span>
            </div>
          ) : (
            <div>
              <div className='absolute z-[2] flex flex-col p-10 text-white max-sm:p-6'>
                <span className='mb-5 self-start rounded-full bg-white/10 p-4 max-sm:p-2 max-sm:text-[14px]'>
                  Parking Guard
                </span>
                <span className='text-[46px] max-xl:text-[30px] max-md:text-2xl'>
                  Auf Wunsch kontrollieren wir Ihre Firmenparkplätze mit{' '}
                  <span className='text-white/50'>
                    professionellen Parkwächter.
                  </span>
                </span>
              </div>
              <Image
                src={ParkingGuard}
                alt='Parking Guard'
                className='rounded-card object-cover'
                fill
              />
            </div>
          )}
          <CornerButtonContainer>
            <div className='relative z-[2]'>
              <RoundButton
                className={`relative ${isRightBackSideScreen ? 'bg-dark text-green' : 'bg-[#085F73]'} text-white`}
                icon={isRightBackSideScreen ? ArrowLeft : Cross}
                onClick={() => setIsRightBackSideScreen((prev) => !prev)}
                animation={`group-hover:scale-125 ${!isRightBackSideScreen && 'group-hover:-rotate-90'}`}
              />
            </div>
          </CornerButtonContainer>
        </div>
      </div>
    </div>
  );
};
