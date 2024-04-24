'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ParkingManagementImage from '@/images/parking-ticket/parking-management.png';
import ParkingManagementMobileImage from '@/images/parking-ticket/parking-management-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';

export const ParkingManagement = () => {
  const [isBackSideScreen, setIsBackSideScreen] = useState(false);

  return (
    <div className='relative h-[700px] w-full overflow-hidden  max-md:h-[580px]'>
      <div className='relative h-full w-full overflow-hidden rounded-card'>
        {isBackSideScreen ? (
          <div className='flex h-full w-full flex-col justify-center bg-dark p-[20px] text-[15px] text-white max-md:text-[17px] max-sm:text-[14px] md:p-[80px] lg:text-[18px] xl:text-[22px]'>
            <span className='pb-6 text-white/50'>
              Parkkontrolle durch unser geschultes Personal
            </span>

            <ul className='list-inside list-disc'>
              <span>Einfache Verwaltung von Parkberechtigungen:</span>
              <li>
                Zeitlich begrenzte Erteilung von Parkberechtigungen durch ein
                QR-Code, Email-Link oder einfach in der App
              </li>
              <li>
                Die Falsch Parker App sorgt für ein sicheres Kontrollmechanismus
                und Informationsaustausch, wodurch keine Missverständnisse
                entstehen können
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className='absolute left-0 z-[1] h-full p-16 max-sm:p-8'>
              <div className='flex h-full max-h-[355px] w-full max-w-[700px] flex-col text-white'>
                <span className='self-start rounded-full bg-white/10 p-4 max-sm:p-2 max-sm:text-[14px]'>
                  Parkraummanagement
                </span>
                <h4 className='mt-6 text-7xl text-white max-md:text-5xl max-sm:text-[30px]'>
                  Senken Sie Ihre Verwaltungskosten und behalten Sie den
                  Überblick über all Ihre Parkplätze.
                </h4>
              </div>
            </div>
            <Image
              src={ParkingManagementImage}
              fill
              className='object-cover object-center max-sm:hidden'
              alt='No Parking'
            />
            <Image
              src={ParkingManagementMobileImage}
              fill
              className='object-cover object-center sm:hidden'
              alt='No Parking'
            />
          </>
        )}
      </div>

      <CornerButtonContainer>
        <div className='relative z-[2]'>
          <RoundButton
            className={`relative ${isBackSideScreen ? 'bg-dark text-green' : 'bg-[#99BFCC]'} text-white`}
            icon={isBackSideScreen ? ArrowLeft : Cross}
            onClick={() => setIsBackSideScreen((prev) => !prev)}
            animation={`group-hover:scale-125 ${!isBackSideScreen && 'group-hover:-rotate-90'}`}
          />
        </div>
      </CornerButtonContainer>
    </div>
  );
};
