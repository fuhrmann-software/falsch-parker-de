import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import Image1 from '@/images/home-page/carousel/img_1.png';
import Image2 from '@/images/home-page/carousel/img_2.png';
import Image3 from '@/images/home-page/carousel/img_3.png';
import Image4 from '@/images/home-page/carousel/img_4.png';
import Image5 from '@/images/home-page/carousel/img_5.png';
import Image6 from '@/images/home-page/carousel/img_6.png';

const CarouselItem = ({ type }) => {
  let src;
  let alt;
  let width;
  let height;

  switch (type) {
    case 1:
      src = Image1;
      alt = 'Brand';
      width = 107;
      height = 73;
      break;
    case 2:
      src = Image2;
      alt = 'Brand';
      width = 107;
      height = 73;
      break;
    case 3:
      src = Image3;
      alt = 'Brand';
      width = 65;
      height = 73;
      break;
    case 4:
      src = Image4;
      alt = 'Brand';
      width = 186;
      height = 47;
      break;
    case 5:
      src = Image5;
      alt = 'Brand';
      width = 125;
      height = 67;
      break;
    case 6:
    default:
      src = Image6;
      alt = 'Brand';
      width = 71;
      height = 73;
      break;
  }

  return (
    <li>
      <div className='flex h-[175px] w-[325px] items-center justify-center rounded-[40px] border border-[#DEDEE0]'>
        <Image src={src} width={width} height={height} alt={alt} />
      </div>
    </li>
  );
};

const items = Array.from({ length: 6 });

export const InfiniteCarousel = () => {
  return (
    <div className='inline-flex w-full max-w-[1400px] flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
      <div className='inline-flex w-full flex-nowrap'>
        <ul className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-1'>
          {items.map((_, index) => (
            <CarouselItem key={uuidv4()} type={index} />
          ))}
          {items.map((_, index) => (
            <CarouselItem key={uuidv4()} type={index} />
          ))}
          {items.map((_, index) => (
            <CarouselItem key={uuidv4()} type={index} />
          ))}
        </ul>
        <ul
          className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-1'
          aria-hidden='true'>
          {items.map((_, index) => (
            <CarouselItem key={uuidv4()} type={index} />
          ))}
          {items.map((_, index) => (
            <CarouselItem key={uuidv4()} type={index} />
          ))}
          {items.map((_, index) => (
            <CarouselItem key={uuidv4()} type={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
