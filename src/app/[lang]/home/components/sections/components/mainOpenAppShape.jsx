import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDownRoundButton } from '@/components/buttons/arrowDownRoundButton';
import styles from './style.module.scss';

export const MainOpenAppShape = () => {
  return (
    <div className='absolute bottom-0 left-0 z-[2] h-[215px] rounded-tr-card bg-light max-lg:w-[350px] max-sm:w-[250px] lg:w-[550px]'>
      <div className='relative h-full'>
        <div className={styles.mainOpenAppShape__left}></div>
        <div className={styles.mainOpenAppShape__bottom}></div>
        <div className='absolute bottom-0 left-0 flex h-full flex-col justify-between'>
          <h1 className='block max-w-[250px] pt-5 text-[34px] max-lg:text-[23px] lg:max-w-[500px]'>
            Beseitigen Sie Falschparker mühelos mit unserer App.
          </h1>
          <Link to='ourProducts' smooth={true} offset={-90} duration={1000}>
            <ArrowDownRoundButton />
          </Link>
        </div>
      </div>
    </div>
  );
};
