import React from 'react';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';
import Link from 'next/link';

export const PayFineButton = () => {
  return (
    <Link
      target='_blank'
      href='https://app.falsch-parker.ch/ticket/4e7bf67e-7ced-46eb-b646-01dd8d6b4475'>
      <ArrowDotButton theme='green'>Parkbusse bezahlen</ArrowDotButton>
    </Link>
  );
};
