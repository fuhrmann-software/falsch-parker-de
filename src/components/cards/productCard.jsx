'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import FuelFraud from '@/images/home-page/product/fuel-fraud..png';
import ParkingFines from '@/images/home-page/product/parking-fines.png';
import RequestTruck from '@/images/home-page/product/request-truck.png';
import NoParking from '@/images/contact/no-parking.png';
import Truck from '@/images/contact/truck.png';
import GasStation from '@/images/contact/gas-station.png';
import NoParkingMobile from '@/images/contact/no-parking-mobile.png';
import TruckMobile from '@/images/contact/truck-mobile.png';
import GasStationMobile from '@/images/contact/gas-station-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowDown } from '@/components/icons/arrowDown';
import cl from 'classnames';

export const ProductCard = ({
  title,
  subtitle,
  type,
  className,
  icon = ArrowDown,
  targetElement = null,
  titleComponent = 'span',
}) => {
  let src = null;
  let mobileSrc = null;
  let alt = '';
  const Icon = icon;

  switch (type) {
    case 'fuelFraud':
      src = FuelFraud;
      alt = 'Fuel Fraud';
      break;
    case 'parkingFines':
      src = ParkingFines;
      alt = 'Parking Fines';
      break;
    case 'requestTruck':
      src = RequestTruck;
      alt = 'Request Truck';
      break;
    case 'noParking':
      src = NoParking;
      mobileSrc = NoParkingMobile;
      alt = 'No Parking';
      break;
    case 'truck':
      src = Truck;
      mobileSrc = TruckMobile;
      alt = 'Truck';
      break;
    case 'gasStation':
      src = GasStation;
      mobileSrc = GasStationMobile;
      alt = 'Gas Station';
      break;
  }

  const Title = titleComponent;

  return (
    <div>
      {targetElement ? (
        <Link
          to={targetElement}
          smooth={true}
          offset={-75}
          duration={1500}
          className=''>
          <div className='rounded-br-0 h-[680px] w-[440px] cursor-pointer overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[580px] max-md:w-[328px]'>
            <div className='group relative h-[680px] w-[440px] transform rounded-card transition duration-500 ease-in-out max-md:h-[580px] max-md:w-[328px]'>
              <Title className='absolute z-[2] p-10 text-4xl text-white max-md:p-8 max-md:text-3xl'>
                {title}
              </Title>
              <div className='relative h-[680px] w-[440px] '>
                <Image
                  src={src}
                  className='object-cover duration-500 ease-in-out group-hover:scale-105'
                  fill
                  alt={alt}
                />
              </div>
              <div className='absolute bottom-0 z-[2] p-10 pr-14 text-lg text-white/50 transition duration-500 ease-in-out group-hover:text-white max-md:text-base'>
                {subtitle}
              </div>
              <CornerButtonContainer>
                <RoundButton
                  icon={Icon}
                  animation='group-hover:scale-125'
                  className={cl(className, 'text-white')}
                />
              </CornerButtonContainer>
            </div>
          </div>
        </Link>
      ) : (
        // We had to make a duplicate because the modal was cursing, there was no time to fix it
        <div className='rounded-br-0 h-[680px] w-[440px] cursor-pointer overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[580px] max-md:w-[328px]'>
          <div className='group relative h-[680px] w-[440px] transform rounded-card transition duration-500 ease-in-out  max-md:h-[580px] max-md:w-[328px]'>
            <Title className='absolute z-[2] p-10 text-5xl text-white max-md:text-4xl'>
              {title}
            </Title>
            <div className='relative h-[680px] w-[440px] max-sm:hidden'>
              <Image
                src={src}
                className='object-cover duration-500 ease-in-out group-hover:scale-105'
                fill
                alt={alt}
              />
            </div>
            <div className='h-[680px] w-[440px] sm:hidden'>
              <Image
                src={mobileSrc}
                className='object-right duration-500 ease-in-out group-hover:scale-105'
                fill
                alt={alt}
              />
            </div>
            <div className='absolute bottom-0 z-[2] p-10 pr-14 text-lg text-white/50 transition duration-500 ease-in-out group-hover:text-white max-md:text-base'>
              {subtitle}
            </div>
            <CornerButtonContainer>
              <RoundButton
                icon={Icon}
                animation='group-hover:scale-125'
                className={cl(className, 'text-white')}
              />
            </CornerButtonContainer>
          </div>
        </div>
      )}
    </div>
  );
};
