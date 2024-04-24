import React from 'react';
import { useRouter } from 'next/navigation';
import { PayFineButton } from '@/components/buttons/payFineButton';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

export const JoinSection = () => {
  const router = useRouter();
  const goToContactUs = () => {
    router.push('/contact');
  };

  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div className='flex w-full flex-col content-between justify-between rounded-card bg-green p-20 text-white max-md:h-[580px] max-sm:p-6 md:h-[760px]'>
        <div className='flex w-full max-md:flex-col max-sm:text-sm'>
          <div className='flex justify-between max-md:w-full  md:w-1/2'>
            <div className='flex flex-col '>
              <span>Schützengasse 4</span>
              <span>8001 Zürich</span>
            </div>
            <div className='flex flex-col'>
              <span>Kohlestrasse 10</span>
              <span>8952 Schlieren</span>
            </div>
          </div>
          <div className='w-1/2 max-md:w-full md:w-1/2 '>
            <div className='max-md:pt-6 max-sm:py-2 md:text-right'>
              +41 76 561 88 37
            </div>
          </div>
        </div>

        <div className='flex w-full items-end max-sm:flex-col max-sm:items-center'>
          <span className='text-[240px] leading-[0.75] max-lg:text-[180px] max-md:text-[120px] max-sm:py-3'>
            Join
          </span>
          <div
            className='flex w-full max-sm:justify-center sm:items-end sm:justify-end'
            onClick={goToContactUs}>
            <ArrowDotButton theme='light'>Kontaktieren Sie uns</ArrowDotButton>
          </div>
        </div>
      </div>

      <div className='mt-[80px] flex h-[250px] w-full max-w-[450px] flex-col content-between items-center justify-between rounded-card bg-white p-[60px] text-center max-md:mt-4'>
        <span className='text-3xl text-dark max-sm:pb-6'>
          Parkbusse erhalten?
        </span>
        <PayFineButton text='Jetzt bezahlen	' />
      </div>
    </div>
  );
};
